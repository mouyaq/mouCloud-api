// Import models and mongoose
require('dotenv').config();
const axios = require('axios');
const https = require('https');

module.exports.list = (req, res, next) => {
    let url;
    const filters = req._parsedUrl.search;
    if(filters != null) {
        url = `https://${process.env.VC}/rest/vcenter/resource-pool${filters}`;
    }
    else {
        url = `https://${process.env.VC}/rest/vcenter/resource-pool`;
    }
    my_http_options = {
        method: 'get',
        url: url,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
    .then( response => {
        res.status(200).json(response.data.value);
    })
    .catch( error => {
        if(error.response.data.type === "com.vmware.vapi.std.errors.unauthenticated") {
            res.status(401).json(error.response.data);
        }
        else {
            res.status(500).json(error.response.data);
        }
    });
}

module.exports.details = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'get',
        url: `https://${process.env.VC}/rest/vcenter/resource-pool/${id}`,
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
        if(error.response.data.type === "com.vmware.vapi.std.errors.unauthenticated") {
            res.status(401).json(error.response.data);
        }
        else {
            res.status(500).json(error.response.data);
        }
    });
}