var arr = [
    {image:"https://images.unsplash.com/photo-1780995173877-3c5d1c63fcdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"},
    {image:"https://images.unsplash.com/photo-1781439542752-7a1c7f0b1780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"},
    {image:"https://plus.unsplash.com/premium_photo-1781045230616-8fe522a552da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
    },
    {image:"https://images.unsplash.com/photo-1781795290283-893dd050eeb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"}
]

var box = document.querySelector("#box")
var clutter = ``
arr.forEach(function(dets,idx){
clutter += `<div class="image">
            <img id="${idx}" src="${dets.image}" alt="">
        </div>`
})
box.innerHTML = clutter;
let images = document.querySelectorAll(".image img");

let current = 0;

// Sab images hide kar do
images.forEach(function(img) {
    img.style.display = "none";
});

// Pehli image dikhao
images[current].style.display = "block";

// Har 2 second baad image change hogi
setInterval(function () {

    images[current].style.display = "none";

    current++;

    if (current >= images.length) {
        current = 0;
    }

    images[current].style.display = "block";

}, 2000);












 