const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 8080;

// Static files
app.use(express.static('public'))

// Show hello world.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

// Run on port.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})