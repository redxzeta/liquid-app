const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.get('/healthz', cors(), (req, res) => {

    res.send('Tilt-o-Workout App Is Up And Healthy - Timestamp : ' + new Date().toUTCString());

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})