import{
    searchArticles,
    filterArticles,
    sortArticles,
    groupArticlesBySection,
    getSummaryCounts
} from '../src/toolkit';

const mockArticles = [
    {id: "1", title: "Apple", section: "Tech", status: "published", publishedAt: "2026-01-1", summary: "MacBook pro"},
    {id: "2", title: "Banana", section: "Food", status: "draft", publishedAt: null, summary: "Yellow fruit"},
    {id: "3", title: "Cherry", section: "Tech", status: "published", publishedAt: "2026-12-31", summary: "Red fruit"}
];

describe('Article Data Toolkit Pure Functions', () => {
    // testing search
    test('Searches articles by title or summary case-insensitive', () => {
        const result = searchArticles(mockArticles, 'macbook');
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('Apple');
    })

    test('returns all articles if query is empty', () => {
        const result = searchArticles(mockArticles, '');
        expect(result.length).toBe(3);
    });

    // Testing Filters
    test('filters articles strictly by section and status', () => {
        const result = filterArticles(mockArticles, 'Tech', 'published');
        expect(result.length).toBe(2);
    })

    // Testing sorting
    test('sorts articles by date (newest first) and puts drafts at the bottom', () => {
        const result = sortArticles(mockArticles, 'date');
        expect(result[0].title).toBe('Cherry');
        expect(result[1].title).toBe('Apple');
        expect(result[2].title).toBe('Banana');
    });

    // Testing grouping
    test('groups articles by their section dinamically', () => {
        const result = groupArticlesBySection(mockArticles);
        expect(result['Tech'].length).toBe(2);
        expect(result['Food'].length).toBe(1);
    });

    // Testing summary counts
    test('generates correct summary counts for status and section', () => {
        const result = getSummaryCounts(mockArticles);
        expect(result.status.published).toBe(2);
        expect(result.status.draft).toBe(1);
        expect(result.section.Tech).toBe(2);
        expect(result.section.Food).toBe(1);
    });
});

