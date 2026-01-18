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
      overview:
        "I built this project to simulate a modern e-commerce experience using a dataset of H&M products. "+
        "The frontend is built with Next.js and TypeScript, featuring search and filtering capabilities, detailed product pages, and a shopping cart. The backend is powered by FastAPI and SQLite3 to manage product data and user interactions. A key feature is the AI shopping assistant"+
        "which leverages a large language model to provide personalized recommendations and answer user queries based on the product catalog.",
      highlights: [
        "Search + filtering UX",
        "Product detail pages + similar items",
        "Chat assistant grounded to catalog context",
      ],
      repoUrl: "https://github.com/Zachaditya/eshop-hm_dataset",
      liveUrl: "https://…", // optional
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
  