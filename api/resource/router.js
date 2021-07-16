const router = require('express').Router()
// const { validateResource } = require('./middleware')
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.find()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newResource = await Resource.addResource(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router;