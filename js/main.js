/* ============================================================
   JADEN KWEK — Main JS Utilities
   ============================================================ */

/* ── NAV & FOOTER HTML ─────────────────────────────────── */
const NAV_HTML = `
<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">JADEN <span>KWEK</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="/">Home</a></li>
      <li><a href="research.html">Research</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-container">
    <div>
      <div class="footer-brand">JADEN <span>KWEK</span></div>
      <div class="footer-tagline">Equity Research · Fundamental Investing · Kitchener, ON</div>
      <p class="footer-disclaimer">The content on this site is for informational and educational purposes only and does not constitute financial or investment advice.</p>
    </div>
    <div>
      <div class="footer-nav-label">Navigation</div>
      <nav class="footer-links">
        <a href="/">Home</a>
        <a href="research.html">Research</a>
        <a href="blog.html">Blog</a>
        <a href="https://www.linkedin.com/in/jadenkwek" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="mailto:jaden.kwek@gmail.com">Email</a>
      </nav>
    </div>
    <div class="footer-copy">
      <span>© ${new Date().getFullYear()} Jaden Kwek · jadenkwek.com</span>
      <span>Not financial advice.</span>
    </div>
  </div>
</footer>`;

/* ── ICONS ─────────────────────────────────────────────── */
const ICONS = {
  pdf:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  excel: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  link:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
};

/* ── HELPERS ───────────────────────────────────────────── */
function formatDate(dateStr, opts = {}) {
  const d = new Date(dateStr + 'T00:00:00');
  const defaults = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('en-US', { ...defaults, ...opts });
}
function formatDateParts(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    day:   d.getDate(),
    year:  d.getFullYear()
  };
}

function ratingBadge(rating) {
  const cls = { BUY: 'buy', SELL: 'sell', HOLD: 'hold' }[rating] || 'hold';
  return `<span class="badge badge-${cls}">${rating}</span>`;
}

function fileButtons(files) {
  if (!files || !files.length) return '';
  return files.map(f => {
    const cls   = f.type === 'pdf' ? 'pdf' : f.type === 'excel' ? 'excel' : '';
    const icon  = f.type === 'pdf' ? ICONS.pdf : f.type === 'excel' ? ICONS.excel : ICONS.link;
    if (f.url) {
      return `<a class="file-btn ${cls}" href="${f.url}" target="_blank" rel="noopener">${icon}${f.name}</a>`;
    }
    return `<span class="file-btn ${cls}" style="opacity:.45;cursor:default">${icon}${f.name}</span>`;
  }).join('');
}

/* ── INIT (called on every page) ───────────────────────── */
function initPage() {
  // Inject nav
  const navSlot = document.getElementById('nav-placeholder');
  if (navSlot) navSlot.innerHTML = NAV_HTML;

  // Inject footer
  const footSlot = document.getElementById('footer-placeholder');
  if (footSlot) footSlot.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Mobile menu toggle
  document.addEventListener('click', e => {
    const toggle = e.target.closest('#navToggle');
    const links  = document.getElementById('navLinks');
    if (!links) return;
    if (toggle) { links.classList.toggle('open'); return; }
    if (!e.target.closest('.nav')) links.classList.remove('open');
  });

  // Remove loader
  const loader = document.getElementById('site-loader');
  if (loader) {
    setTimeout(() => { loader.style.opacity = '0'; setTimeout(() => loader.remove(), 400); }, 150);
  }
}

/* ── HOME PAGE ─────────────────────────────────────────── */
function renderHome() {
  renderFeaturedResearch();
  renderRecentBlog();
}

function renderFeaturedResearch() {
  const container = document.getElementById('featured-research');
  if (!container || !CONTENT?.research?.length) return;
  const items = [...CONTENT.research].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  container.innerHTML = items.map(r => researchCardHTML(r)).join('');
}

function renderRecentBlog() {
  const container = document.getElementById('recent-blog');
  if (!container || !CONTENT?.blog?.length) return;
  const posts = [...CONTENT.blog].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
  container.innerHTML = posts.map(p => blogRowHTML(p)).join('');
}

/* ── RESEARCH PAGE ─────────────────────────────────────── */
let activeFilter = 'all';

function renderResearchPage() {
  buildFilterBar();
  renderResearchGrid(CONTENT.research);
}

function buildFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const sectors = ['All', ...new Set(CONTENT.research.flatMap(r => r.tags || [r.sector]))];
  const ratings  = ['BUY', 'HOLD', 'SELL'];
  bar.innerHTML = sectors.map(s =>
    `<button class="filter-btn${s==='All'?' active':''}" data-filter="${s.toLowerCase()}">${s}</button>`
  ).join('') + '<span style="width:1px;background:var(--border);height:24px;margin:0 0.25rem"></span>' +
  ratings.map(r =>
    `<button class="filter-btn" data-filter="${r.toLowerCase()}">${r}</button>`
  ).join('');

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    const filtered = activeFilter === 'all'
      ? CONTENT.research
      : CONTENT.research.filter(r =>
          r.tags?.some(t => t.toLowerCase() === activeFilter) ||
          r.sector?.toLowerCase() === activeFilter ||
          r.rating?.toLowerCase() === activeFilter
        );
    renderResearchGrid(filtered);
  });
}

function renderResearchGrid(items) {
  const grid = document.getElementById('research-grid');
  if (!grid) return;
  if (!items.length) {
    grid.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><p>No research notes match this filter yet.</p></div>`;
    return;
  }
  const sorted = [...items].sort((a, b) => b.date.localeCompare(a.date));
  grid.innerHTML = sorted.map(r => researchCardHTML(r)).join('');
}

/* ── BLOG PAGE ─────────────────────────────────────────── */
function renderBlogPage() {
  const grid = document.getElementById('blog-grid');
  if (!grid || !CONTENT?.blog?.length) return;
  const sorted = [...CONTENT.blog].sort((a, b) => b.date.localeCompare(a.date));
  grid.innerHTML = sorted.map(p => blogCardHTML(p)).join('');
}

/* ── POST PAGE ─────────────────────────────────────────── */
function renderPostPage() {
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'));
  const post   = CONTENT.blog.find(p => p.id === id);

  if (!post) {
    document.getElementById('post-content').innerHTML =
      `<div class="empty-state"><p>Post not found. <a href="blog.html" style="color:var(--accent)">← Back to Blog</a></p></div>`;
    return;
  }

  document.title = `${post.title} — Jaden Kwek`;
  const d = formatDateParts(post.date);

  document.getElementById('post-content').innerHTML = `
    <a href="blog.html" class="btn btn-outline btn-sm" style="margin-bottom:2rem;display:inline-flex">← Back to Blog</a>
    <div class="post-meta-bar">
      <span class="badge badge-sector">${post.category}</span>
      <span>${formatDate(post.date)}</span>
    </div>
    <h1 class="post-title">${post.title}</h1>
    <p class="post-excerpt">${post.excerpt}</p>
    <div class="post-divider"></div>
    <div class="post-body">${post.content}</div>
    <div class="post-divider" style="margin-top:3rem"></div>
    <a href="blog.html" class="btn btn-outline btn-sm" style="margin-top:1rem">← All Posts</a>
  `;

  // Render recent posts in sidebar
  const sidebar = document.getElementById('post-sidebar');
  if (sidebar) {
    const recent = CONTENT.blog.filter(p => p.id !== id)
      .sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
    sidebar.innerHTML = `
      <div class="sidebar-card">
        <h4>Recent Posts</h4>
        ${recent.map(p => `
          <div style="padding:0.6rem 0;border-bottom:1px solid var(--border)">
            <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:0.2rem">${formatDate(p.date, {month:'short',day:'numeric',year:'numeric'})}</div>
            <a href="post.html?id=${p.id}" style="font-size:0.875rem;font-weight:500;color:var(--navy);transition:color .2s"
               onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--navy)'">${p.title}</a>
          </div>`).join('')}
      </div>
      <div class="sidebar-card">
        <h4>About the Author</h4>
        <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.6">${CONTENT.about.title} · ${CONTENT.about.school}</p>
        <a href="about.html" class="btn btn-outline btn-sm" style="margin-top:1rem;width:100%;justify-content:center">View Profile</a>
      </div>`;
  }
}

/* ── REUSABLE CARD TEMPLATES ───────────────────────────── */
function researchCardHTML(r) {
  const ratingCls = r.rating ? `rating-${r.rating.toLowerCase()}` : '';
  return `
  <div class="card ${ratingCls}">
    <div class="card-body">
      <div class="research-card-header">
        <div>
          <div class="research-ticker">${r.ticker}</div>
          <div class="research-company">${r.company}</div>
        </div>
        ${ratingBadge(r.rating)}
      </div>
      <div class="research-meta">
        <span class="badge badge-sector">${r.sector}</span>
        <span class="research-meta-dot">·</span>
        <span>${formatDate(r.date, {month:'short', day:'numeric', year:'numeric'})}</span>
        ${r.targetPrice ? `<span class="research-meta-dot">·</span><span>Target: <strong>${r.targetPrice}</strong></span>` : ''}
      </div>
      <p class="research-thesis">${r.thesis}</p>
    </div>
    ${r.files && r.files.length ? `
    <div class="card-footer">
      <div class="research-files">${fileButtons(r.files)}</div>
    </div>` : ''}
  </div>`;
}

function blogRowHTML(p) {
  const d = formatDateParts(p.date);
  return `
  <a href="post.html?id=${p.id}" class="blog-row" style="text-decoration:none">
    <div class="blog-date-col">
      <span class="month">${d.month}</span>
      <span class="day">${d.day}</span>
      <span class="year">${d.year}</span>
    </div>
    <div>
      <div class="blog-row-category">${p.category}</div>
      <div class="blog-row-title">${p.title}</div>
      <div class="blog-row-excerpt">${p.excerpt}</div>
    </div>
    <span class="blog-arrow">${ICONS.arrow}</span>
  </a>`;
}

function blogCardHTML(p) {
  return `
  <a href="post.html?id=${p.id}" class="card" style="display:block;text-decoration:none">
    <div class="card-body">
      <div class="blog-card-date">${formatDate(p.date, {month:'long', day:'numeric', year:'numeric'})}</div>
      <div class="blog-card-category">${p.category}</div>
      <h2 class="blog-card-title">${p.title}</h2>
      <p class="blog-card-excerpt">${p.excerpt}</p>
      <span class="blog-card-read-more">Read more ${ICONS.arrow}</span>
    </div>
  </a>`;
}
