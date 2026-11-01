# AVA Creative — portfolio website

Static HTML/CSS/JS website, ready for GitHub Pages. This is an original redesign using the AVA Creative brief. It does not overwrite your existing repository until you upload its files.

## File structure
- `index.html` — all visible copy, links, services, projects, certificates.
- `assets/css/style.css` — colors, fonts, layouts, effects and mobile styles.
- `assets/js/script.js` — responsive navigation, reveal effects, missing-image fallbacks.
- `assets/images/*.svg` — **illustrative** project mockups, not real screenshots.

## IMPORTANT: add your actual assets
1. Upload your **original AVA Creative logo** as `assets/images/ava-logo.png`. Do not resize, stretch or redraw it. Logo automatically replaces the fallback wordmark.
2. Upload your **professional portrait** as `assets/images/airah-portrait.jpg`. The image automatically replaces the portrait placeholder. For optimal quality use a properly cropped, compressed high-resolution photo (approximately 900–1200px wide).
3. Replace illustrative project preview paths in `index.html` with real work images when available. Store them in `assets/images/`. Do not publish client-sensitive information or unapproved customer data.
4. Add actual certificates as image previews if desired. The seven currently provided Google Drive links are already clickable. Verify their sharing permissions.
5. Replace testimonial placeholders only with **verified approved client or supervisor quotes**.
6. Confirm that `https://calendly.com/airahjoyvicente-va` is correct and publicly bookable. If not, update the booking button link in `index.html`.
7. The user-provided project link text and hyperlink did not match; the live Shopify store is used as the Shopify project's main link: `https://1g1100-wr.myshopify.com/`.

## Update your existing GitHub Pages site
1. Sign in at github.com and open the repository named `airahjoyva.github.io`.
2. Back up any existing `index.html`, CSS, JS and image files you want to keep.
3. Upload the **contents of this folder** to the root of that repository (so `index.html` is at the root, NOT inside a nested folder). Preserve `assets/css`, `assets/js` and `assets/images`.
4. Commit your changes to the `main` branch.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**; branch `main`, folder `/ (root)`, then save if needed. If already configured, you generally do not need to click Save again; pushing new commits redeploys automatically.
6. Visit `https://airahjoyva.github.io/`, hard-refresh if the old design is cached, and verify the pages/links/images.

## Editing tips
- Brand colors are CSS variables at the top of `assets/css/style.css`.
- All sections are labelled with HTML comments in `index.html`.
- Add more project cards by copying any `<article class="project-card ...">` block inside `.project-grid`, then change its title, description, image, and links.
- Change the two certificate URLs only when you have verified access and titles.
- The site requires no backend, no build system and no paid dependencies; Google Fonts and outbound links require internet access.
