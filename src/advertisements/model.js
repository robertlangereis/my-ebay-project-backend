const Sequelize = require('sequelize')
const sequelize = require('../db')

const Advertisements = sequelize.define('advertisements', {
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: 'description',
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    field: 'address',
    allowNull: false
  },
  pickup_possible: {
    type: Sequelize.STRING,
    field: 'pickup_possible',
    allowNull: false
  },
  phone_nr: {
    type: Sequelize.STRING,
    field: 'phone_nr',
    allowNull: true
  },
  picture_url: {
    type: Sequelize.STRING,
    field: 'picture_url',
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    field: 'price',
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'advertisements'
})

module.exports = Advertisements