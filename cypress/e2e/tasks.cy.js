/// <reference types="cypress"/>


describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        const taskName = 'Ler um livro de Node.JS'


        cy.removeTaskByName(taskName)
        cy.createTask(taskName)

        cy.contains('main div p', 'Ler um livro de Node.JS')
    })


    it('Não deve permitir tarefa duplicada', () => {
        const task = {
            name: 'Estudar JavaScript',
            is_done: false
        }

        cy.removeTaskByName(task.name)
        cy.postTask(task)
        cy.createTask(task.name)

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    });


    it('Campo obrigatorio', () => {
        cy.createTask()
        cy.isRequired('This is a required field')
    })

});