const Advertisements = require('./model')
const { Router } = require('express')
const router = new Router()

//GET ALL ADVERTISEMENT 
router.get('/advertisements', function (req, res) {
  Advertisements.findAll().then(advertisement => {
    res.json({ advertisement: advertisement })
  })
})

//GET ADVERTISEMENT BY ID
router.get('/advertisements/:id', function (req, res) {
  const id = req.params.id
  Advertisements.findByPk(id)
  .then(advertisement => {
      res.json({ advertisement: advertisement })
  })
  .catch(err => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err
      })
    })
  })
  
  //DELETE ADVERTISEMENT
  router.delete('/advertisements/:id', (req, res, next) => {
    var send_id = req.params.id;
    Advertisements
      .findByPk(send_id)
      .then(ad => {
        if (!ad) {
          return res.status(404).send({
            message: `Advertisement does not exist`
          })
        }
        return ad.destroy()
          .then(() => res.send(send_id))
      })
      .catch(error => next(error))
  })

  //CREATE ADVERTISEMENT
router.post('/advertisements', function (req, res) {
  // console.log('Incoming data: ', req.body.formvalues.formvalues)
  res.json({ message: 'Create a new advertisement' })
})

//UPDATE ADVERTISEMENT    
router.put('/advertisements/:id', function (req, res) {
  const id = req.params.id
  Advertisements.findByPk(id)
  .then(advertisement => {
    advertisement
    .update(res.body).then(advertisement => console.log(`The advertisement is now created. The ID = ${advertisement.id}`))
  })
})
module.exports = router