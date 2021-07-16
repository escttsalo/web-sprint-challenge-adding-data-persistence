exports.validateResource = (req, res, next) => {
    const { res_name } = req.body
    if (res_name === undefined || typeof res_name != 'string' || !res_name.trim()){
        next({
            status: 400,
            message: 'invalid resource name'
        })
    }
    next()
}