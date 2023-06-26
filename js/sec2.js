let slideWrapper = document.querySelector('.slide_wrapper'),
    slideContainer = document.querySelector('.slides'),
    slides = slideContainer.querySelectorAll('.ice'),
    tables = slideContainer.querySelectorAll('.sce2_table'),
    icetexts = slideContainer.querySelectorAll('.icetext'),
    slideCount = slides.length,
    slidePerView = 3,
    slideWith = 360,
    slideMargin = 30,
    currentSlideIdx = 0;
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    slides.forEach((slide,idx)=>{
      slide.style.left = `${idx*(slideWith+slideMargin)}px`
    })
    tables.forEach((table,idx)=>{
      table.style.left = `${idx*(slideWith+slideMargin)}px`
    })
    icetexts.forEach((icetext,idx)=>{
      icetext.style.left = `${idx*(slideWith+slideMargin)}px`
    })

    //슬라이드 이동함수
    function moveSlide(num){
      slideContainer.style.left = `${-num*(slideWith+slideMargin)}px`;
      currentSlideIdx = num;
    }

    //버튼 클릭하면 움직이기
    nextBtn.addEventListener('click',()=>{
      if(currentSlideIdx < slideCount -slidePerView){
        moveSlide(currentSlideIdx + 3);
      }
    });
    nextBtn.addEventListener('click',()=>{
      if(currentSlideIdx < slideCount-slidePerView){
        moveSlide(currentSlideIdx + 1);
      }
    });

    prevBtn.addEventListener('click',()=>{
      if(currentSlideIdx > 0){
        moveSlide(currentSlideIdx - 3);
      }
    });