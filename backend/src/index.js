const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./routes/notes'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
