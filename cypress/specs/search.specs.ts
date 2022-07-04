/// <reference path="../support/commands.ts" />

import homePage from "../pages/home/home.page";
import searchPage from "../pages/search/search.page";

beforeEach(() => {
    homePage.visitBlogAgi();
});

describe('Search', { tags: ['qa', 'search'] }, () => {
    it('Perform a search with the term investments', () => {
        homePage.clickIconSearch();
        homePage.fillSearch('investimentos')
        homePage.clickSearchButton();
        searchPage.validateURL('investimentos');
        searchPage.validateSearchResult('Resultados da busca por: investimentos');
    });

    it('Should not return search results when entering numbers', () => {
        homePage.clickIconSearch();
        homePage.fillSearch('1234')
        homePage.clickSearchButton();
        searchPage.validateURL('1234');
        searchPage.validateNotReturnSearch('Nenhum resultado');
    });
})