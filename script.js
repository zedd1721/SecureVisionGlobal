// function showSideBar(){
//     const sidebar = document.querySelector(".sidebar");
//     // sidebar.style.display = 'flex'
//     sidebar.style.right= "0px";
// }

// function hideSideBar(){
//     const sidebar = document.querySelector(".sidebar");
//     // sidebar.style.display = 'none';
//     sidebar.style.right= "-300px"
// }

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