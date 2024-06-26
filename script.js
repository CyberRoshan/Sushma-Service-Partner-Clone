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