/// <reference path="../../support/index.d.ts" />

import searchElements from './search.elements';

class peoplePage {
    validateURL(text) {
        cy.url().should('contains', '/?s='+text)
    }

    validateNotReturnSearch(text) {
        cy.get(searchElements.lbl_entry_title).should('have.text', text)
    }

    validateSearchResult(text) {
        cy.get(searchElements.lbl_archive_title).should('have.text', text);
        cy.get(searchElements.div_post).should('be.visible');
    }
}

export default new peoplePage();