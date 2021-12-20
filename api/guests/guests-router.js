const router = require('express').Router()

router.get('/', (req,res,next) => {
    console.log('test')
})

module.exports = router