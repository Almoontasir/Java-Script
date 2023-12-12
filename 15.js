// object oriented programming
// prototype
// let a ={
//     name : "moon",
//     address: "panchagarh"
// }
// let p={
//     run:()=>{
//         alert("run");
//     }
// }
// p.__proto__={
//     blood : "A+"
// }
// a.__proto__ = p;
// a.run()
// console.log(a.blood)

// class
// class RailwayForm{
//     constructor(name){
//     this.Name = name;
//     }
//     submit(){
//         alert("form submited");
//     }
//     cancel()
//     {
//         alert("form canceled");
//     }
// }
// let moon = new RailwayForm("Moon");
// // let rohan = new RailwayForm();
 
// // moon.submit();
// // rohan.submit();
// // rohan.cancel();
// moon.Name = "raya"
// console.log(moon.Name)


// class complex{
//     constructor(real,imaginary)
//     {
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num)
//     {
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }
// let a = new complex(2,4);
// let b = new complex(3,6);
// console.log(a);
// a.add(b);
// console.log(a);

// class human{
//     constructor(name,favfood)
//     {
//         this.name = name;
//         this.favfood = favfood;
//     }
//     walk(){
//         console.log(this.name + "Human is walking");
//     }
// }
// class student extends human{
//     walk(){
//         // super.walk();
//         console.log(this.name + " Student is walking")
//     }

// }
// let o = new student("moon","korola");
// o.walk();
// console.log(o instanceof human);

// for localstroge
submit.addEventListener("click",(e)=>{
    // e.preventDefault();
    console.log(e);
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem(JSON.stringify(titlec),JSON.stringify(descc))
    
    title.value="";
    desc.value="";
})
// deletedesc.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log(e);
//     localStorage.removeItem("todo");

// })

 let itml = "";
// for (var a in localStorage) {
//     console.log(a, ' = ', localStorage[a]);
//  }
 

// for(var a in localStorage)
// {
//     itml =itml+
    
//     `
//      <h1>${a}</h1>
//      <p>${localStorage[a]}</p>
//     `
// }
// todo.innerHTML = itml;
const keys = Object.keys(localStorage)
// console.log(keys)
let i = keys.length
let key,value,j=0;
let check = true;
let m = 0;
console.log(m);

while(j<i)
{
    check = false;
    key=keys[j];
    value = localStorage.getItem(key);
    // console.log(key,value);
   
    j++;
    itml =itml+
    
         `
         <div style="background-color:gray;width:30%;border-radius:9px">
           <div style="background-color:red;">
             <h1>${key}</h1>
           </div>
           <div style="background-color:green;">
             <p>${value}</p>
           </div>
        
         <button  id="${encodeURIComponent(key)}"  class="btn btn-danger my-3" onclick="myfun(this.id)">Delete</button>
         </div>
        `
     
        // deletedesc.addEventListener("click",(e)=>{
        //     // e.preventDefault();
        //     // console.log(e);
        //     localStorage.removeItem(key);
        
        // })
        
        

}
function myfun(clicked_id){
//    alert(decodeURIComponent(clicked_id));
     localStorage.removeItem(decodeURIComponent(clicked_id));
    // console.log(key);
     window.location.reload();
}

if(check)
{
    itml =itml+
    `
    <div style="background-color:red;border:2px solid green;border-radius:9px; padding:2px 10px;box-shadow: 5px 5px #888888">
    <h1>No data avaiable</h1>
  </div>
    `
   
}
todo.innerHTML = itml;



    

