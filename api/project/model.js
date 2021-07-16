const db = require('../../data/dbConfig')

const find = async () => {
    const projects = await db('projects')
    projects.forEach( row => {
        row.project_completed = !!+row.project_completed //converts 0&1 to bool
    })
    return projects
}

const addProject = async project => {
    return db('projects').insert(project)
    .then( ([project_id]) => {
        return db('projects')
            .where('project_id', project_id)
            .first()
    })
}

module.exports = {
    find,
    addProject
}