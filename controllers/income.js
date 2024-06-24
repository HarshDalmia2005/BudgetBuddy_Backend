const IncomeSchema = require("../models/IncomeModel")

exports.addIncome= async (req, res) => {
  const{title,amount,description,category,date}=req.body

  const income=IncomeSchema({
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
    res.status(200).json({message:'Income saved Sucessfully!!'})

  } catch (error) {
    res.status(500).json({message:'SERVER ERROR..'})
  }
}



exports.getIncome= async(req, res) => {
  try {
    const incomes=await IncomeSchema.find().sort({createdAt: -1})
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({message:'SERVER ERROR..'})
  }
}

exports.deleteIncome= async (req, res) => {
    const {id}=req.params
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Income Deleted Successfully!'})
        })
        .catch((err)=>{
            res.status(500).json({message:'SERVER ERROR..'})
        })
}


