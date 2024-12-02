import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I'm on the login page", () => {
  cy.visit("https://e-hub-platform.flutterflow.app/", { timeout: 30000 });

  // Verificar se o elemento flt-semantics-placeholder está presente
  cy.get("flt-semantics-placeholder", { timeout: 30000 }).should("exist");
  cy.get("flt-semantics-placeholder").click({ force: true }); // Forçar o clique, se necessário
});

When("I set a registred my email and password", () => {
  const email = "vinicius.torales@zallpy.com";
  const senha = "Tijolo101729";

  // Preencher o campo de e-mail
  cy.get('[aria-label="Digite seu e-mail"]', { timeout: 10000 })
    .clear()
    .type(email);

  // Forçar a entrada da senha, caso o elemento esteja bloqueado
  cy.get('[aria-label="Digite sua senha"]', { timeout: 10000 }).type(senha, {
    force: true,
  });

  // Clicar no botão de "Entrar"
  cy.contains("Entrar").click();
});

Then("I have a sucessful login", () => {
  // Verificar se a URL atual é a esperada
  cy.url().should(
    "eq",
    "https://e-hub-platform.flutterflow.app/selectWorkspace"
  );
});
