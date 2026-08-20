# lessmoke — legal & support site

Static site behind the **Privacy Policy URL** and **Support URL** that App Store Connect
requires for the [lessmoke](https://apps.apple.com/) iOS app.

| Page | Used as |
| --- | --- |
| `index.html` | Support URL |
| `privacy.html` | Privacy Policy URL |
| `terms.html` | EULA, linked from the app and the App Store description |

Plain HTML, CSS and one small script — no build step, no dependencies. Every page ships in
both English and Turkish; `lang.js` shows the half that matches the reader and remembers the
choice. Palette matches the app's own design system.

## Editing

Change the HTML and push. GitHub Pages serves `main` from the repository root; `.nojekyll`
keeps Jekyll out of the way.

## Keeping it honest

The app also ships offline copies of these documents in `lessmoke/Resources/PrivacyPolicy.html`
and `lessmoke/Resources/TermsOfUse.html`. **Change both.** App Review compares the in-app text
with the URL in App Store Connect, and a mismatch is worth a rejection.
