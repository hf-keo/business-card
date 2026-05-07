# My Virtual Business Card (GitHub Pages)

I built this repository to host my digital business card. It’s a fast, sleek, and professional way for me to share my contact details and portfolio with others.

## ✨ Features I've Included

*   **Modern Glassmorphism UI:** I used semi-transparent layers and backdrop blurs for a high-end feel.
*   **Directional Tab Animations:** I added logic so the content slides left or right based on the tab order for a smooth experience.
*   **One-Click vCard:** I integrated a dynamic generator so you can save my contact info directly to your phone.
*   **Fully Responsive:** I made sure it scales perfectly for mobile, making it ideal for NFC tags or QR codes.

## 🚀 How I Deploy This

If you want to use my template, here are the two ways I recommend getting it live.

### Option A: Upload via Browser
1. I create a new repo on GitHub (e.g., `business-card`).
2. I click **Add file ➜ Upload files** and upload `index.html` and an empty file named `.nojekyll`.
3. I go to **Settings ➜ Pages**:
    *   **Source:** Deploy from a branch.
    *   **Branch:** `main`, **Folder:** `/ (root)`.
    *   I click **Save**.
4. My site goes live at `https://<my-username>.github.io/business-card/`.

### Option B: Using Git Commands
I use these commands in my terminal to push updates:
```bash
git init
git remote add origin [https://github.com/](https://github.com/)<my-username>/business-card.git
git checkout -b main
touch .nojekyll
git add index.html .nojekyll
git commit -m "Initial commit: My Animated Business Card"
git push -u origin main
