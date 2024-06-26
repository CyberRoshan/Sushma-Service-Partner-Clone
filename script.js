// ! Position Button & Enquire Form Start
let enquireBtn=document.querySelector("#enquireBtn")
let enquireForm=document.querySelector("#enquireForm")
let closeEnquireForm=document.querySelector(".fa-x")

enquireBtn.addEventListener("click", ()=>{
    enquireForm.style.top="50%"
})

closeEnquireForm.addEventListener("click",()=>{
    enquireForm.style.top="-100%"
})
// ! Position Button & Enquire Form End
// ! Position Bar Slider Start
let Bars=document.querySelector(".fa-bars")
let mainSlider=document.querySelector(".main-slider")
let closeSliderBtn=document.querySelector(".slider-head>.fa-x")

Bars.addEventListener("click", ()=>{
    mainSlider.style.opacity="1";
    mainSlider.style.visibility="visible"
    mainSlider.style.left="0%"
})

closeSliderBtn.addEventListener("click", ()=>{
    mainSlider.style.left="-100%"
})
// ! Position Bar Slider End
// ! FAQ's Section Start
let faqContainer=document.querySelector(".faq-container")
let paragraph=document.querySelector(".faq-items>p")
let spanPlusMinus=document.querySelector(".faq-items>h3>span")
faqContainer.addEventListener("click",(event)=>{
    if(event.target.tagName=="H3"){
        event.target.nextElementSibling.classList.toggle("paraClose")
        if(spanPlusMinus.innerHTML=="+"){
            spanPlusMinus.innerHTML="-"
        }
        else{
            spanPlusMinus.innerHTML="+"
        }
    }
})
// ! FAQ's Section End