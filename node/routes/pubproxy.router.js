var express = require('express');
var router = express.Router();


//here all done in apiproxy.routes itself only I have readfile from here

const proxyController = require('../controller/proxy.controller.js');


router.post('/readfile', proxyController.readfile);



  module.exports = router;