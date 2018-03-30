// Import models and mongoose
require('dotenv').config();
const axios = require('axios');
const https = require('https');

module.exports.details = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'get',
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}/power`,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
    .then( response => {
        res.status(200).json(response.data);
    })
    .catch( error => {
        res.status(500).json(error);
    });
}

module.exports.reset = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'get',
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}/power/reset`,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
    .then( response => {
        res.status(200).json(response.data);
    })
    .catch( error => {
        res.status(500).json(error);
    });
}

module.exports.start = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'get',
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}/power/start`,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
    .then( response => {
        res.status(200).json(response.data);
    })
    .catch( error => {
        res.status(500).json(error);
    });
}

module.exports.stop = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'get',
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}/power/stop`,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
    .then( response => {
        res.status(200).json(response.data);
    })
    .catch( error => {
        res.status(500).json(error);
    });
}