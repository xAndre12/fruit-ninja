const main = document.querySelector("main");
const knife = document.querySelector(".knife");
const slice = document.querySelector(".slice");
const scoreNumber = document.querySelector(".scoreNumber");
const retry = document.querySelector(".retry");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");


let showKnife = false;
let velocity = 1;
let currentBottom = 0;
let i = 0;

let fruitsImgs = [
    {
        img1:"./images/apple/a-half-1.png",
        img2:"./images/apple/a-half-2.png",
    },
    {
        img1: "./images/banana/banana1.png",
        img2:"./images/banana/banana2.png",
    },
    {
        img1: "./images/cherry/cherry1.png",
        img2:"./images/cherry/cherry2.png",
    },
    {
        img1:"./images/lemon/lemon1.png",
        img2:"./images/lemon/lemon2.png",
    },
    {
        img1:"./images/orange/orange1.png",
        img2:"./images/orange/orange2.png",
    },
    {
        img1: "./images/bomba/bomb.png"
    },
    {
        img1: "./images/bomba/bomb.png"
    },
    {
        img1: "./images/bomba/bomb.png"
    }
]


main.addEventListener("mousemove", (event) => {
    if(showKnife === true) {
        let newX = event.clientX - 570;
        let newY = event.clientY - 220;
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


const fruitSpin = (fruit) => {
    let deg = 0;
    setInterval(() => {
        fruit.style.transform = `rotate(${deg}deg)`
        deg++;
    }, 1);
}


const createFruit = (i, imgs) =>{
    console.log(imgs.img1)
    const div = document.createElement("div");
    div.classList.add('fruit-wrapper');
    div.classList.add(`fruit-${i}`)
    
    if(imgs.img2) {
        const img1 = document.createElement("img");
        img1.classList.add("half");
        const img2 = document.createElement("img");
        img2.classList.add("half");
        img1.src = imgs.img1;
        img2.src = imgs.img2;
        div.appendChild(img1);
        div.appendChild(img2);
    }
    if(!imgs.img2) {
        const img = document.createElement("img");
        img.src = imgs.img1;
        img.classList.add("bomb");
        div.appendChild(img);
    }
    div.style.bottom = "-120px";
    div.style.left=Math.floor(Math.random(100) * 700) + "px";
    div.addEventListener("click", ()=>{
        if(imgs.img2){
            div.style.gap = "10px"
            slice.style.left = div.style.left;
            slice.style.bottom = document.querySelector(`.fruit-${i}`).style.bottom;
            slice.style.visibility = "visible";
            setTimeout(() => {
                slice.style.visibility = "hidden";
            }, 200);
            scoreNumber.innerHTML = parseInt(scoreNumber.innerHTML) + 1;
            if(scoreNumber.innerHTML === "35"){
                win.style.visibility="visible";
                main.style.display = "none";
            }
        }
        else{
            slice.style.left = div.style.left;
            slice.style.bottom = document.querySelector(`.fruit-${i}`).style.bottom;
            slice.style.visibility = "visible";
            setTimeout(() => {
                slice.style.visibility = "hidden";
            }, 200);
            main.style.display = "none";
            lose.style.visibility="visible";
        }
     })
    main.appendChild(div)
    moveFruit(div)
    div.ondragstart = () => {
        return false;
      };
}

const moveFruit = (fruit) =>{
    fruitSpin(fruit);

    for (let i = 0; i < 500; i++) {
        if(i % 100 === 0){
            velocity = velocity + 0.05;
        }
        setTimeout(() => {
            fruit.style.bottom = parseInt(fruit.style.bottom) + 1 +"px" ;      
        }, velocity * i);
    }
    setTimeout(() => {
        velocity = 1.25;
        for (let i = 0; i < 500; i++) {
            if(i % 100 === 0){
                velocity = velocity - 0.05;
            }
            setTimeout(() => {
                fruit.style.bottom = parseInt(fruit.style.bottom) - 1 +"px";      
            }, velocity * i);
        }
    }, 1200)
}

setInterval(() => {
    createFruit(i++, fruitsImgs[Math.floor(Math.random() * 8)]); 
}, Math.floor(Math.random(1000) * 1500) );

retry.addEventListener("click",(()=>{
main.style.display = "flex";
scoreNumber.innerHTML = "0";
win.style.visibility = "hidden";
lose.style.visibility = "hidden";
}))
