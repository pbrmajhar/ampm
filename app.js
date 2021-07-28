const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello there! How are you doning today?')
})

app.listen(port, () => console.log('app is running on port '+ port))
