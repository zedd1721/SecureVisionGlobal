var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: true,
  });


const opensidebar = document.querySelector("#menu-btn")
const sidebar = document.querySelector('.sidebar')
opensidebar.addEventListener('click', function(){
    sidebar.style.right= "0px"
    // sidebar.style.display ='flex'
})
const closesidebar = document.querySelector('#hidesidebar')
closesidebar.addEventListener('click', function(){
    sidebar.style.right= "-100%"
})
