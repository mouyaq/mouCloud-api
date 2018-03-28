// Import models and mongoose
require('dotenv').config();
const axios = require('axios');
const https = require('https');

module.exports.create = (req, res, next) => {
    //Set-Cookie →vmware-api-session-id=ddfabc5f9235f121e2a258fa6c1d07df;Path=/rest;Secure;HttpOnly
    my_http_options = {
        method: 'post',
        url: `https://${process.env.VC}/rest/com/vmware/cis/session`,
        withCredentials: true,
        auth: {
            username: process.env.VC_USER,
            password: process.env.VC_PASS
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
        .then( response => {
            // cookie value
            const cookieSession = response.headers['set-cookie'];
            my_http_options.headers = {
                'Cookie': cookieSession
            };
            my_http_options.auth = {};
            // change from {"value":"key"} to {"vmware-api-session-id":"key"}
            response.data["vmware-api-session-id"] = response.data.value;
            delete response.data.value;
            res.status(201).json(response.data);
        })
        .catch( error => {
            res.status(500).json(error);
        });

}

module.exports.destroy = (req, res, next) => {
    req.logout();
    res.status(204).json();
}