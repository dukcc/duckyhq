// Animate on scroll

window.addEventListener("scroll",animate)
window.addEventListener("load",animate)

function animate(){
    let elements = document.querySelectorAll("body *")
    let windowHeight = window.innerHeight
    for(let element of elements){
        let elementYPosition = element.getBoundingClientRect().top
        if(elementYPosition + 150 < windowHeight){
            element.classList.add("appeared")
            
        }
    }
}

// Toggle light/dark mode

function toggleDark() {
    var element = document.body;
    element.classList.toggle("light-mode");
}