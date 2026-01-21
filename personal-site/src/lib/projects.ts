export type Project = {
    slug: string;
    title: string;
    date: string; // "2026-01" or "2025-12-15"
    tags: string[];
    short?: string;      // short description for project page
    overview?: string;   // longer description for project page
    highlights: string[]; // bullet points for project page
    repoUrl?: string;     // optional external link (demo/live)
    liveUrl?: string;     // optional github link

  };
  
  export const PROJECTS: Project[] = [
    {
      slug: "hm-shop",
      title: "HM-Shop: E-commerce Simulation + AI Shopping Assistant",
      date: "Jan 2026",
      tags: ["LLM", "AI", "Next.js", "TypeScript", "UI/UX", "FastAPI", "SQLite3"],
      short:
        "Built a modern Next.js storefront over an H&M dataset with search/filtering, product pages, cart, and a chatbot grounded in catalog context.",
      overview: `This project simulates a full, end-to-end e-commerce experience using real product metadata from an H&M dataset. I built the frontend as a responsive storefront with Next.js App Router and TypeScript, focusing on clean UX patterns you’d expect in production: browsing by category, fast search, filters, product detail pages, and a cart experience that feels smooth and modern.
  
  On the backend, I used FastAPI with SQLite to serve product data through a set of REST endpoints. This keeps the system realistic: the frontend isn’t mock data—it fetches products, details, and similar items dynamically, like a real commerce stack.
  
  The standout feature is an AI shopping assistant embedded in the site. Instead of being a generic chatbot, it’s grounded in the actual catalog: the assistant receives relevant product context from the backend (based on the user’s query or browsing state) and uses that context to answer questions and recommend items without inventing products. If something isn’t present in the dataset (like sizing/fit), the assistant explicitly says it’s unavailable.`,
      highlights: [
        "Search + filtering UX (category browsing, fast search, filters)",
        "Product detail pages + similar items (catalog-based recommendations)",
        "Cart + checkout flow (add/remove/update quantities, responsive UI states)",
        "AI shopping assistant grounded in catalog context (no hallucinated products)",
      ],
      repoUrl: "https://github.com/Zachaditya/eshop-hm_dataset",
      liveUrl: "https://eshop-hm-dataset.vercel.app", // optional
    },
  
    {
      slug: "internal-dacs-tool",
      title: "Internal DACS Risk Managment Tool",
      date: "August 2025",
      tags: ["Quant", "Risk Analysis", "Financial Modelling", "Python", "Flask","Data Science/Visualization"],
      short:
        "Interactive risk questionnaire that outputs a tailored portfolio mix with clean visualizations and constraints.",
      overview:
        "Longer paragraph…",
      highlights: ["…"],
      repoUrl: "https://github.com/Zachaditya/DACS_internal",
      liveUrl: "https://…", // optional
    },
  
    {
      slug: "dacs",
      title: "Digital Asset Credit Score: Wallet-Level Risk Modeling",
      date: "June 2025",
      tags: ["Python", "Risk Analysis", "Financial Modelling", "Data Science", "Statistics"],
      short:
        "Interactive risk questionnaire that outputs a tailored portfolio mix with clean visualizations and constraints.",
      overview:
        "Longer paragraph…",
      highlights: ["…"],
      repoUrl: "https://github.com/Zachaditya/Digital-Asset-Credit-Score-Wallet-Level-Risk-Modeling",
    },
    {
      slug: "spotify",
      title: "Spotify Playlist Generator",
      date: "March 2025",
      tags: ["UI/UX", "Machine Learning", "Search Engine", "Recommendation System", "Data Science"],
      short:
        "Interactive risk questionnaire that outputs a tailored portfolio mix with clean visualizations and constraints.",
      overview:
        "Longer paragraph…",
      highlights: ["…"],
      repoUrl: "https://github.com/Zachaditya/playlist_recommender",
      liveUrl: "https://playlistrecommender-production.up.railway.app", // optional

    },
    {
        slug: "tableau",
        title: "Tableau Dashboard for Sales Analysis",
        date: "January 2025",
        tags: ["Tableau", "Data Science/Visualization", "SQL", "Interactive Dashboards"],
        short:
          "Interactive risk questionnaire that outputs a tailored portfolio mix with clean visualizations and constraints.",
        overview:
          "Longer paragraph…",
        highlights: ["…"],
        repoUrl: "https://github.com/Zachaditya/Tableau_salesDashboard",
        liveUrl: "https://…", // optional

      },
      {
        slug: "sp500",
        title: "S&P500 Predictor using Machine Learning",
        date: "December 2024",
        tags: ["Machine Learning", "Jupyter Notebeook", "Statistics", "Financial Modelling", "Risk Analysis"],
        short:
        "Interactive risk questionnaire that outputs a tailored portfolio mix with clean visualizations and constraints.",
        overview:
          "Longer paragraph…",
        highlights: ["…"],
        repoUrl: "https://github.com/Zachaditya/SP500-Predictor",

      },
  ];
  