const router = require('express').Router()

const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.addTask(req.body)
        newTask.task_completed = !!+newTask.task_completed
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router;