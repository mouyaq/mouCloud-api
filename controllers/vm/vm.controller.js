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
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}`,
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

module.exports.delete = (req, res, next) => {
    const id = req.params.id;
    my_http_options = {
        method: 'delete',
        url: `https://${process.env.VC}/rest/vcenter/vm/${id}`,
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

module.exports.console = (req, res, next) => {
    const id = req.params.id;
    var dataJSON;
    var spawn = require("child_process").spawn,child;
    // child = spawn("pwsh",["/Users/mouyaq/ownCloud/IRONHACK/tests/console.ps1", `${id}`]);
    child = spawn("pwsh",["/home/mouyaq/console.ps1", `${id}`]);
    child.stdout.on("data",function(data){
        if(data.toString() != '\n') {
            dataJSON = {
                "data": data.toString().replace(/\n$/, "")
            }
        }
        console.log("Powershell Data: " + data);
        console.log("Data received");
    });
    child.stderr.on("data",function(data){
        console.log("Powershell Errors: " + data);
    });
    child.on("exit",function(){
        console.log("Powershell Script finished");
        res.status(200).json(dataJSON.data);
    });
    child.stdin.end(); //end input
    
}
