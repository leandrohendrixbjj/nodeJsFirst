require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();  
      app.use(bodyParser.urlencoded({extended: true}));      
      app.use('/static', express.static('src/app/public'));
      
      app.use(methodOverride( (req, res) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          // look in urlencoded POST bodies and delete it
          var method = req.body._method;
          delete req.body._method;
          return method;
        }
      }));
      

const rotas = require('../app/routes/route.js')(app);

module.exports = app;
