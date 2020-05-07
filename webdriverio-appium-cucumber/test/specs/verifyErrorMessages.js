const assert = require("assert");
const {Given, When, Then} = require('cucumber');

      Given('Visit Sangam Android App home page', function () {

      const field = $('android=new UiSelector().resourceId("homeButton")');
  		const value = field.getText();
  		assert.equal(value,"Lets Begin");

    })

      When('Touch Lets Begin', function () {

  		const field = $('android=new UiSelector().resourceId("homeButton")');
  		field.click();

    })

      Then('Verify error messages for DOB and community', function () {

      const $errormessage = $('android=new UiSelector().text("Please specify Date of Birth")');
		  expect($errormessage).toBeDisplayed();
		  const $errormessage1 = $('android=new UiSelector().textContains("Please specify Caste / Community")');
		  expect($errormessage1).toBeDisplayed();

    })