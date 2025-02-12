const express = require('express')

const app = express()

app.use(express.json())


//MIDDLEWARES
app.use((req,res,next)=>{
    console.log("this is middleware 1")
    next();
})

const middlewares2 = (req,res,next)=>{
    console.log("this is middleware 2")
    next();
}

const middlewares3 = (req,res,next)=>{
    const id = req.params.id
    console.log("id user name is collected in middleware3 :",id)
    next();
}

//GET METHOD
app.get('/',(req,res)=>{
    res.send("hello world!")
})

//POST METHOD
app.post('/users',middlewares2 , (req,res)=>{
    
    const user  = req.body
    console.log(user)

   res.send("the user has been added")
})


app.post('/users/:id' , middlewares3,(req,res)=>{
    res.send("id collected")
})


app.listen(4000,function(){
    console.log("the port is connected to 4000")
})