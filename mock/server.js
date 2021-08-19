const express=require('express')
const app=express();
let bodyParser=require('body-parser')
let router=express.Router();





//为了发送post请求
const axios=require('axios')

//http://localhost:3030/api/test/todos






app.listen(3030,()=>{
    console.log('listen')
});
app.get('/',(req,res)=>{
    res.send('hello')
})
router.use('/test',require('./test'));
app.use('/api',router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))






