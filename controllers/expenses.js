const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpenses= async (req, res) => {
  const{title,amount,description,category,date}=req.body

  const income=ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
  })

  try {
    if(!title || !amount || !category || !description || !date){
        return res.status(400).json({message:'*All fields are required'})
    }
    else if(amount<=0 || !amount==='number'){
        return res.status(400).json({message:'*Amount invalid!!'})
    }
   
    await income.save()
    res.status(200).json({message:'Expense saved Sucessfully!!'})

  } catch (error) {
    res.status(500).json({message:'SERVER ERROR..'})
  }
}



exports.getExpenses= async(req, res) => {
  try {
    const expenses=await ExpenseSchema.find().sort({createdAt: -1})
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({message:'SERVER ERROR..'})
  }
}

exports.deleteExpenses= async (req, res) => {
    const {id}=req.params
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense)=>{
            res.status(200).json({message:'Expense Deleted Successfully!'})
        })
        .catch((err)=>{
            res.status(500).json({message:'SERVER ERROR..'})
        })
}


