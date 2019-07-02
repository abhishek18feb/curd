const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const Product = require('../models/product');
const EmployeeController = require('../controller/EmployeeController');
const multer = require('multer');
//const checkAuth = require('../middleware/check-auth');


router.get('/',  EmployeeController.get_all);

router.post('/add', EmployeeController.addEmployee);

router.get('/get_single_employee/:empId', EmployeeController.get_single_employee);

router.patch('/update/:empId',   EmployeeController.update);

router.delete('/delete/:empId',   EmployeeController.delete);

module.exports = router;