const assert = require("assert");
const {Given, When, Then} = require('cucumber');

      When('Enter data for profile creator, DOB, mother tongue and community', function () {

  	const createProfileFor = $('android=new UiSelector().className("android.widget.Spinner").index(1)');
		createProfileFor.click();
		const self = $('android=new UiSelector().text("Self")');
		self.click();
    const male = $('android=new UiSelector().text("Male")');
    male.click();
    const dob = $('android=new UiSelector().resourceId("dob-input")');
    dob.setValue('22011992');
    const motherTongue = $('android=new UiSelector().textContains("Mother Tongue")');
    motherTongue.click();
    const typeLanguage = $('android=new UiSelector().className("android.widget.EditText")');
    typeLanguage.clearValue();
    typeLanguage.setValue('Hindi');
    const hindi = $('android=new UiSelector().text("Hindi").className("android.widget.Button")');
    hindi.click();
    const community = $('android= new UiSelector().textContains("Community Eg. Brahmin")');
    community.click();
    const $communitySelect = $('android=new UiSelector().textContains("Hindu - Agri")');
    expect($communitySelect).toBeDisplayed();
    typeLanguage.clearValue();
    typeLanguage.setValue('Hindu - CKP');
    const hinduCKP = $('android=new UiSelector().text("Hindu - CKP").className("android.widget.Button")');
    hinduCKP.click();

    })

      Then('Verify on next page an Email view is present', function () {

      const $email = $('android=new UiSelector().resourceId("email")');
      expect($email).toBeDisplayed();
    
    })