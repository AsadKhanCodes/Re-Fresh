const express = require('express')
const db = require('./db_access.js')
const app = express()
const port = 3001

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


app.get('/', (req, res) => {
    db.sqlQuery(db.conn, "SELECT * FROM consumer", db.ConsumerModel).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
      })
})

app.post('/post/:table', (req, res) => {    
    db.sqlQuery(db.conn, "SELECT * FROM " + req.params.table, db.ConsumerModel).then(response => {
        console.log(req.body)
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
      })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})