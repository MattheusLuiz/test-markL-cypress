/// <reference types="cypress"/>

import {faker} from '@faker-js/faker'

describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type(faker.music.songName())
        cy.contains('button', 'Create').click()
    });
});