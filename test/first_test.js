
Feature('Tests for tutorme.com');

Scenario('Should test for error message if user tries to log in with wrong password', (I) => {
    I.amOnPage('https://staging.tutorme.com/');
    I.click('//div[@type="signin"]');
    I.fillField('//input[@name="email"]', 'dmitriy.gurinenko@gmail.com');
    I.fillField('//input[@name="passwd"]', 'Komarik');
    I.click('//button[contains(., "Sign In")]');
    I.see('Email and/or password not recognized');
});

Scenario('Should log in, then change user First Name and check it', (I, loginPage) => {
    loginPage.loginToTutorme('dmitriy.gurinenko@gmail.com', 'Komarik1');
    I.see('Dmitriy G.');
    I.amOnPage('https://staging.tutorme.com/account/');
    I.fillField('//input[@name="firstName"]', 'Dima');
    I.click('//button[contains(., "Save Changes")]');
    I.see('Dima G.');
    //return an original name for re-testing // TODO before/after in future
    I.fillField('//input[@name="firstName"]', 'Dmitriy');
    I.click('//button[contains(., "Save Changes")]');
});
