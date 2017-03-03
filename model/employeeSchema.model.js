/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    "name": String,
    "gender": String,
    "age": Number
})

var employeeModel = mongoose.model('employee', employeeSchema);
module.exports = employeeModel;
*/



module.exports = function(mongoose) {

    var Schema = mongoose.Schema;
    var employeeSchema = new Schema({
        "name": String,
        "gender": String,
        "age": Number
    })

    var employeeModel = mongoose.model('employee', employeeSchema);
    return employeeModel;
}
