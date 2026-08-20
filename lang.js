/* Language switch.
   The whole page ships in both languages; CSS shows the half that matches
   <html lang>. Choice is remembered so moving between the policy, the terms
   and the support page does not reset it. */
(function () {
  var KEY = "lessmoke.lang";
  var SUPPORTED = ["en", "tr"];

  function pick() {
    try {
      var saved = localStorage.getItem(KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {
      /* Safari private mode throws on localStorage; fall through to the browser. */
    }
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      if (String(langs[i]).toLowerCase().indexOf("tr") === 0) return "tr";
    }
    return "en";
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    var buttons = document.querySelectorAll(".langswitch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        "aria-pressed",
        buttons[i].dataset.setLang === lang ? "true" : "false"
      );
    }
    var title = document.querySelector("title[data-title-" + lang + "]");
    if (title) document.title = title.getAttribute("data-title-" + lang);
  }

  // Run before first paint so the page never flashes the wrong language.
  apply(pick());

  document.addEventListener("DOMContentLoaded", function () {
    apply(document.documentElement.lang);
    document.addEventListener("click", function (event) {
      var button = event.target.closest
        ? event.target.closest(".langswitch button")
        : null;
      if (!button) return;
      var lang = button.dataset.setLang;
      try {
        localStorage.setItem(KEY, lang);
      } catch (e) {
        /* Not being able to remember the choice is not worth failing over. */
      }
      apply(lang);
    });
  });
})();
