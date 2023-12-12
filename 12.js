// function loadscript(src){
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload=()=>{
//             resolve("Data loaded succesfully");
//         }
//         script.onerror=()=>{
//             reject(0);
//         }
//     })
// }
// async function m(){
//     console.log(new Date().getMilliseconds());

//     let a =  await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
//     console.log(a);

//     console.log(new Date().getMilliseconds());
// }
// m();
// a.then((value)=>{
//  console.log(value);
// }).catch((error)=>{
//     console.log("Data could not loaded");
// })
// Ans 3
// let p =()=>{   
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new error("This is not acceptable"))
//         },100)
//     })
// } 

// let a = async()=>{
    
//     try{

//         let c = await p();
//        console.log(c)
//     }
//     catch(err)
//     {
//         console.log("This error has been handled")
//     }
// }
// a();
// let l = prompt("Enter the city name")
// console.log(l)
// let p = fetch("https://goweather.herokuapp.com/weather/"+l);
// console.log(p)
// p.then((response)=>{
//     return response.json()
// }).then((response)=>{
//     document.write("Weather of "+l+" is "+response.temperature)
//     document.write("<br>")
//     document.write("Wind speed is "+response.wind)
//     document.write("<br>")
//     document.write("The sky is "+response.description)
//     console.log(response);
// })
// const createTodo = async()=>{

//     let options = {
//         method: "POST",
//         Headers: {
//                 "Content-type": "application/json"
//         },
    
//     body: JSON.stringify({
//         title: 'Moon',
//         body: 'all',
//         userId: 1100,
//       }),
//     }
    


// let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
//   let response = await p.json()
//   return response;
// }
// const mainfunc = async()=>{
//     let todo = await createTodo()
//     console.log(todo)
// }
// mainfunc()
let key = prompt("Enter your key")
let value = prompt("Enter your value")

// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie);
localStorage.setItem(key,value);
// console.log(`The value is ${key} is ${localStorage.getItem(key)}`)
// if(key == "red" || key=="blue")
//   localStorage.removeItem(key)
// if(key == 0)
// localStorage.clear();
window.onstorage = (e)=>{
  alert("changed");
  console.log(e);
}