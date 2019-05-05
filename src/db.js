const Sequelize = require('sequelize')

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
// create a variable that allows you to pull the database URL from the environment variables (headers), like you would pull the JWT token from the environment variable for authentication

const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})
// you create a new Sequelize connection, using the connection string variable defined above. The defined timestamp: false is (...)


sequelize.sync()
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)
// this creates the tables in your database when your app starts
module.exports = sequelize