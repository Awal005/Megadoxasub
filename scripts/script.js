arrow1 = document.querySelector("#faq-arrow1")
answer1 = document.querySelector(".hidden-answer1")

arrow2 = document.querySelector("#faq-arrow2")
answer2 = document.querySelector(".hidden-answer2")

arrow3 = document.querySelector("#faq-arrow3")
answer3 = document.querySelector(".hidden-answer3")

arrow4 = document.querySelector("#faq-arrow4")
answer4 = document.querySelector(".hidden-answer4")

arrow5 = document.querySelector("#faq-arrow5")
answer5 = document.querySelector(".hidden-answer5")



arrow1.addEventListener("click", ()=>{
    if (answer1.style.display == "block") {
        arrow1.style.transform = "rotate(0deg)"
        answer1.style.display = "none"
    } else {
        arrow1.style.transform = "rotate(180deg)"
        answer1.style.display = "block"
    }
})

arrow2.addEventListener("click", ()=>{
    if (answer2.style.display == "block") {
        arrow2.style.transform = "rotate(0deg)"
        answer2.style.display = "none"
    } else {
        arrow2.style.transform = "rotate(180deg)"
        answer2.style.display = "block"
    }
})

arrow3.addEventListener("click", ()=>{
    if (answer3.style.display == "block") {
        arrow3.style.transform = "rotate(0deg)"
        answer3.style.display = "none"
    } else {
        arrow3.style.transform = "rotate(180deg)"
        answer3.style.display = "block"
    }
})

arrow4.addEventListener("click", ()=>{
    if (answer4.style.display == "block") {
        arrow4.style.transform = "rotate(0deg)"
        answer4.style.display = "none"
    } else {
        arrow4.style.transform = "rotate(180deg)"
        answer4.style.display = "block"
    }
})

arrow5.addEventListener("click", ()=>{
    if (answer5.style.display == "block") {
        arrow5.style.transform = "rotate(0deg)"
        answer5.style.display = "none"
    } else {
        arrow5.style.transform = "rotate(180deg)"
        answer5.style.display = "block"
    }
})




































hamburger = document.querySelector(".hamburger")
hamburger_dropdown = document.querySelector(".hamburger-dropdown")

hamburger.addEventListener("click", ()=>{
    if (hamburger_dropdown.style.display == "grid") {
        hamburger_dropdown.style.display = "none"
    } else {
        hamburger_dropdown.style.display = "grid"
    }
})