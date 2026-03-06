// CARRUSEL

const track = document.querySelector(".carousel-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let scrollAmount = 0

next.addEventListener("click",()=>{
scrollAmount += 400
track.scrollTo({
left:scrollAmount,
behavior:"smooth"
})
})

prev.addEventListener("click",()=>{
scrollAmount -= 400
track.scrollTo({
left:scrollAmount,
behavior:"smooth"
})
})


// ZOOM IMAGEN

const modal = document.getElementById("zoomModal")
const modalImg = document.getElementById("zoomImg")

document.querySelectorAll("img").forEach(img=>{

img.onclick = function(){
modal.style.display="block"
modalImg.src=this.src
}

})

document.querySelector(".cerrar").onclick=function(){
modal.style.display="none"
}
