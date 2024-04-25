const main = document.querySelector("main");
const knife = document.querySelector(".knife");
const fruit = document.querySelector(".fruit-wrapper");

let showKnife = false;


main.addEventListener("mousemove", (event) => {
    if(showKnife === true) {
        let newX = event.clientX - 50;
        let newY = event.clientY - 50;
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

document.querySelector('.fruit-wrapper').addEventListener("click", ()=>{
    console.log("da")
})
