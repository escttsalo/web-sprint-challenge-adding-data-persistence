const router = require('express').Router()

const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.addProject(req.body)
        newProject.project_completed = !!+newProject.project_completed
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router;