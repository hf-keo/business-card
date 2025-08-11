# Virtual Business Card (GitHub Pages)
This folder contains a single-file website (`index.html`) for your business card. It has:
- Your name/title
- Contact buttons
- A downloadable vCard
- A QR code that **automatically points to whatever URL the page is hosted on** (no need to edit)

## Quick Deploy — Option A: Upload in the browser
1. Create a repo on GitHub (e.g., `business-card`).
2. Click **Add file ➜ Upload files**, upload `index.html` and `.nojekyll` (empty file).
3. Go to **Settings ➜ Pages**:
   - **Build and deployment**: *Deploy from a branch*.
   - **Branch**: `main` (or `master`), **Folder**: `/ (root)`.
   - Save.
4. Wait ~1 minute. Your site will be live at:
   - `https://<your-username>.github.io/business-card/`
5. Visit the URL and test the QR — it should open the same page.

## Quick Deploy — Option B: Git commands
```bash
git init
git remote add origin https://github.com/<your-username>/business-card.git
git checkout -b main
echo > .nojekyll
git add index.html .nojekyll
git commit -m "Initial commit"
git push -u origin main
```
Then configure **Settings ➜ Pages** like step 3 above.

## Custom domain (optional)
1. In **Settings ➜ Pages**, set your custom domain (e.g., `card.yourdomain.com`).
2. GitHub will ask you to add a DNS record:
   - For a **subdomain** (`card.yourdomain.com`): create a **CNAME** record pointing to `<your-username>.github.io`.
   - For an **apex/root** domain (`yourdomain.com`): use **A** or **ALIAS/ANAME** records to GitHub Pages IPs (see GitHub docs).
3. Put a file named `CNAME` at the repo root containing exactly your domain (e.g., `card.yourdomain.com`).
4. Wait for DNS to propagate; HTTPS will auto-provision.

## Tips
- Keep `.nojekyll` so GitHub doesn’t run Jekyll and accidentally ignore your files.
- Edit `index.html` to change colors/text. No build step required.
- If you change the repo name later, your URL will change too; the QR still works (it uses the page's current URL automatically).
