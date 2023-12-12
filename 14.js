let a=[
    "match not found",
    "another 200k",
    "password found"
]
 const sleep = async(seconds)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },seconds*1000)
    }
    )
}
const showhack = async(messege)=>
{
    await sleep(2);
    console.log(messege);
   
}

(async()=>{
   
    for(let i =0;i<a.length;i++)
    {

        await showhack(a[i]);
    }
   
})()