const personnage = document.querySelector(".personnage");
let posX = 0;

document.addEventListener("keydown",(e)=>{
    switch(e.keyCode){
        //arrowRight
        case 39 : 
            walkRight();
            break;
        //arrowLeft   
        case 37:
            walkLeft();
            break;
        default:
    }
})

document.addEventListener("keyup",(e)=>{
    personnage.classList.remove("walk-left");
    personnage.classList.remove("walk-right");
})

function walkRight(){
    personnage.classList.remove("walk-left");
    personnage.classList.remove("left");
    personnage.classList.add("walk-right");
    personnage.classList.add("right");
    if(posX < document.body.offsetWidth - personnage.offsetWidth)
    personnage.style.transform = `translate(${posX += 3}px)`;
}

function walkLeft(){
    personnage.classList.remove("walk-right");
    personnage.classList.remove("right");
    personnage.classList.add("walk-left");
    personnage.classList.add("left");
    if(posX > -personnage.offsetWidth/2)
    personnage.style.transform = `translate(${posX -= 3}px)`;
}