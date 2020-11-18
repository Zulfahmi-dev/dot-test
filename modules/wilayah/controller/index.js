const { urls, api } = require('@config');

class WilayahController{
    constructor(){
        this.token_api;
        this.getProvinsi = this.getProvinsi.bind(this);
        this.getKota = this.getKota.bind(this);
    }


    async getProvinsi(req, res){
        try {
            let url = `${urls.api}/province`;
            
            if(req.query.searchKey){
                url += `?id=${req.query.searchKey}`;
            }

            const { rajaongkir } = await api.GET(url);

            if (rajaongkir.results.length === 0) {
                res.status(404).send({
                    code: 404,
                    status: 'failed',
                    msg: 'Data tidak ditemukan'
                })
                return null;
            }
            
            res.status(200).send({
                code: 200,
                status: 'success',
                data: rajaongkir.results
            })
            
        } catch (error) {
            console.log(error)
        }

    }

    async getKota(req, res){
        try {
            let url = `${urls.api}/city`;
            
            if(req.query.searchKey){
                url += `?id=${req.query.searchKey}`;
            }

            const { rajaongkir } = await api.GET(url);

            if (rajaongkir.results.length === 0) {
                res.status(404).send({
                    code: 404,
                    status: 'failed',
                    msg: 'Data tidak ditemukan'
                })
                return null;
            }
            
            res.status(200).send({
                code: 200,
                status: 'success',
                data: rajaongkir.results
            })
            
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = WilayahController;