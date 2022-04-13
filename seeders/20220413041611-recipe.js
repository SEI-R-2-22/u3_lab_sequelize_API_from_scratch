'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('recipes', [{
      name: 'Dave Fernie\'s Old-Fashioned',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Evan Williams "Black Label" bourbon, 1 teaspoon Demerara Gum Syrup, 2 dashes Angostura Bitters, Garnish: lemon and orange twists'
    }, {
      name: 'Champagne Cocktail',
      category_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 sugar cube, Angostura bitters, Dry Champagne, Garnish: lemon twist'
    }, {
      name: 'Ideal Gin Martini',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Plymouth gin, 1 ounce Dolin dry vermouth, 1 dash House Orange Bitters, Garnish: lemon twist'
    }, {
      name: 'Negroni',
      category_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 ounce Tanqueray gin, 1 ounce Carpano Antica Formula sweet vermouth, 1 ounce Campari, Garnish: 1 orange half wheel'
    }, {
      name: 'Hemingway Daiquiri',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 1/2 ounces Flor de Cana 4-year white rum, 1/2 ounce Luxardo maraschino liqueur, 1 ounce fresh grapefruit juice, 1/2 fresh lime juice, 1 teaspoon simple syrup, Garnish: lime wedge'
    }, {
      name: 'Pisco Sour',
      category_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Campo de Encanto Grand and Noble pisco, 1/2 ounce fresh lemon juice, 1/2 ounce fresh lime juice, 1/4 ounce simple syrup, 1 egg white, Garnish: 3 drops Angostura bitters'
    }, {
      name: 'Ideal Sidecar',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 1/2 ounces Pierre Ferrand Ambre Cognac, 1 ounce Pierre Ferrand dry curacao, 1/4 ounce fresh lemon juice, 1 teaspoon simple syrup, Garnish: orange twist'
    }, {
      name: 'Classic Margarita',
      category_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Siembra Azul blanco tequila, 3/4 ounce Cointreua, 3/4 ounce fresh lime juice, 1/4 ounce simple syrup, Garnish: lime wedge and salted rim'
    }, {
      name: 'Ideal Whisky Highball',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Hakushu 12-year Japanese whisky, 4 ounces cold seltzer'
    }, {
      name: 'Paloma',
      category_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 3/4 ounces blanco tequila, 1/4 ounce Giffard Creme de Pamplemousse, 1/4 ounce fresh lime juice, 4 ounces cold Homemade Grapefruit Soda, Garnish: grapefruit wedge'
    }, {
      name: 'Ideal Flip',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '2 ounces Gonzalez Byass Matusalem oloroso sherry, 1/2 ounce Demerara Gum Syrup, 1 whole egg, Garnish: nutmeg'
    }, {
      name: 'Barnaby Jones',
      category_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredient: '1 1/2 ounces Famous Grouse scotch, 1/2 ounce Cynar, 1/2 ounce dark robust maple syrup, 1/2 ounce heavy cream, 1 whole egg, 12 coffee beans, Garnish: cinnamon'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
