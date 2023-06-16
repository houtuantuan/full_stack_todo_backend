const express = require('express')
const app = require("./app");
const port = 5000
const cors = require('cors')
app.use(cors())

require('dotenv').config();
require("./db/db.js")



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})