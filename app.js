const express = require('express'); //Add express
const app = express();

require('dotenv').config(); // Add dotenv for keys


const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
         .then((result)=>{
          console.log('App is connect to atlas db')
          initApp()
         })
         .catch((error)=>{
          console.log('Error when connecting to db \n', + error)
         });


const {DB_USERNAME, DB_PASS, NODE_DEV, PORT} = process.env // const DB_USERNAME = process.env.DB_USERNAME



app.use(express.json())

function initApp(){
      require ('./api/modules/auth/auth.public.routes')(app)
      // require ('./api/modules/auth/auth.guard')(app)
       require('./api/modules/products/products.routes')(app)



      app.listen(PORT,()=>{
        console.log('server listening')
      })


}