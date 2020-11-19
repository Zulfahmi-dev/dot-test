const {WilayahRouter} =  require("@wilayah");

module.exports = (app) => {
    app.use('/', WilayahRouter)
    app.get('*', (req, res) => {
        res.status(404).send({
            code:404,
            msg: 'Endpoint not found'
        })
    })
}