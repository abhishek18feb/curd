const mongoose = require('mongoose');

var possibleRoles = ['Permanent', 'Part_Time'];

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, Required:true},
    email:{type:String, Required:true},
    mobile:{type:String, Required:true},
    employee_type:[{type: String, enum: possibleRoles}],
});

employeeSchema.virtual('possibleRoles').get(function () {
    return possibleRoles;
});

module.exports = mongoose.model('Employee', employeeSchema);