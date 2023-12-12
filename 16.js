// function a()
// {
//     f = 12;
//     console.log(f);
//     function b()
//     {
//         console.log(f);
//         function c()
//         {
//             console.log(f);
//         }
//         c()
//     }
//     f =23;
//     b();
// }
// a();
// function sum(a,b,c){
//     return a+b+c;
// }
// a =[1,3,5];
// console.log(sum(...a));
// class Password{
//     constructor()
//     {
//         console.log("welcome to new password generator");
//         this.pass = "";

//     }
//     generatePassword(len){
//         let chars = "abcdefghijklmnopqrstuvwxyz";
//         let numbers = "0123456789"
//         let special = "!@#$%^&*()"
//         if(len<3)
//         {
//             console.log("Your password length should be at least 3 charecters");
//         }
//         else{
//            let i=0;
//             while(i<len)
//             {
//                 this.pass += chars[Math.floor(Math.random()*chars.length)]
//                 this.pass += numbers[Math.floor(Math.random()*numbers.length)]
//                 this.pass += special[Math.floor(Math.random()*special.length)]
//                 i+=3;
//             }

//         }
//         this.pass = this.pass.substr(0,len)
//         return this.pass;
//     }
// }
//  let p = new Password()
//  console.log(p.generatePassword(7));
// setInterval(()=>{

//     var audio = new Audio('a.mp3');
//     audio.play();
// },1000)