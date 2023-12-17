/// <reference types="cypress"/>


describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de node.js')
    });
});