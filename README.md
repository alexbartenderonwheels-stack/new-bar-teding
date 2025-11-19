
# Alex Bar Tending Service — Website package

This folder contains a ready-to-upload static website for **Alex Bar Tending Service**.
Theme: black & gold luxury.

## Included files
- `index.html` — main website
- `styles.css` — styling
- `script.js` — form handling and small interactions
- `terms.html` — terms & cancellation policy
- `images/` — logo files you provided

## Quick setup (GitHub Pages)
1. Create a new GitHub repository (public or private).
2. Upload all files and the `images/` folder to the repository root.
3. In repository settings, enable **GitHub Pages** and select the `main` branch (or `gh-pages`) and the root folder. GitHub will serve the site at `https://<your-username>.github.io/<repo-name>/`.
4. Optionally connect a custom domain in the GitHub Pages settings.

## Contact form (sending emails)
Static hosting (GitHub Pages) cannot send emails by itself. Two options:

**Option A — Free and recommended: Formspree**
1. Go to https://formspree.io and sign up for a free plan.
2. Create a new form and copy the endpoint URL (looks like `https://formspree.io/f/<your-id>`).
3. Open `script.js` and paste that URL into the `FORM_ENDPOINT` variable.
4. The form will then post to Formspree and forward submissions to your email.

**Option B — Netlify Forms**
- If you prefer Netlify, deploy the site to Netlify and enable Netlify Forms. You will need to add a hidden input to the form and follow Netlify's docs.

**Fallback**
- If you don't set up a form endpoint, the form will open the user's email client via `mailto:` as a fallback.

## Customization
- Replace contact info displayed in `index.html` and `terms.html` if needed.
- Color variables are in `styles.css` (`--gold`, `--bg`, etc.). Use the values from your logo if you want further refinement.

## Notes
- The booking form collects event details and sends them via the chosen form endpoint or mailto fallback.
- Cancellation policy: $25 fee if cancelled within 2 days of event.

---

If you want, I can deploy this to GitHub Pages for you (I will provide step-by-step instructions or a deployment script).