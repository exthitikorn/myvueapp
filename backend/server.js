const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Olt = require('./api/models/oltModel');
global.Ofccc = require('./api/models/ofcccModel');
global.Sdp = require('./api/models/sdpModel');
global.User = require('./api/models/userModel');
const oltroutes = require('./api/routes/oltRoutes');
const ofcccroutes = require('./api/routes/ofcccRoutes');
const sdproutes = require('./api/routes/sdpRoutes');
const userroutes = require('./api/routes/userRoutes');

mongoose.connect(
    'mongodb://localhost/myapp',
    { useNewUrlParser: true }
)

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

oltroutes(app);
ofcccroutes(app);
sdproutes(app);
userroutes(app);

app.listen(port);

app.use((req, res)=>{
    res.status(404).send({url: `${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`);