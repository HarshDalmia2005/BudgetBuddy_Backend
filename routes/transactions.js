const express = require('express');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const { deleteExpenses, getExpenses, addExpenses } = require('../controllers/expenses');
const router=express.Router()

router.post('/add-income',addIncome)
      .get('/get-income',getIncome)
      .delete('/delete-income/:id',deleteIncome)
      .post('/add-expense',addExpenses)
      .get('/get-expense',getExpenses)
      .delete('/delete-expense/:id',deleteExpenses)
      
module.exports=router