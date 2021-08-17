const express=require('express')
const app=express();


const axios=require('axios')





app.use((request,response,next)=>{
    next()
})


app.listen(3030,()=>{
    console.log('listen')
});
//    const data= [ {
//     "id": "3",
//     "name": "Lisa",
//     "isComplete": false
// }, {
//     "id": "2",
//     "name": "Joanna",
//     "isComplete": false
// },{
//     "id":"5",
//     "name": "Cloe",
//     "isComplete": true
// }]

app.get('/true',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Header','*')
    axios.get(' http://localhost:3000/todos').then(
        res=> {
            const list=res.data;
            list.map(todo=>todo.isComplete=true)
            console.log(list)
            response.send({todos:list})
        })

   // response.send({todos:data})
})

app.get('/false',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Header','*')
    axios.get(' http://localhost:3000/todos').then(
        res=> {
            const list=res.data;
            list.map(todo=>todo.isComplete=false)
            console.log(list)
            response.send({todos:list})
        })

    // response.send({todos:data})
})

app.get('/all',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Header','*')
    axios.get(' http://localhost:3000/todos').then(
        res=> {
            const list=res.data;
            response.send({todos:list})
        })

    // response.send({todos:data})
})


