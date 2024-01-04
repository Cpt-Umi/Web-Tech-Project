const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());

const indexRoute = require('./routes/index.js')

app.use('/', indexRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Running on PORT http://localhost:${PORT}`);
})
