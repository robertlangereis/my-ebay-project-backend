const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const advertisementsRouter = require('./advertisements/routes')
const port = process.env.PORT || 4000
// const authenticationRouter = require('./auth/routes')
// const usersRouter = require('./users/routes')
// const productTransferRouter = require('./users/routes')

const app = express();

app
  .use(cors())  
  .use(bodyParser.json())
  .use(advertisementsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))
  