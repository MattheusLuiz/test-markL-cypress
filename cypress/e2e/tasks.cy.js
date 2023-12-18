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

        cy.contains('main div p', 'Ler um livro de Node.JS')
    })


    it('Não deve permitir tarefa duplicada', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3333/helper/tasks',
            body: { name: 'Estudar JavaScript' }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.request({
            method: 'POST',
            url: 'http://localhost:3333/tasks',
            body: { name: 'Estudar JavaScript', is_done: false }
        }).then(response => {
            expect(response.status).to.eq(201)
        })


        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Estudar JavaScript')
        cy.contains('button', 'Create').click()

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    });
});