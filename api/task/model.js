const db = require('../../data/dbConfig')

const find = async () => {
    const rows = await db('tasks as t')
        .select('t.*', 'p.*')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
    rows.forEach( row => {
        row.task_completed = !!+row.task_completed
        row.project_completed = !!+row.project_completed
    })
    return rows
}

const addTask = async task => {
    return db('tasks').insert(task)
    .then( ([task_id]) => {
        return db('tasks')
            .where('task_id', task_id)
            .first()
    })
}

module.exports = {
    find,
    addTask
}