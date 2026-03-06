const zoom = document.querySelectorAll(".zoom");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

zoom.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
}
})

lightbox.onclick=()=>{
lightbox.style.display="none";
}
