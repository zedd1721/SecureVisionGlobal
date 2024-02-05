var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: true,
  });

  const testimonial = document.querySelector('#testimonials');
  testimonial.addEventListener('click', ()=>{
      window.location.href = 'testimonial.html';
  })    

  const sidetesti = document.querySelector('#sidetesti');
  sidetesti.addEventListener('click', ()=>{
    window.location.href = 'testimonial.html';
    })

    const about = document.querySelector('#about');
    about.addEventListener('click', ()=>{
        window.location.href = 'about.html';
    })
    
    const sideabout = document.querySelector('#sideabout')
    sideabout.addEventListener('click', ()=>{
        window.location.href = 'about.html';
    })

    const contact = document.querySelector('#contact');
    contact.addEventListener('click', ()=>{
        window.location.href = 'contact.html';
    })    

    const sidecontact = document.querySelector('#sidecontact');
    sidecontact.addEventListener('click', ()=>{
        window.location.href = 'contact.html';
    }) 

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