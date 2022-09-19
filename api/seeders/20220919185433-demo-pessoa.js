'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Pessoas', [{
       nome: 'John Doe',
       ativo: false
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
 