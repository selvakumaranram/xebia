const express = require('express');
const bodyParser = require('body-parser');


//imported routes and others
const pubproxy = require('./routes/pubproxy.router');
const apiproxy = require('./routes/apiproxy.router');
const app = express();

const port = process.env.PORT || 4000;
// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome Xerbians')
  })

  app.use('pub/proxy', pubproxy);
  app.use('api/proxy', apiproxy);
  app.use('*', (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'url endpoint with pub/proxy or api/proxy only allowed'
    })
  });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });