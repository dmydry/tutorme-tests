
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
    I.click('//div[@type="signin"]');
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click('//button[contains(., "Sign In")]');
  }

}
