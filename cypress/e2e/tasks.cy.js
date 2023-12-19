/// <reference types="cypress"/>


describe('Tarefas', () => {
    context('cadastro', () => {
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

    context('atualização', () => {
        it.only('Deve concluir uma tarefa', () => {
            const task = {
                name: 'Pagar conta de consumo',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('http://localhost:8080')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemToggle]')
            .click()


            cy.contains('p', task.name)
            .should('have.css', 'text-decoration-line', 'line-through')
        });
    });
});