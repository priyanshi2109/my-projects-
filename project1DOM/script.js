// 4 pillers of DOM

// 1 . selection of an element of html

//  var a = document.querySelector("h1") // select h1 and store in variable a
//  console.log(a)

 // 2 .changing in html
//  a.innerHTML = "changed  html"   // changed html

// or 
// document.querySelector("h1").innerHTML="here it is"  // here it is 

// 3 . changing css

// a.style.color = "blue"
// a.style.backgroundColor = "lightpink"


// 4. Event - listener

// a.addEventListener("click",function(){
//     a.innerHTML=("im changed ")
//     a.style.color="blue"
//     a.style.backgroundColor = "lightpink"
// })


// add event listener example

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
let flag = 0;
btn.addEventListener("click",function(){
    if(flag===0){
        bulb.style.backgroundColor = "yellow"
    console.log("Cliocked")
   flag =1;
    }
    else{
        bulb.style.backgroundColor = "transparent"
    console.log(" again Clicked")
   flag =0;

    }
})



// select multiple elements 

// let h = document.querySelectorAll("h1")   // it will select all h1 in html
// h.forEach(function(e){
//     console.log(e)
// })


// select by id-name

// let box = document.getElementById("box")

// select by class name 

// let box = document.getElementsByClassName("box")


