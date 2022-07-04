/// <reference path="../../support/index.d.ts" />

import homeElements from './home.elements';

class homePage {
    visitBlogAgi() {
        cy.visit('/');
    }

    clickIconSearch() {
        cy.get(homeElements.icon_search).eq(0).click({ force: true });
    }

    fillSearch(text) {
        cy.get(homeElements.txt_search_field).eq(0).type(text);
    }

    clickSearchButton() {
        cy.get(homeElements.btn_search_submit).eq(0).click({ force: true });
    }
}

export default new homePage();