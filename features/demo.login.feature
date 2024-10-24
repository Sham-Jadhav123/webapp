@smoke
Feature: The demoblaze Website

  Scenario Outline: Open the website

    Given I am on the home page page
    #  Then click on contact
    Then enter emailid
    Then enter contact number
    Then enter msg
    Then clicks on send msg
    # Then I should see a flash message saying <message>

    #    | message                        |
    #   | Thanks for the message!         |
      