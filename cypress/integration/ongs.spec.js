/// <reference types="cypress" />

describe('Ongs', () => {

    beforeEach(() => {
        cy.visit('https://pt-br.facebook.com/');
    })

    it('Teste valido com usuario e senha correta no Facebook', () => {
        cy.login(`testedelogin.qazps@gmail.com`,`Q@Zap$123`);
        cy.title().should('eq', 'Facebook')

    });

    it('Teste invalido com usuario incorreto e senha correta no Facebook', () => {
        cy.login(`123.qazps@gmail.com`,`Q@Zap$123`);
        cy.get('[data-testid=royal_login_button]').should('be.visible')
    });

    it('Teste invalido com usuario correto e senha incorreta no Facebook', () => {
        cy.login(`testedelogin.qazps@gmail.com`,`zzZap$123`);
        cy.get('[data-testid=royal_login_button]').should('be.visible')
    });

    it('Teste invalido sem usuário e senha incorreta no Facebook', () => {
        cy.login(` `,`zzZap$123`);
        cy.get('[data-testid=royal_login_button]').should('be.visible')
    });
    
    it('Teste invalido usuario correto sem senha no Facebook', () => {
        cy.login(`testedelogin.qazps@gmail.com `,` `);
        cy.get('[data-testid=royal_login_button]').should('be.visible')
    });
});
