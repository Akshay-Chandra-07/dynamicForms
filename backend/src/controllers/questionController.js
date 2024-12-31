const Questions = require('../models/questionModel')
const Options = require('../models/optionsModel')

exports.create = async (req,res)=>{
    try{
        const {question,options} = req.body
        const quiz = await Questions.query().insertGraph(req.body);
        return res.status(201).json({msg:"quiz created"})
    }catch(err){
        console.log(err)
        return res.status(401).json({msg:"Internal Error"})
    }
}

exports.call = async (req,res)=>{
    try{
        const data = await Questions.query()
            .join('options','options.question_id','=','questions.id')
            .select("*");
        console.log(data)
        return res.status(201).json({msg:"data fetched"})
    }catch(err){
        console.log(err)
        return res.status(401).json({msg:"Internal Error"})
    }
}