const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Config ENV variables
require('dotenv').config();
const apiRoutes = require('./routes/apiRoutes');


//Enable CORS
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain)


// Config port
const PORT = process.env.PORT || 3001

// Config DB Connection
const db_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fpwjr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(db_string)
    .then((result) => {
        console.log('Connected to DB');
        // APP Listen, only once DB is connected
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }).catch((err) => {
        console.log(`Connection Failed: ${err}`)
    })
// Middleware
app.use(express.json())
// API Routes
app.use('/api', apiRoutes);
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// Routes
app.get('/', (req, res) => {
    res.end('NO GET')
})


// Close Unauthorized Paths
app.use((req, res) => {
    res.status(403).end('Forbidden')
})
