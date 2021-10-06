import React from "react";
import { mount } from "@cypress/react";
import { BrowserRouter } from "react-router-dom";
import NewsLetter from "../../../src/NewsLetter";

describe("check input fields", () => {
  it("submit", () => {
    // cy.pause();
    cy.visit("http://localhost:3000/NewsLetter");
    
    cy.get("[data-cy=firstname]").type("test").should("have.value", "test");
    cy.get("[data-cy=lastname]").type("example").should("have.value", "example");
    cy.get("[data-cy=email").type("test@example.com").should("have.value", "test@example.com")
    cy.contains("submit").click()
  });
});
