// Import models and mongoose
require('dotenv').config();
const axios = require('axios');
const https = require('https');

module.exports.list = (req, res, next) => {
    let url;
    const filters = req._parsedUrl.search;
    if(filters != null) {
        url = `https://${process.env.VC}/rest/vcenter/vm${filters}`;
    }
    else {
        url = `https://${process.env.VC}/rest/vcenter/vm`;
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

module.exports.create = (req, res, next) => {
    my_http_options = {
        method: 'post',
        url: `https://${process.env.VC}/rest/vcenter/vm`,
        withCredentials: true,
        headers: req.headers,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        data: req.body
    }
    axios(my_http_options)
    .then( response => {
        console.log("--- 200 OK ---");
        res.status(200).json(response.data);
    })
    .catch( error => {
        console.log("--- ERROR ---")
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
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}`,
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