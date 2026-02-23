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

  /* ── API KEYS ──────────────────────────────────────────
     Finnhub: free stock price API — sign up at finnhub.io
     Paste your key below (takes ~2 minutes, no credit card).
  ──────────────────────────────────────────────────────── */
  config: {
    finnhubKey: "d6e9llpr01qppk0nh230d6e9llpr01qppk0nh23g"
  },

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
      "I graduated from Wilfrid Laurier University in May 2025 with a double degree in Business Administration and Financial Mathematics, finishing with a 3.93 GPA. My focus is equity research, financial modelling, and building a disciplined, consistent approach to investing.",
      "Through internships in fixed income at Empire Life Investments, specialty underwriting at CNA Financial, and business banking at Libro Credit Union, I have built a strong foundation in credit analysis, financial statement analysis, and quantitative modelling.",
      "I am a CFA Level I charterholder (Nov 2023) and currently preparing for the CFA Level II exam in May 2026. I also manage a personal trading account across equities, indices, crypto, and commodities including gold, which keeps me closely engaged with markets every day."
    ],
    philosophy: "I start with macro. Pair charts tell me which asset class is leading, and indicators like the TGA, ISM PMI, and global liquidity tell me what the broader environment looks like. Once I know where the opportunity is, I go bottom-up on equities to find where the value is, and use technical analysis for assets like gold and bitcoin where there is no balance sheet to work from.",
    certifications: [
      { name: "CFA Level I", issuer: "CFA Institute", date: "November 2023", status: "Earned" },
      { name: "CFA Level II Candidate", issuer: "CFA Institute", date: "May 2026", status: "In Progress" },
      { name: "Mensa Canada", issuer: "Mensa International", date: "2025", status: "Earned" }
    ],
    skills: [
      "Equity Research", "Financial Modelling", "DCF / Valuation", "Credit Analysis",
      "Bloomberg Terminal", "Capital IQ", "Excel", "R (Statistical Computing)",
      "Fixed Income", "Financial Statements", "Technical Analysis", "Underwriting"
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
        desc:    "Manage a personal trading account across equities, indices, crypto, and commodities including gold. Track macro indicators alongside technical and fundamental analysis."
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
      ticker:       "AEM",
      company:      "Agnico Eagle Mines Limited",
      sector:       "Gold Mining",
      rating:       "BUY",
      targetPrice:  "$300",
      currentPrice: "$228",
      date:         "2026-02-23",
      thesis:       "AEM is the lowest-cost senior gold producer globally (FY2025A AISC $1,339/oz vs. peer median ~$1,500/oz), offering exceptional operating leverage to gold prices with a net-debt-free balance sheet, 54.8 Moz reserve base, and a blended valuation target of $300/share. DCF target $371, Comps $329.",
      files: [
        { name: "Financial Model", type: "excel", url: "files/research/AEM-model.xlsx" }
      ],
      tags: ["Gold Mining", "Materials", "Large Cap"]
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
      excerpt:  "Why I decided to put my research and trading ideas online, and what you can expect to find here.",
      content:  `
        <p>I've been meaning to do this for a while. I track a lot — macro indicators, pair charts, individual names, trades, and most of it just sits in my brain. This site is my attempt to change that.</p>

        <p>The main reason I'm doing this is that publishing forces you to be precise. It's easy to have a vague bullish view on something. It's harder to write it down, put a price target on it, and explain exactly why. That friction is the point.</p>

        <h2>What's on here</h2>
        <p>Three sections:</p>
        <ul>
          <li><strong>Investment Research</strong> — My equity research notes with the models attached. These are my own views, not financial advice.</li>
          <li><strong>Trading Blog</strong> — Macro commentary, trades I'm watching, and whatever I'm thinking about in markets. Covers equities, crypto, gold, and indices.</li>
          <li><strong>About</strong> — Background and what I'm working towards.</li>
        </ul>

        <h2>How I approach markets</h2>
        <p>I start with macro. Pair charts, the TGA, ISM PMI, global liquidity, that tells me which asset class makes sense to be in. Then I go bottom-up to find the specific names, and use technical analysis for things like gold and bitcoin where there's no income statement to work from.</p>

        <p>Anyway, more to come. Thanks for reading.</p>
      `
    },
  ]
};
