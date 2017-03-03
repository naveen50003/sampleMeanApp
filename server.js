var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Router = express.Router;
var router = Router();
var port = process.env.PORT || 4000;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Mongoose Configuration
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employeeTable');
var employeeSchema = require('./model/employeeSchema.model')(mongoose);
console.log(employeeSchema);


app.get('/', (req, res, next) => {

    console.log("entered default routing path");
    res.send('index.html');
});
app.get('/getProfiles/:name', (req, res, next) => {

    var name = req.params.name;

    console.log("entered default routing path");
    console.log(`params received from URL Hit are ${name}`);

    //res.send(" SUccessfully retrieved the required hit data");
    employeeSchema.find({ "name": name }, function employeeDetails(err, employees) {

        console.log("entered getDetails of employee Block");
        if (err) {
            console.log("entered error block");
            res.send(err)
        }
        //console.log(employees);
        res.json(employees);
    })

});
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})
