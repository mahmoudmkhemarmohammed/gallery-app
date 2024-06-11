let imgs = Array.from(document.querySelectorAll("img"));
let btnLeft = document.querySelector("i.fa-arrow-left");
let btnRight = document.querySelector("i.fa-arrow-right");
let listContainer = document.querySelector("body .container .content .list");
let darkMood = document.querySelector("i.fa-sun");
let currentIndex = 0;
// Create ul list 
let ulList = document.createElement("ul")
for(let i = 1 ; i <= 7; i++){
    let li = document.createElement("li");
    li.dataset.index = i;
    let liText = document.createTextNode(i);
    li.appendChild(liText)
    ulList.appendChild(li);
}
listContainer.appendChild(ulList);
let arrLis = document.querySelectorAll("ul li");
function cheack () {
    removeClass ()
    imgs[currentIndex].classList.add("active");
    arrLis[currentIndex].classList.add("active");
    if(currentIndex === 0){
        btnLeft.classList.add("disbled");
    }
    else {
        btnLeft.classList.remove("disbled");
    }
    if(currentIndex === imgs.length - 1){
        btnRight.classList.add("disbled")
    }
    else {
        btnRight.classList.remove("disbled")
    }
}
cheack ()
function removeClass () {
    imgs.forEach(img => {
        img.classList.remove("active");
    })
    arrLis.forEach(li => {
        li.classList.remove("active");
    })
}
btnRight.onclick = () => {
    if(btnRight.classList.contains("disbled")){
        return false
    }
    else {
        currentIndex++;
        cheack();
    }
}
btnLeft.onclick = () => {
    if(btnLeft.classList.contains("disbled")){
        return false
    }
    else {
        currentIndex--;
        cheack()
    }
}
arrLis.forEach( li => {
    li.onclick = function(){
        currentIndex = this.dataset.index - 1;
        cheack()
    }
})
darkMood.addEventListener("click",()=> {
    if(darkMood.classList.contains("fa-sun")){
        darkMood.classList.toggle("fa-moon")
        document.body.classList.toggle("dark")
        document.querySelector(".container").classList.toggle("dark")
        btnLeft.classList.toggle("dark")
        btnRight.classList.toggle("dark")
        document.querySelector("body .container .darkmoodandlightmood .icon i").classList.toggle("dark");
        
    }
})
let count = setInterval( _ => {
    if(currentIndex !== imgs.length - 1){
        currentIndex++;
        cheack();
        if(currentIndex === imgs.length - 1){
            currentIndex = 0;
            cheack()
            if(btnLeft.click || btnRight.click){
                clearInterval(count)
            }
        }
    }
},2000)