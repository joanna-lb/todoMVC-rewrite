let Mock = require('mockjs')
let express = require("express")
let router = express.Router();
const bodyParser=require('body-parser')


// const jsonParser=
 router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())


const todoList=[
    {
        "id": '1',
        "name": 'joanna',
       "isComplete": true
    },
    {
        "id": "2",
        "name": "Joanna",
        "isComplete": false
    }, {
        "id": "5",
        "name": "Cloe",
        "isComplete": true
    }
]

router.get('/todos' ,function (req, res) {
    let data = Mock.mock({
        'todos': todoList
    })
    return res.json(data)
})


router.post('/todos',(req,res)=>{
    let data=Mock.mock({
        'todos':todoList
    })
    console.log(req.body)

    return res.json(data)
})



module.exports = router;
