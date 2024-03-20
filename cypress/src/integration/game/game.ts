import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the choose category page", () => {
  cy.visit("/game/choose-category");
});

When("I choose the {string} category", (category: string) => {
  cy.contains(category).click();
});

Then(
  "I should be redirected to the game page with the category {string} in the URL",
  (category) => {
    cy.url().should("include", `/game?category=${category}`);
  },
);

Given("I am on the game page", () => {
  cy.url().should("include", "/game?category=Movies");
});
