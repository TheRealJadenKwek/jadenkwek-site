# jadenkwek.com — Portfolio Website

Clean, minimal investment research portfolio. Built with vanilla HTML, CSS, and JavaScript — no framework, no build step required.

---

## File Structure

```
Website/
├── index.html          ← Homepage
├── research.html       ← Research notes listing
├── blog.html           ← Blog listing
├── post.html           ← Individual post viewer (loaded via ?id=X)
├── about.html          ← About page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── content.js      ← ★ EDIT THIS to update your content
│   └── main.js         ← Shared utilities (don't edit)
├── files/
│   └── research/       ← Drop your PDF memos and Excel models here
└── img/
    └── profile.jpg     ← Your profile photo
```

---

## How to Update Content

### Add a Research Note
1. Open `js/content.js`
2. Add a new object to the `CONTENT.research` array (copy the template in the file)
3. Drop your PDF / Excel files into `files/research/`
4. Reference them in the `files` field of your object

### Publish a Blog Post
1. Open `js/content.js`
2. Add a new object to the `CONTENT.blog` array (copy an existing post)
3. Give it a unique `id` (increment by 1 from the highest existing id)
4. Write your content in the `content` field using simple HTML tags:
   - `<p>` for paragraphs
   - `<h2>` for section headings
   - `<blockquote>` for callout quotes
   - `<strong>` for bold
   - `<ul><li>` for bullet lists

### Update Your Bio / Profile
Edit the `CONTENT.about` object in `js/content.js`.

---

## Deploying to jadenkwek.com

### Option A — Netlify (Recommended, Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop this entire `Website` folder onto the Netlify dashboard
3. Your site is live — then connect your domain `jadenkwek.com` in Settings → Domain Management

### Option B — GitHub Pages (Free)
1. Create a GitHub account and a new repository called `jadenkwek.com`
2. Upload all files to the repository
3. Go to Settings → Pages → set source to `main` branch
4. Add your custom domain in the Pages settings

### Option C — Cloudflare Pages (Free, Fast)
1. Push files to a GitHub repo
2. Connect to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Add `jadenkwek.com` as your custom domain

---

## Updating the Site After Deploy
- **Netlify**: Drag and drop the updated folder again, or connect GitHub for auto-deploys
- **GitHub Pages**: Push changes to the repo
- **Cloudflare Pages**: Push changes to the repo

---

*Last updated: 2025*
