// let t = document.getElementsByClassName("naiv")[0].firstElementChild.firstElementChild.style.color="red"
// let third1 = document.getElementsByClassName("third")[0].firstElementChild.style.color="green"
// let third2 = document.getElementsByClassName("third")[0].lastElementChild.style.color="green"
// let t1 = document.getElementsByClassName("container")[0].style.color="cyan"
// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background = "cyan";
// });
// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background="cyan"
// });
// let l = document.getElementsByTagName("ul")[0].firstChild
// console.log(l)
// console.log(document.body.firstElementChild)
// console.log(document.getElementById("sp").innerHTML)
// document.getElementById("sp").innerHTML = "yeah <i>you are moon</i>"
// let a = sp.getAttribute("class")
// console.log(a)
// console.log(sp.hasAttribute("class"))
// console.log(sp.hasAttribute("style"))
// sp.setAttribute("class","cl")
// console.log(sp.attributes)
// sp.removeAttribute("class")
// let a = document.getElementsByTagName("span")[0]
// a.innerHTML = a.innerHTML + " hello world"
// console.log(a)
// let div = document.createElement("div");
// div.innerHTML = "<h1> Hello world</h1>";
// // a.after(div);
// // a.before(div);
// a.replaceWith(div);
// sp.className = "bg-red-900 text-white"
// console.log(sp.classList)
// sp.classList.remove("bg-red-900")
// sp.classList.add("bg-red-900")
// sp.classList.toggle("bg-red-900")
// sp.classList.toggle("bg-red-900")
// setTimeout(function()
// {
//     alert("I am inside the set timeout");
// },5000)
// const sum = (a,b) =>{
//     alert("The previous sum is "+(a+b));
// }
// setTimeout(sum,5000,50,25);
// setInterval(function()
//     {
//             alert("You motherfucker get out from my website");
//     },5000
// )
const a =function(e)
{
  alert("Hello world1");
  console.log(e.target)
  
}
btn.addEventListener('click',a)
let b = prompt("Enter a number ")

if(b==2)
{
    btn.removeEventListener('click',a);

}

