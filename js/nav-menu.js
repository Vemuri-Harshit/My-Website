const menuIcon = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation")
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', ()=>{
navbar.classList.toggle('change')
})

navigation.addEventListener('click', ()=>{
navbar.classList.toggle('change')
})