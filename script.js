
const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    // const size = Math.random()*100
// spanE1.style.width = width + "px"
// spanE1.style.width = height + "px"
    const spanE1 = document.createElement("span") 
spanE1.style.left = xPos + "px"
spanE1.style.top = yPos + "px"
    bodyE1.appendChild(spanE1);

    setTimeout(() => {
        spanE1.remove()
    }, 3000);
})