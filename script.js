const main = document.querySelector("main");
const knife = document.querySelector(".knife");
const fruit = document.querySelector(".fruit-wrapper");

let showKnife = false;
fruit.style.bottom = "-120px";
fruit.style.left=Math.floor(Math.random(100) * 700) + "px";

let velocity = 1;


main.addEventListener("mousemove", (event) => {
    if(showKnife === true) {
        let newX = event.clientX - 120;
        let newY = event.clientY - 150;
        knife.style.left = newX + "px";
        knife.style.top = newY + "px";
    }
})

main.addEventListener("mouseleave", (event) => {
    showKnife = false
    knife.style.visibility = "hidden";
});

main.addEventListener("mouseenter", (event) => {
    knife.style.visibility = "visible";
    showKnife = true
});

fruit.addEventListener("click", ()=>{
   fruit.style.gap = "10px"
})

const fruitSpin = (fruit) => {
    let deg = 0;
    setInterval(() => {
        fruit.style.transform = `rotate(${deg}deg)`
        deg++;
    }, 1);
}

const moveFruit = () =>{
    fruitSpin(fruit);
    for (let i = 0; i < 500; i++) {
        if(i % 100 === 0){
            velocity = velocity + 0.05;
        }
        setTimeout(() => {
            fruit.style.bottom = parseInt(fruit.style.bottom) + 1 +"px"        
        }, velocity * i);
    }
    setTimeout(() => {
        velocity = 1.25;
        for (let i = 0; i < 500; i++) {
            if(i % 100 === 0){
                velocity = velocity - 0.05;
            }
            setTimeout(() => {
                fruit.style.bottom = parseInt(fruit.style.bottom) - 1 +"px"        
            }, velocity * i);
        }
    }, 1200)
}

moveFruit();