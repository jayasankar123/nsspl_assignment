const express = require('express')
const app = express()
var multer = require('multer')
const bodyParser = require("body-parser");
const port = 8080;

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connection } = require('./connector')


var cors = require('cors');

app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});



app.get('/',(req,res)=>{
    let total = 0;

    function calculateSum(data){
        res.send(JSON.stringify("hbervrey"));
    }
    connection.find().then((data) => calculateSum(data));
    

});




app.post("/", function(req,res){
    
    console.log(req.body.path);
    for(let i=0;i<req.body.path.length;i++){
        const newImage = {"imagePath":req.body.path[i]};
        var image = new connection(newImage);
        image.save();
    }
    res.send(req.body.path);
    
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;