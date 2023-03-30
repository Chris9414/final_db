'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        { "username": "Chris123", "email": "chris@gmail.com", "password": 1234, "avatar": "img1", "createdAt": new Date(), "updatedAt": new Date() },
        { "username": "Dani123", "email": "dani@gmail.com", "password": 1234, "avatar": "img1", "createdAt": new Date(), "updatedAt": new Date() },
        { "username": "Ali123", "email": "ali@gmail.com", "password": 1234, "avatar": "img1", "createdAt": new Date(), "updatedAt": new Date() },
        { "username": "Santi123", "email": "santi@gmail.com", "password": 1234, "avatar": "img1", "createdAt": new Date(), "updatedAt": new Date() },
      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
