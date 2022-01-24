const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Olt = require('./api/models/oltModel');
const routes = require('./api/routes/oltRoutes')

mongoose.connect(
    'mongodb://localhost/myapp',
    { useNewUrlParser: true }
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

routes(app);
app.listen(port);

app.use((req, res)=>{
    res.status(404).send({url: `${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`);