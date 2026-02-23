/* ============================================================
   JADEN KWEK — Content Data File
   ============================================================
   HOW TO UPDATE YOUR SITE:

   ▸ ADD RESEARCH: Copy one of the objects in CONTENT.research[]
     and fill in your details. Add PDF/Excel files to /files/research/
     and reference their filenames in the "files" array.

   ▸ ADD A BLOG POST: Copy one of the objects in CONTENT.blog[]
     and fill in your content using basic HTML tags.

   ▸ EDIT YOUR BIO: Update CONTENT.about with your latest info.
   ============================================================ */

const CONTENT = {

  /* ── YOUR PROFILE ─────────────────────────────────────── */
  about: {
    name:      "Jaden Kwek",
    title:     "Aspiring Equity Research Analyst",
    school:    "Wilfrid Laurier University",
    degree:    "BBA & BSc Financial Mathematics, Double Degree",
    gpa:       "3.93 / 4.00",
    location:  "Kitchener, ON · Open to Opportunities",
    email:     "jaden.kwek@gmail.com",
    linkedin:  "https://www.linkedin.com/in/jadenkwek",
    bio: [
      "I am a double-degree student at Wilfrid Laurier University studying Business Administration and Financial Mathematics, maintaining a 3.93 GPA. My focus is on fundamental equity research, financial modelling, and developing a rigorous, process-driven approach to investing.",
      "Through internships in fixed income at Empire Life Investments, specialty underwriting at CNA Financial, and business banking at Libro Credit Union, I have built a strong foundation in credit analysis, financial statement analysis, and quantitative modelling.",
      "I am a CFA Level I charterholder (Nov 2023) and currently preparing for the CFA Level II exam in May 2026. I also trade my own discretionary account, which keeps me closely engaged with markets on a daily basis."
    ],
    philosophy: "I believe that durable alpha comes from deep fundamental work — understanding businesses at a level that the market has not yet fully priced in. My process is bottom-up, thesis-driven, and focused on identifying mismatches between intrinsic value and market price.",
    certifications: [
      { name: "CFA Level I", issuer: "CFA Institute", date: "November 2023", status: "Earned" },
      { name: "CFA Level II Candidate", issuer: "CFA Institute", date: "May 2026", status: "In Progress" },
      { name: "Mensa Canada Member", issuer: "Mensa International", date: "2023", status: "Active" }
    ],
    skills: [
      "Equity Research", "Financial Modelling", "DCF / Valuation", "Credit Analysis",
      "Bloomberg Terminal", "Capital IQ", "Excel / VBA", "R (Statistical Computing)",
      "Fixed Income", "Financial Statements", "Python (Basic)", "Underwriting"
    ],
    experience: [
      {
        period:  "2024",
        title:   "Fixed Income Investment Analyst",
        org:     "Empire Life Investments",
        desc:    "Performed credit analysis on corporate bonds and structured products, supported portfolio managers with quantitative research and market commentary."
      },
      {
        period:  "2023",
        title:   "Specialty Underwriting Co-op",
        org:     "CNA Financial",
        desc:    "Underwrote specialty insurance policies, analysed financial statements of corporate clients to assess risk, and developed pricing models."
      },
      {
        period:  "2022",
        title:   "Business Banking Analyst",
        org:     "Libro Credit Union",
        desc:    "Supported relationship managers with credit applications, financial analysis, and client portfolio management for SME banking clients."
      },
      {
        period:  "Ongoing",
        title:   "Discretionary Trader",
        org:     "Self-Directed",
        desc:    "Manage a personal trading account applying fundamental and technical analysis across equities. Maintain a detailed trade journal and performance log."
      }
    ]
  },

  /* ── INVESTMENT RESEARCH ────────────────────────────────
     To add a new research note:
     1. Copy the template block below
     2. Fill in all fields
     3. Drop your PDF / Excel files into /files/research/
     4. Reference them in the "files" array

     TEMPLATE:
     {
       id:          <unique number>,
       ticker:      "TICK",
       company:     "Company Full Name",
       sector:      "Sector",
       rating:      "BUY" | "HOLD" | "SELL",
       targetPrice: "$XXX",
       currentPrice:"$XXX",
       date:        "YYYY-MM-DD",
       thesis:      "One to two sentence investment thesis for the card preview.",
       files: [
         { name: "Investment Memo", type: "pdf",   url: "files/research/filename.pdf"  },
         { name: "Financial Model", type: "excel", url: "files/research/filename.xlsx" }
       ],
       tags: ["Sector", "Large Cap"]
     },
  ──────────────────────────────────────────────────────── */
  research: [
    {
      id:           1,
      ticker:       "EXAMPLE",
      company:      "Your First Research Note",
      sector:       "Technology",
      rating:       "BUY",
      targetPrice:  "$—",
      currentPrice: "$—",
      date:         "2025-02-01",
      thesis:       "Add your first research note by editing content.js. Drop your PDF memo and Excel model into /files/research/, then update the files array below.",
      files:        [],
      tags:         ["Technology"]
    }
  ],

  /* ── BLOG POSTS ─────────────────────────────────────────
     To add a new blog post:
     1. Copy one of the post objects below
     2. Give it a unique id (increment by 1)
     3. Write your content in the "content" field using HTML
        — Use <p> for paragraphs
        — Use <h2> for section headers
        — Use <blockquote> for callout quotes
        — Use <strong> for bold text
        — Use <ul><li> for bullet lists
  ──────────────────────────────────────────────────────── */
  blog: [
    {
      id:       1,
      title:    "Why I Started This Site",
      date:     "2025-02-23",
      category: "Meta",
      excerpt:  "A brief note on why I decided to publish my investment research and trading journal online — and what you can expect to find here.",
      content:  `
        <p>Welcome to my site. I'm Jaden — an aspiring equity research analyst with a passion for fundamental investing, financial modelling, and understanding businesses deeply.</p>

        <p>I started this site for one simple reason: writing forces rigour. Publishing research publicly raises the bar — you can't be sloppy when your name is attached to it. Every memo, every model, every blog post is a commitment to do the work properly.</p>

        <h2>What You'll Find Here</h2>
        <p>This site has three main sections:</p>
        <ul>
          <li><strong>Investment Research</strong> — Long-form equity research notes, including my financial models and investment memos. These are my own views, not financial advice.</li>
          <li><strong>Trading Blog</strong> — Commentary on markets, trades I'm tracking, macro themes, and lessons learned from my discretionary trading account.</li>
          <li><strong>About</strong> — My background, experience, and what I'm working towards.</li>
        </ul>

        <h2>My Process</h2>
        <p>I'm a bottom-up, fundamentals-first investor. I look for businesses with durable competitive advantages, strong capital allocation, and management teams that think like owners — trading at prices that don't yet reflect their long-term value.</p>

        <blockquote>The goal is never to be interesting. The goal is to be right.</blockquote>

        <p>Thanks for reading. More to come.</p>
      `
    },
    {
      id:       2,
      title:    "Breaking Down a DCF: The Assumptions That Matter Most",
      date:     "2025-01-15",
      category: "Education",
      excerpt:  "A DCF is only as good as its assumptions. Here's how I think about the inputs that drive the most value — and the common mistakes to avoid.",
      content:  `
        <p>A discounted cash flow model is the foundation of fundamental equity valuation. But in practice, most of the value debate comes down to a handful of key assumptions. Understanding which levers matter — and how sensitive your output is to each — is far more important than building a technically flawless model.</p>

        <h2>The Three Inputs That Drive 80% of the Value</h2>
        <p>In nearly every DCF I build, three assumptions dominate the output:</p>
        <ul>
          <li><strong>Revenue growth in years 3–7.</strong> Near-term growth is usually visible. Terminal value is a separate discussion. The middle years — where the business has moved past its current trajectory but hasn't yet reached maturity — are where the most analytical work pays off.</li>
          <li><strong>Terminal growth rate.</strong> A change of 50bps in the terminal growth rate can move equity value by 15–20% for a high-multiple business. Always sanity-check this against long-run nominal GDP growth.</li>
          <li><strong>WACC / discount rate.</strong> This is both the most important and the most abused input. I prefer to run scenarios rather than anchor on a point estimate.</li>
        </ul>

        <h2>The Mistake Most People Make</h2>
        <p>Most people optimise for precision in their near-term forecasts and then apply a single terminal value. This is backwards. The terminal value typically represents 60–80% of the total enterprise value — getting it roughly right matters far more than nailing your Year 2 EBITDA margin to two decimal places.</p>

        <blockquote>A model should be a structured way to think about a business, not a false oracle of precision.</blockquote>

        <h2>How I Use My DCFs</h2>
        <p>I use DCFs to understand the implied expectations embedded in the current stock price. Rather than asking "what is this worth?", I ask "what does the market need to believe for this price to make sense?" That framing is far more useful for identifying mispricings.</p>

        <p>More on valuation methodology in future posts.</p>
      `
    }
  ]
};
