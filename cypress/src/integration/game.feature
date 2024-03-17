Feature: Game

Background:
 Given I visit the choose category page
 When I choose the "Movies" category
 Then I should be redirected to the game page with the category "Movies" in the URL


Scenario: Scenario name
    Given I am on the game page