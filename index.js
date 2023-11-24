const express = require('express');
const app= express();

//cors is a library , that ling frontdend into backend .
const cors = require('cors')

//body parser parse the frontend  in backend  server 
const bodyParser = require('body-parser')

//database coonnection
const db = require('./db/dbConection');
db.main();

//cors meddileware 
app.use( cors({
  origin: 'http://localhost:5173' || 'http://localhost:5174',
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
}))

//pass fontend data 
app.use(bodyParser.json())

//routing 
const routing = require('./router/router')

app.use('/data' , routing.routing);

const fileRouting = require('./router/file')



app.use('/file', fileRouting.routing);



 const server=app.listen(8080,()=>{
    let port = server.address().port ;
    console.log( `port=> http://localhost:${port}/`); 
})