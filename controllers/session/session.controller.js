// Import models and mongoose
require('dotenv').config();
const axios = require('axios');
const https = require('https');

module.exports.create = (req, res, next) => {
    //Set-Cookie →vmware-api-session-id=ddfabc5f9235f121e2a258fa6c1d07df;Path=/rest;Secure;HttpOnly
    const username = req.body.username;
    const password = req.body.password;
    my_http_options = {
        method: 'post',
        url: `https://${process.env.VC}/rest/com/vmware/cis/session`,
        withCredentials: true,
        auth: {
            username: username,
            password: password
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    }
    axios(my_http_options)
        .then( response => {
            // cookie value
            const cookieSession = response.headers['set-cookie'];
            console.log(cookieSession[0]);
            my_http_options.headers = {
                'Cookie': cookieSession[0]
            };
            const user = {
                username: my_http_options.auth.username,
                token: response.data.value,
                cookie: cookieSession[0]
            }
            my_http_options.auth = {};
            // change from {"value":"key"} to {"vmware-api-session-id":"key"}
            //response.data["vmware-api-session-id"] = response.data.value;
            //delete response.data.value;
            res.status(201).json(user);
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

module.exports.destroy = (req, res, next) => {
    console.log(req.headers);
    my_http_options = {
        method: 'delete',
        url: `https://${process.env.VC}/rest/com/vmware/cis/session`,
        withCredentials: true,
        responseType: 'json',
        responseEncoding: 'utf8',
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        //headers: { 'Cookie': req.headers['set-cookie'] }
        headers: req.headers
    }
    axios(my_http_options)
        .then( response => {
            res.status(204).json(response.data);
        })
        .catch( error => {
            //console.log(error);
            if(error.response.data.type === "com.vmware.vapi.std.errors.unauthenticated") {
                res.status(401).json(error.response.data);
            }
            else {
                res.status(500).json(error.response.data);
            }
        });
}


// response: 
//     { 
//         status: 401,
//         statusText: 'Unauthorized',
//         data:
//             { 
//                 type: 'com.vmware.vapi.std.errors.unauthenticated',
//                 value: [Object] 
//             } 
//     }