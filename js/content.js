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
    degree:    "BBA & BA Financial Mathematics, Double Degree",
    gpa:       "3.93 / 4.00",
    location:  "Kitchener, ON · Open to Opportunities",
    email:     "jaden.kwek@gmail.com",
    linkedin:  "https://www.linkedin.com/in/jadenkwek",
    bio: [
      "I graduated from Wilfrid Laurier University in May 2025 with a double degree in Business Administration and Financial Mathematics (BA), finishing with a 3.93 GPA. My focus is equity research, financial modelling, and building a disciplined, consistent approach to investing.",
      "Through internships in fixed income at Empire Life Investments, specialty underwriting at CNA Financial, and business banking at Libro Credit Union, I have built a strong foundation in credit analysis, financial statement analysis, and quantitative modelling.",
      "I am a CFA Level I charterholder (Nov 2023) and currently preparing for the CFA Level II exam in May 2026. Alongside my research work, I actively trade equities, commodities, and crypto in a personal account, which keeps me engaged with live market dynamics and sharpens both my fundamental and macro thinking."
    ],
    philosophy: "Good equity research starts with understanding the business. I build financial models from scratch, stress-test assumptions across scenarios, and try to identify where the market consensus is wrong before I form a view on valuation. Macro analysis gives me the broader context: which sectors face structural headwinds, where the rate environment is heading. But it informs the research rather than replacing it. On the trading side, technical analysis is equally important — price action and market structure are often the best guide for timing and positioning, particularly in assets like gold and crypto where traditional valuation anchors are weak. The two disciplines reinforce each other: research tells me what to own, and trading discipline keeps me honest about when and how much.",
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
        title:   "Independent Research & Active Trading",
        org:     "Self-Directed",
        desc:    "Publish equity research memos with financial models, and actively trade equities, commodities, and crypto in a personal account. Fundamental and macro analysis drive both research and positioning."
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
        { name: "Investment Memo",  type: "pdf",   url: "files/research/AEM-memo.pdf"          },
        { name: "Financial Model",  type: "excel", url: "files/research/AEM-model.xlsx"         },
        { name: "Presentation",     type: "pptx",  url: "files/research/AEM-presentation.pptx"  }
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
        <p>I've been meaning to do this for a while. I track a lot: macro indicators, pair charts, individual names, trades, and most of it just sits in my brain. This site is my attempt to change that.</p>

        <p>The main reason I'm doing this is that publishing forces you to be precise. It's easy to have a vague bullish view on something. It's harder to write it down, put a price target on it, and explain exactly why. That friction is the point.</p>

        <h2>What's on here</h2>
        <p>Three sections:</p>
        <ul>
          <li><strong>Investment Research</strong>: My equity research notes with the models attached. These are my own views, not financial advice.</li>
          <li><strong>Trading Blog</strong>: Macro commentary, trades I'm watching, and whatever I'm thinking about in markets. Covers equities, crypto, gold, and indices.</li>
          <li><strong>About</strong>: Background and what I'm working towards.</li>
        </ul>

        <h2>How I approach markets</h2>
        <p>I start with macro. Pair charts, the TGA, ISM PMI, global liquidity, that tells me which asset class makes sense to be in. Then I go bottom-up to find the specific names, and use technical analysis for things like gold and bitcoin where there's no income statement to work from.</p>

        <p>Anyway, more to come. Thanks for reading.</p>
      `
    },
    {
      id:       2,
      title:    "Trading Week Feb 23–27: Rough Start",
      date:     "2026-02-23",
      category: "Weekly Recap",
      excerpt:  "Bitcoin dumps to $64,700, gold hits $5,200, and I'm sitting here regretting selling my gold in early February. Weekly breakdown across crypto, DXY, and macro.",
      content:  `
        <p>Not going to sugarcoat it: this has been a rough start to the week. Everything is down, the macro picture is mixed, and I'm dealing with some bad positioning that I need to talk through. Let's get into it.</p>

        <h2>Bitcoin</h2>
        <p>BTC is down 4.4% on the day, sitting at $64,700. Not a great look. What makes it worse is the context around how I got here.</p>

        <img src="img/blog/feb23-27/btc.png" alt="BTC/USD chart" class="post-img" />

        <p>I sold my gold position in early February and moved the whole thing into crypto. At the time I thought it made sense. In hindsight, not so much.</p>

        <h2>Gold — The One That Hurts</h2>
        <p>I sold gold at $4,880. It's now at $5,200. I then bought Bitcoin at $70,800. It's now at $64,700. That's the trade in a nutshell and it's painful to look at.</p>

        <img src="img/blog/feb23-27/gold.png" alt="XAU/USD chart" class="post-img" />

        <p>The obvious question is whether I should just sell crypto and rotate back into gold now. I don't think so. The move has already happened and chasing it here feels wrong. I'm going to hold what I have and wait for a better entry point on the pair.</p>

        <h2>Altcoins</h2>
        <p>Broader crypto is getting hit just as hard. Fartcoin and SPX are both down around 10% on the day. Hyperliquid is getting eviscerated. I have a long on HYPE from $36 which I am not happy about. That entry was a mistake and I'm sitting in the red on it.</p>

        <img src="img/blog/feb23-27/watchlist.png" alt="Crypto watchlist" class="post-img" />

        <p>PEPE is one of the few holding up decently today which is interesting given the broader carnage. Doesn't change my overall read on the space.</p>

        <h2>BTC/GOLD Pair</h2>
        <p>Looking at the BTC/GOLD 4H chart, the setup is pretty bearish. The pair has been grinding lower and I don't see a strong case for it reversing right now. That said, I'm not going to flip my entire portfolio on a 4H chart. I'll wait to see if there's a bounce on this pair before I consider making any moves.</p>

        <img src="img/blog/feb23-27/btc-gold.png" alt="BTC/GOLD 4H ratio chart" class="post-img" />

        <h2>DXY</h2>
        <p>I'm still short DXY and still believe this is a local top. The Trump tariff noise (15% across the board) is annoying but I think the market is going to shrug at it eventually. It's hard to take it seriously as a sustained dollar catalyst when the underlying economic picture is softening. We'll see.</p>

        <img src="img/blog/feb23-27/dxy.png" alt="DXY chart" class="post-img" />

        <h2>Macro: TGA and Global Liquidity</h2>
        <p>TGA is sitting at $912B which is still quite high. The RRP has already been fully drained so there's no liquidity coming from there. For risk assets to get a real bid, I think we need to start seeing that TGA come down. Watching this closely.</p>

        <img src="img/blog/feb23-27/tga.png" alt="TGA / Global liquidity chart" class="post-img" />

        <h2>ISM PMI</h2>
        <p>ISM came in at 52.6 which is actually a good number (anything above 50 is expansion). The confusing part is that risk assets are still getting sold off despite this. Maybe the market is more focused on the tariff noise and crypto deleveraging than the underlying data. I'm not reading too much into the disconnect yet, but it's something to watch.</p>

        <img src="img/blog/feb23-27/ism.png" alt="ISM PMI chart" class="post-img" />

        <h2>BTC Liquidation Heatmap</h2>
        <p>Looking at the 3-day liquidation heatmap, there's still a pocket of liquidity sitting around $63k. Not a lot below that though. Given the setup, a high leverage scalp long with a limit order at $63k could make some sense here; the liquidity is there and the risk/reward on a short-term bounce is decent if you're disciplined with the stop.</p>

        <img src="img/blog/feb23-27/liquidation-heatmap.png" alt="BTC 3-day liquidation heatmap" class="post-img" />

        <p>That's it for now. Tough week so far but nothing that changes my longer-term views. I'll post an update later in the week if anything material changes.</p>
      `
    },
  ]
};
