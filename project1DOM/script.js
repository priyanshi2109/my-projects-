// var add = document.querySelector("#add")
// // var remove = document.querySelector("#remove")
// var h5 = document.querySelector("h5")


// var flag =0;
// add.addEventListener("click",function(){
//     if(flag==0){
//         h5.innerHTML=("friend")
//         h5.style.color="green"
//         flag=1;
//     }
//     else{
//         remove.addEventListener("click",function(){
//             h5.innerHTML=("stranger")
//              h5.style.color="red"
//       flag=0;
//         })
//     }
// })


// or

// add.addEventListener("click",function(){
//     console.log("friend")
//     h5.style.color="green"
// })
// remove.addEventListener("click",function(){
//     console.log("stranger")
//     h5.style.color="red"
// })

// if we have only add friend button

var add = document.querySelector("#add")
// var remove = document.querySelector("#remove")
var h5 = document.querySelector("h5")
let flag =0;
add.addEventListener("click",function(){
    if(flag==0){
    h5.innerHTML =("friend")
    h5.style.color="green"
    add.innerHTML=("Remove friend")
    flag=1;
    }
    else{
   h5.innerHTML=("stranger")
    h5.style.color="red"
     add.innerHTML=("add friend")
    flag=0;
    }
})


