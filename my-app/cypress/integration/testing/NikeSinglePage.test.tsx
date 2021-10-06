import React from "react";
import { mount } from "@cypress/react";
import { BrowserRouter } from "react-router-dom";
import NikeSinglePage from "../../../src/NikeSinglePage";

describe("check search bar", () => {
  it("shows result", () => {
    // cy.pause();
    cy.visit("http://localhost:3000/");
    cy.contains("Nike").click();
    
    cy.get(".form-control").type("90").should("have.value", "90");
 
    cy.contains("Jordan").click();
    cy.get(".form-control").type("11").should("have.value", "11");
  
  });
});
