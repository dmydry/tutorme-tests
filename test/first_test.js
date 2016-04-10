
Feature('Tests for tutorme.com');

Scenario('Should test for error message if user tries to log in with wrong password', (I) => {
    I.amOnPage('https://staging.tutorme.com/');
    I.clearCookie('sessionid');
    I.amOnPage('https://staging.tutorme.com/');
    I.waitForElement('//div[@type="signin"]', 5);
    I.click('//div[@type="signin"]');
    I.waitForElement('//input[@name="email"]', 5);
    I.waitForElement('//input[@name="passwd"]', 5);
    I.waitForElement('//button[contains(., "Sign In")]', 5);
    I.fillField('//input[@name="email"]', 'dmitriy.gurinenko@gmail.com');
    I.fillField('//input[@name="passwd"]', 'Komarik');
    I.click('//button[contains(., "Sign In")]');
    I.waitForText('Email and/or password not recognized', 5);
});

Scenario('Should log in, then change user First Name and check it', (I, loginPage) => {
    //pause();
    loginPage.loginToTutorme('dmitriy.gurinenko@gmail.com', 'Komarik1');
    I.waitForText('Dmitriy G.', 5);
    I.amOnPage('https://staging.tutorme.com/account/');
    I.wait(3);
    I.waitForElement('//input[@name="firstName"]', 5);
    I.waitForElement('//button[contains(., "Save Changes")]', 5);
    I.fillField('//input[@name="firstName"]', 'Dima');
    I.click('//button[contains(., "Save Changes")]');
    I.waitForText('Dima G.', 5);
    //return an original name for re-testing // TODO before/after in future
    I.fillField('//input[@name="firstName"]', 'Dmitriy');
    I.click('//button[contains(., "Save Changes")]');
    I.waitForText('Dmitriy G.', 5);
});
