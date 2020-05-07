Feature: Test Sangam App

  # Scenario 1
  Scenario: Verify error messages
    Given Visit Sangam Android App home page
    When Touch Lets Begin
    Then Verify error messages for DOB and community

  # Scenario 2
  Scenario: Submit information for registration and verify email view
    Given Visit Sangam Android App home page
    When Enter data for profile creator, DOB, mother tongue and community
    And Touch Lets Begin
    Then Verify on next page an Email view is present