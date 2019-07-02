const Employee = require('../models/EmployeeModel');
const mongoose = require('mongoose');

exports.get_all = (req, res, next) => {
    Employee.find()
    .select('name email mobile employee_type _id')
    .exec()
    .then(result=>{
        const response = {
            count: result.length,
            employee: result.map(result=>{
                return {
                    name: result.name,
                    email: result.email,
                    mobile: result.mobile,
                    employee_type: result.employee_type,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/employee/'+result._id
                    }
                }
            })
        }
             res.status(200).json({
                message: 'Handling GET request to /employee',
                result: response
            });
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    });
}

exports.addEmployee = (req, res, next) => {
  console.log(req.userData);
  Employee.find({email: req.body.email})
  .exec()
  .then(employee=>{
      if(employee.length>=1){
          return res.status(409).json({
              message: "You have already added this employee"
          });
      }else{
        const employee = new Employee({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            employee_type: req.body.employee_type
        });
        employee.save().then(result => {
            console.log(result)
            res.status(201).json({
                message: "Handling POST request to /products",
                createdCms: {
                  name: result.name,
                  email: result.email,
                  mobile: result.mobile,
                  employee_type: result.employee_type,
                  _id: result._id
                }
            });
        }).catch(err=>{
            console.log(err)
            res.status(500).json({
                error: err
            });
        });
      }
  });
}

exports.get_single_employee = (req, res, next) => {
  var id = req.params.empId;
  console.log(id);
  Employee.findById({"_id":id})
  .select("name email mobile employee_type _id")
  .exec()
  .then(doc =>{
      console.log(doc)
      if(doc){
          res.status(201).json({
              message: "Handling GET request to /products/:id",
              createdEmployee: doc,
          });
      }else{
          res.status(404).json({
               message: "No valid entry found for this provided id",
          });
      }
  }).catch(err=>{ res.status(500).json({ error:err}); });
}

exports.update = (req, res, next) => {
  const id = req.params.empId;
  console.log(id)
  console.log(req.body)
  Employee.update({"_id":id}, {$set: req.body})
  .exec()
  .then(doc=>{
      res.status(200).json({
          message: "Employee with "+id+" updated",
      })
  })
  .catch(err=>{
      res.status(500).json({
          message: "There was an error in updating the employee",
          error: err
      })
  });
}

exports.delete = (req, res, next) => {
  const id = req.params.empId;
  console.log(id);
  Employee.remove({_id: id})
  .exec()
  .then(result=>{
      res.status(200).json({
          message: 'Employee Deleted Successfully',
      });
  })
  .catch(err=>{
      res.status(500).json({
          error: err
      });
  });
}