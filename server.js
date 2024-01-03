const express = require("express")
const app = express();

const indexRoute = require('./routes/index.js')

app.use('/', indexRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Running on PORT http://localhost:${PORT}`);
})
