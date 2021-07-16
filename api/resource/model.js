const db = require('../../data/dbConfig')

const find = async () => {
    return await db('resources')
}

const addResource = resource => {
    return db('resources').insert(resource)
        .then( ([resource_id]) => {
            return db('resources')
                .where('resource_id', resource_id)
                .first()
        })
}

module.exports = {
    find,
    addResource
}