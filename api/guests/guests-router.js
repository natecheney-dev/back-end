const router = require('express').Router()
const Guests = require('./guests-model')
const { restricted } = require('../resticted-middleware')

router.get('/', restricted, async (req, res, next) => {
    Guests.get()
        .then(guests => {
            res.status(200).json(guests)
        })
        .catch(next)
})

router.get('/:id', restricted, (req, res, next) => {
    Guests.getById(req.params.id)
        .then(guest => {
            res.status(200).json(guest)
        })
        .catch(next)
})

module.exports = router