export const defaultArticles = [
    {
        id: "001",
        title: "Creating a JavaScript book",
        author: "Raimond Vargas",
        section: "Professional",
        status: "published",
        publishedAt: "2026-07-10",
        summary: "Insights from JavaScript."
    },
    {
        id: "002",
        title: "How to create a NodeJS function",
        author: "Raimond Vargas",
        section: "Educational",
        status: "published",
        publishedAt: "2024-12-25",
        summary: "Creating a Professional NodeJS environment."
    },
    {
        id: "003",
        title: "How to travel around the world",
        author: "Raimond Vargas",
        section: "Turism",
        status: "published",
        publishedAt: "2025-07-10",
        summary: "A complete guide to explore new places."
    },
    {
        id: "004",
        title: "Modern art in the new centry",
        author: "Manuel Polo",
        section: "Art",
        status: "published",
        publishedAt: "2026-07-09",
        summary: "Knowing the art affects our day to day life."
    },
    {
        id: "005",
        title: "A hundred and one year of loneliness",
        author: "Engels Vicioso",
        section: "Literature",
        status: "published",
        publishedAt: "1976-08-02",
        summary: "What happen if you get trapped alone by a hundred and one year."
    },
    {
        id: "006",
        title: "I don't know",
        author: "Irving Penalo",
        section: "Self-Improvement",
        status: "published",
        publishedAt: "2026-07-08",
        summary: "What to do when you don't know what to do."
    },
    {
        id: "007",
        title: "Testing",
        author: "Joshua Unk",
        section: "Professional",
        status: "published",
        publishedAt: "2026-07-10",
        summary: "How to test as a professional engenieer."
    },
    {
        id: "008",
        title: "Interaction",
        author: "Raimond Vargas",
        section: "Educational",
        status: "published",
        publishedAt: "2012-12-25",
        summary: "How to interact in an educational environment."
    },
    {
        id: "009",
        title: "Tree Path in c++: Structural Claims",
        author: "Raimond Vargas",
        section: "Competitive Programming",
        status: "published",
        publishedAt: "2026-01-20",
        summary: "Analazying why a node won't be in C-D or A-B if it is inherently a tree structure."
    },
    {
        id: "010",
        title: "The ultimate 3 day gym split",
        author: "Joshua Unk",
        section: "Lifestyle",
        status: "draft",
        publishedAt: null,
        summary: "Maximizing strength gains with a dedicated plan."
    },
    {
        id: "011",
        title: "Strategic UNO session",
        author: "Perla Serafini",
        section: "Gaming",
        status: "draft",
        publishedAt: null,
        summary: "Psychological tactics and how to handle +4 cards."
    },
    {
        id: "012",
        title: "The art of talking way too much",
        author: "Isaac Mercado",
        section: "Educational",
        status: "published",
        publishedAt: "2023-12-25",
        summary: "How to talk and communicate as a real influencer."
    },
    {
        id: "013",
        title: "Choosing a 2-Fan a GPU",
        author: "Irving Penalo",
        section: "Hardware",
        status: "published",
        publishedAt: "2025-12-05",
        summary: "Why a 2-fan graphics card is the absolute perfect fit for compact PC cases."
    },
    {
        id: "014",
        title: "Navegating Santo Domingo",
        author: "Valerie Mesa",
        section: "lifestyle",
        status: "draft",
        publishedAt: null,
        summary: "Commuting efficiently via the Dominican Streets."
    },
    {
        id: "015",
        title: "Managing Gemini API Spend",
        author: "Danae Ozuna",
        section: "Technology",
        status: "published",
        publishedAt: "2026-05-01",
        summary: "Setting up automated limits within Google AI Studio."
    },
];

export const loadArticles = () => {
    try{
        const rawData = localStorage.getItem("toolkit_articles");
        if(!rawData){
            return defaultArticles;
        }
        return JSON.parse(rawData);
    } catch(error){
        console.error("Critical error reading from localStorage, falling back to default data:", error);
        return defaultArticles;
    }
};

export const saveArticles = (articlesArray) => {
    try{
        localStorage.setItem("toolkit_articles", JSON.stringify(articlesArray));
    } catch(error){
        console.error("Failed to save articles to memory",  error);
    }
}