document.querySelectorAll(".grid img").forEach(img=>{

img.onclick=()=>{

let modal=document.createElement("div");

modal.style.position="fixed";
modal.style.top="0";
modal.style.left="0";
modal.style.width="100%";
modal.style.height="100%";
modal.style.background="rgba(0,0,0,0.9)";
modal.style.display="flex";
modal.style.alignItems="center";
modal.style.justifyContent="center";

let image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";

modal.appendChild(image);

modal.onclick=()=>modal.remove();

document.body.appendChild(modal);

}

});
