const params={
    id:'5'
}

fetch('/api/test/profile',{
    method:'POST',
    credentials:'include',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(params)
}).then((response)=>{
    console.log(response);
    return response.json()
}).then(response=>
    console.log(response)
).catch(e=>{
    console.log(e)
})