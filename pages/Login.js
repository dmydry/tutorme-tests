
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
    email: '//input[@name="email"]',
    password: '//input[@name="passwd"]'
  },

  loginToTutorme(email, password) {
    I.amOnPage('https://staging.tutorme.com/');
    I.clearCookie('sessionid');
    I.amOnPage('https://staging.tutorme.com/');
    I.waitForElement('//div[@type="signin"]', 5);
    I.click('//div[@type="signin"]');
    I.waitForElement(this.fields.email, 5);
    I.waitForElement(this.fields.password, 5);
    I.waitForElement('//button[contains(., "Sign In")]', 5);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click('//button[contains(., "Sign In")]');
  }

}
