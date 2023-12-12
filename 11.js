// btn.addEventListener("click",function(e)
// {
//     alert("don't fuck her");
// }
// );
// const a = (e)=>
// {
//     alert("fuck her harder");
// }
// btn1.addEventListener("click",a)
// setInterval(function()
// {
//   b1.classList.toggle("b");
// },100)

// for callback
// function loadscript(src,callback)
// {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
      
//         callback(src);
//     }
//     document.body.appendChild(script);
// }
// function hello(src)
// {
//     alert("hello world "+src);
// }
//  loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello)
  
// //  for callback

// let promise = new Promise(function(resolve,reject)
// {
//     alert("hello");
//     resolve(56);
// })
// console.log(promise())

// let p = new Promise((resolve,reject)=>{
//  console.log("Promise is panding");
//  setTimeout(()=>{
//        console.log("Promise is fullfiled")
//        resolve(true);
//      //reject(new Error("I am an errror"));
//  },5000)
// })
// console.log(p);
// setTimeout(()=>{
//     console.log(p)
// },6000)
// let p2 = new Promise((resolve,reject)=>{
//     console.log("Promise is panding");
//     setTimeout(()=>{
//           console.log("Promise is rejected")
//        //    resolve(false);
//         reject(new Error("I am an errror"));
//     },5000)
//    })

//  p.then((value)=>{
//     console.log(value);
//  })
//  p2.catch((error)=>
//  {
//     console.log("There is some error")
//  })

//  promise channing
// let p = new Promise((resolve,reject)=>{
//      console.log("Promise is panding");
//      setTimeout(()=>{
//            console.log("Promise is fullfiled")
//            resolve(true);
//          //reject(new Error("I am an errror"));
//      },5000)
//     })
   
//     p.then((value)=>
//     {
//         console.log(value);
//         let p2 = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                resolve("promise 2");
//             },2000)
//         })
//         return p2;
//     }).then((value)=>{
//         console.log("we are done")
//     })
 
// onload with promices
// function loadscript(src)
// {
//     return new Promise((resolve,reject)=>
//     {
//         let script = document.createElement("script")
//         script.src = src;
//         script.type = "text/javascript";
//         document.body.appendChild(script);
//         script.onload = ()=>{
//             resolve("script is loaded");
//         }
//         script.onerror = ()=>{
//             reject(0);
//         }
        
//     })
   
// }
// let p = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");
// p.then((value)=>{
//     console.log(value);
// }
// ).catch((error)=>{
//     console.log("We are sorry but we are having problems loading problems");
// }
// )

// let p1 = new Promise((resolve,reject)=>{
//      console.log("Promise is panding");
//      setTimeout(()=>{
           
//           // resolve("one is done");
//          reject(new Error("I am an errror"));
//      },1000)
//     })
// let p2 = new Promise((resolve,reject)=>{
//      console.log("Promise is panding");
//      setTimeout(()=>{
           
//           // resolve("two is done");
//          reject(new Error("I am an errror"));
//      },2000)
//     })
// let p3 = new Promise((resolve,reject)=>{
//      console.log("Promise is panding");
//      setTimeout(()=>{
           
//            resolve("three is done");
//          //reject(new Error("I am an errror"));
//      },3000)
//     })
//     promiseall = Promise.any([p1,p2,p3])
//     promiseall.then((value)=>{
//         console.log(value)
//     })

// async function moon(){
//     let panchWeather = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//                 resolve("27 deg");
//         },3000)
//     })
//     let DhakaWeather = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//                 resolve("27 deg");
//         },1000)
//     })
//     console.log("panchagarh weather is loading");
//     let p = await panchWeather
//     console.log("Weather is loaded "+p);
//     console.log("dhaka weather is loading");
    
//     let d = await DhakaWeather
//     console.log("Weather is loaded "+d);
//     return [p,d];

// }
// let a = moon();
// console.log(a);
