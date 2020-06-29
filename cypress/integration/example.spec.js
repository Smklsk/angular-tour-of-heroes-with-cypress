describe('My First Test', () => {
  it('Visits tour of heroes', () => {
    cy.visit('/')
      .contains('Tour of Heroes');
  })
})
