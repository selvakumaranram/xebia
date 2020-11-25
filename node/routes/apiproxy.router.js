var express = require('express');
var router = express.Router();


const proxyController = require('../controller/proxy.controller.js');

router.post('/save/:id', proxyController.savefile);
router.get('/read/:id', proxyController.read);

router.use('/', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'this url endpoint in  pub/proxy  and api/proxy  is not available'
    })
  });

module.exports = router;