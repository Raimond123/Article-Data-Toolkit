export const searchArticles = (articles, query) => {
    if(!query)
        return articles;

    const lowerQuery = query.toLowerCase();
    return articles.filter(article =>
        article.title.toLowerCase().includes(lowerQuery) || article.summary.toLowerCase().includes(lowerQuery)
    );
};

export const filterArticles = (articles, section, status) => {
    return articles.filter(article => {
        const matchSection = section ? article.section === section : true;
        const matchStatus = status ? article.status === status : true;
        return matchSection && matchStatus;
    });
};


export const sortArticles = (articles, sortBy) => {
    const articlesCopy = [...articles];

    return articlesCopy.sort((a, b) => {
        if(sortBy === 'title'){
            return a.title.localeCompare(b.title);
        }
        if(sortBy === 'date'){
            const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
            const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
            return dateB - dateA;
        }
        return 0;
    });
};

export const groupArticlesBySection = (articles) => {
    return articles.reduce((acc, article) => {
        if(!acc[article.section]){
            acc[article.section] = [];
        }
        acc[article.section].push(article);
        return acc;
    }, {});
};

export const getSummaryCounts = (articles) => {
    return articles.reduce((acc, article) => {
        acc.status[article.status] = (acc.status[article.status] || 0) + 1;
        acc.section[article.section] = (acc.section[article.section] || 0) + 1;

        return acc;
    }, {status: {}, section: {} });
};