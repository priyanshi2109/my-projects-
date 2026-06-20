

var main = document.querySelector("#main")
var crsr = document.querySelector("#curser")

main.addEventListener("mousemove",function(dets){
    // dets is the variable object which moves
    crsr.style.left = dets.x + "px"  // let dets . y might be 200 + px = "200px"
    crsr.style.top = dets.y + "px"
})
