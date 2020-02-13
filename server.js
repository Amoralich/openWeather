const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/", function(req, res){
    let city= req.body.city;
    let citycode = "";

    if(city === "588409") {
    request(`https://api.openweathermap.org/data/2.5/weather?id=588409${city}&units=metric&appid=a827255c74c4ce1d807974c54265443c.json`, function(error, response, body){
    data = JSON.parse(response.body);
    temp = data.main.temp;
    
});

    console.log(response.body);


   


app.listen(3000, function(){
    console.log("Server is running on port 3000");
}); 	