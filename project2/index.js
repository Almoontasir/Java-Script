const fs = require('fs');
const replaceThis = "moon"
const replaceWith = "john"
const preview = true;

try {
  const data = fs.readdir("data",(err,data)=>{
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let newFile = "data/"+ item.replace(/moon/g,replaceWith)
        if(!preview)
        {

            fs.rename("data/"+ item,newFile, ()=>{
                console.log("Rename Success")
            })
        }
        else{
          if("data/"+ item !=newFile)  console.log("data/"+ item + "will be rename to "+ newFile)
        }
    }

     
  })
} catch (err) {
  console.error(err);
}
