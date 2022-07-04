import './commands'

require('cypress-grep')();
// ***********************************************************
import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFailed = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshotFailed);
    }
});