const model=document.createElement("div");
model.id="model"
document.body.appendChild(model);

const images=document.querySelectorAll(".img")

images.forEach(image=>{
    image.addEventListener("click",()=>{
  model.classList.add("active");
  var photo=document.createElement("img")
  photo.src=image.src;
  photo.id="photo"
  while(model.firstChild){
    model.removeChild(model.firstChild)
  }
  model.append(photo)
  

    })
})

model.addEventListener("click",()=>{
    model.classList.remove("active")
})
