const axios = require('axios');

const TOKEN_API = process.env.TOKEN_API;

const GET = async (url) => {
    try {
        const options = {
            method: 'get', 
            url: url,
            headers: {
                key: TOKEN_API
            }
          };


        const req = await axios(options);
        
        return req.data;
    } catch (error) {
        throw error;
    }
}

const POST = async (url, data={}) => {
    try {
        const options = {
            method: 'post', 
            url: url,
            data: data,
            headers: {
                key: TOKEN_API
            }
          };


        const req = await axios(options);
        
        return req.data;
    } catch (error) {
        throw error;
    }
}

const PUT = async (url, data={}) => {
    try {
        const options = {
            method: 'put', 
            url: url,
            data: data,
            headers: {
                key: TOKEN_API
            }
          };


        const req = await axios(options);
        
        return req.data;
    } catch (error) {
        throw error;
    }
}

const DELETE = async (url, data={}) => {
    try {
        const options = {
            method: 'delete', 
            url: url,
            data: data,
            headers: {
                key: TOKEN_API
            }
          };


        const req = await axios(options);
        
        return req.data;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    GET,
    POST,
    PUT,
    DELETE
};