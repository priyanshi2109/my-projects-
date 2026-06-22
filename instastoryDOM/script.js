let arr = [
    {dp:"https://images.unsplash.com/photo-1781439542752-7a1c7f0b1780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1780500270578-104f541ee554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp:"https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdGlmdWwlMjBnaXJsfGVufDB8fDB8fHww"
    },
    {dp:"https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdGlmdWwlMjBnaXJsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdGlmdWwlMjBnaXJsfGVufDB8fDB8fHww"

    },
    {dp:"https://images.unsplash.com/photo-1536063211352-0b94219f6212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXRpZnVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdGlmdWwlMjBnaXJsfGVufDB8fDB8fHww"
    }
]
var stories = document.querySelector("#stories")
var clutter = ``
arr.forEach(function(elem,idx){
clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div> `
})
 stories.innerHTML = clutter; // stories ke andar clutter ke char div (story) ko jod diyaa
stories.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})` 
    setTimeout(function(){
         document.querySelector("#full-screen").style.display = "none"
    },3000)
    
})




