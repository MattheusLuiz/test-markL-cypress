/// <reference types="cypress"/>


describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3333/helper/tasks',
            body: { name: 'Ler um livro de Node.JS' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })


        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node.JS')
        cy.contains('button', 'Create').click()

    });
});