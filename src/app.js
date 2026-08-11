import { loadArticles } from "./data.js";
import{
    searchArticles,
    filterArticles,
    sortArticles,
    getSummaryCounts
} from './toolkit.js';

let baseArticles = [];

const articlesContainer = document.getElementById('articlesContainer');
const summaryDashboard = document.getElementById('summaryDashboard');
const searchInput = document.getElementById("searchInput");
const sectionFilter = document.getElementById("sectionFilter");
const statusFilter = document.getElementById("statusFilter");
const sortSelect = document.getElementById("sortSelect");

const updateUI = () => {
    const query = searchInput.value;
    const section = sectionFilter.value;
    const status = statusFilter.value;
    const sortBy = sortSelect.value;

    let processedData = searchArticles(baseArticles, query);
    processedData = filterArticles(processedData, section, status);
    processedData = sortArticles(processedData, sortBy);

    renderArticles(processedData);
    renderSummary(processedData);
}

const renderArticles = (articles) => {
    if(articles.length === 0){
        articlesContainer.innerHTML = '<div class="no-results">No articles found matching your criteria. </div>';
        return;
    }

    articlesContainer.innerHTML = articles.map(article => `
        <div class="article-card">
            <div class="article-header">
                <span class="badge section">${article.section}</span>
                <span class="badge status-${article.status}">${article.status}</span>
            </div>
            <h2 class="article-title">${article.title}</h2>
            <div class="article-meta">
                by ${article.author} | ${article.publishedAt ? article.publishedAt : 'Not published'}
            </div>
            <p class="article-summary">${article.summary}</p>
        </div>
    `).join('');
};

const renderSummary = (articles) => {
    const counts = getSummaryCounts(articles);
    const statusHtml = Object.entries(counts.status)
    .map(([key, value]) => `<li><span>${key}</span><strong>${value}</strong></li>`).join('');
    const sectionHtml = Object.entries(counts.section)
    .map(([key, value]) => `<li><span>${key}</span><strong>${value}</strong></li>`).join('');

    summaryDashboard.innerHTML =`
        <h3>Status Breakdown</h3>
        <ul>${statusHtml || '<li>No Data</li>'}</ul>
        <h3>Section Breakdown</h3>
        <ul>${sectionHtml || '<li>No data</li>'}</ul>
    `;
};

const init = () => {
    baseArticles = loadArticles();
    searchInput.addEventListener('input', updateUI);
    sectionFilter.addEventListener('change', updateUI);
    statusFilter.addEventListener('change', updateUI);
    sortSelect.addEventListener('change', updateUI);

    updateUI();
};

document.addEventListener('DOMContentLoaded', init);