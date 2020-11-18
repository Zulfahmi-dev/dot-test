const {WilayahRouter} =  require("@wilayah");

module.exports = (app) => {
    app.use('/', WilayahRouter)
}