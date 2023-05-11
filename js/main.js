
/*-------------------navigation menu-------------------*/

(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
     navMenu.classList.add("open");
     bodyScrollingToggle();
    }
    function hideNavMenu(){
     navMenu.classList.remove("open");
     fadeOutEffect();
     bodyScrollingToggle();
    }
    function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
        document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
    }
    // attach an event handler to document
    document.addEventListener("click",(event) =>{
     if(event.target.classList.contains('link-item')){
        /* make sure event.target.hash has value befor overridding default behavior*/
         
        if(event.target.hash !==""){
            // prevent default anchor click behavior
            event.preventDefault();
            const hash = event.target.hash;
            // deactivate existing active 'section'
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");
            // activate new 'section'
            document.querySelector(hash).classList.add("active");
            document.querySelector(hash).classList.remove("hide");
            /* deactivate existing active navigation menu 'link-item' */
            navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navMenu.querySelector(".active").classList.remove("active","inner-shadow");
            /* if clicked 'link-item is contained withing the navigation menu'*/ 
            if(navMenu.classList.contains("open")){
              // activate new navigation menu 'link-item'
              event.target.classList.add("active","inner-shadow");
              event.target.classList.remove("outer-shadow","hover-in-shadow");
              // hide navigation menu 
              hideNavMenu();
            }
            else{
                let navItems = navMenu.querySelectorAll(".link-item");
                navItems.forEach((item) =>{
                    if(hash === item.hash){
                        // activate new navigation menu 'link-item'
                       item.classList.add("active","inner-shadow");
                       item.classList.remove("outer-shadow","hover-in-shadow");
                    }
                })
                fadeOutEffect();
            }
            // add hash (#) to url
            window.location.hash = hash;
        }
     }
       
    })
})();


/*------------ about section tabs -------------*/

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
       /* if event.target contains 'tab-item' class and not contains 
        'active' class */
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-traget");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // activate new 'tab-item'
            event.target.classList.add("active","outer-shadow");
            // deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })

})();

/*--------------------- testimimonial slider--------------------------*/

(() =>{
     const sliderContainer = document.querySelector(".testi-slider-container"),
     slides = sliderContainer.querySelectorAll(".testi-item");
     slideWidth = sliderContainer.offsetWidth;
     prevBtn = document.querySelector(".testi-slider-nav .prev"),
     nextBtn = document.querySelector(".testi-slider-nav .next");
     let slideIndex = 0;
     

     // set width of all sliders
      slides.forEach((slide) =>{
        slide.computedStyleMap.width = slideWidth + "px";
      })
     // set width of sliderContainer
     sliderContainer.style.width = slideWidth * slides.length + "px";

     nextBtn.addEventListener("click",() =>{
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slider();
     })
     
     prevBtn.addEventListener("click",() =>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider();
     })
     function slider(){
        sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
     }
     slider();
})();

/*-------------hide all section except active--------------*/ 

(() =>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();