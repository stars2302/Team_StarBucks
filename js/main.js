/* header_성진영(시작) */
let headerz = document.querySelector('.bottom_menu'),
menu = document.querySelectorAll('.bottom_menu .menu_list li'),
submenu = document.querySelectorAll('.bottom_menu .menu_list dl'),
headerHeight = headerz.offsetHeight;
let bottomOST = headerz.offsetTop;
let submenuHeight = 0;

submenu.forEach(item=>{
  if(item.offsetHeight > submenuHeight){
      submenuHeight = item.offsetHeight;
  }
});

console.log(submenuHeight);
let headerzTotal = `${headerHeight + submenuHeight + 45}px`;

menu.forEach(tem=>{
  tem.addEventListener('mouseover',()=>{
      headerz.style.height = headerzTotal;
      // headerz.style.paddingBottom = '45px';
  });
  tem.addEventListener('mouseout',()=>{
      headerz.style.height = `${headerHeight}px`;
  });	
});

window.addEventListener('scroll',()=>{
  if(window.scrollY > bottomOST){
      headerz.classList.add('sticky');
  }else{
      headerz.classList.remove('sticky');
  }
});
/* header_성진영(종료) */


/* header modal_나서영(시작) */
let modal_loginForm = document.querySelector('header .modal_wrap .login_form');
let modal_loginInput = modal_loginForm.querySelectorAll('.field input');
let modal_loginFeedback = modal_loginForm.querySelector('.login_func .feedback');

//로그인 폼에 전송이벤트가 일어나면
modal_loginForm.addEventListener('submit',(e)=>{
  //전송기능을 막고
  e.preventDefault();
  console.log(e);


  let completed = 0;
  //전송실패 시
  for(let ip of modal_loginInput){
    //인풋에 값이 없으면
    if(!ip.value){

      //값이 없는 인풋에 포커스를 주고
      ip.focus();

      //피드백문구를 띄운다.
      modal_loginFeedback.style.display = 'block';

      return false;
      
      //모두 값이 있으면 completed를 1씩 올려서
    } else{
      ++completed
      console.log(completed);
    }
  }

  //전송성공 시
  if(completed == modal_loginInput.length){
    let text = '<h2 class="sub_tt title_pd font_gray">로그인에 성공했습니다!</h2>';
    modal_loginForm.querySelector('.inner_form').innerHTML = text;
    modal_loginForm.querySelector('h2').style.fontSize = '30px'
    modal_loginForm.querySelector('h2').style.lineHeight = '240px'
  }
});
/* header modal_나서영(종료) */


/* sec1 main_나서영(종료) */
let sec1_smallItem = document.querySelectorAll('.sec1 .items li ');
let sec1_bigItem = document.querySelector('.sec1 .big_item');
let sec1_bigItemImg = sec1_bigItem.querySelector('img');


//작은이미지를 클릭하면
sec1_smallItem.forEach((img,idx)=>{
  img.addEventListener('click',()=>{
    let targetIdx = idx+1;
    //이미지 바꾸는 함수 실행
    changeImg(sec1_bigItemImg,targetIdx);
  });//click
}); 

//모션주며 이미지 바꾸기
function changeImg(target,index){
  //일단 이미지 숨기고
  target.classList.add('hidden');
  
  //잠깐의 시간 후 이미지경로 바뀌면서 나타나면서 크기키우기
  setTimeout(()=>{
    target.setAttribute('src',`img/sec1_item${index}_big.png`);
    target.classList.remove('hidden');
    target.classList.add('active');
  },10);
  
  //크기 키우는 모션이 끝나면 ACTIVE 지우기
  setTimeout(()=>{
    target.classList.remove('active');
  },800);
}
/* sec1 main_나서영(종료) */  


/* sec2 bestSlide_최성희(시작) */  
let slideWrapper = document.querySelector('.sec2slide_wrap'),
    slideContainer = slideWrapper.querySelector('.slides'),
    slides = slideContainer.querySelectorAll('.slides li'),
    slideCount = slides.length,
    slidePerView = 3,
    slideWith = 360,
    slideMargin = 30,
    currentSlideIdx = 0;
    prevBtn = document.querySelector('.sec2prev'),
    nextBtn = document.querySelector('.sec2next');

    slides.forEach((slide,idx)=>{
      slide.style.left = `${idx*(slideWith+slideMargin)}px`
    })

    //슬라이드 이동함수
    function moveSlide(num){
      slideContainer.style.left = `${-num*(slideWith+slideMargin)}px`;
      currentSlideIdx = num;
    }
    moveSlide(0);//한번 움직인다
    //버튼 클릭하면 움직이기
    nextBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentSlideIdx < slideCount-slidePerView){
        moveSlide(currentSlideIdx + 3);
      }
    });

    prevBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      if(currentSlideIdx > 0){
        moveSlide(currentSlideIdx - 3);
      }
    });
/* sec2 bestSlide_최성희(종료) */

/* sec3 video_나서영(시작) */
let sec3_banner = document.querySelector('.sec3 .container');
let sec3_modal = document.querySelector('.sec3 .modal_wrap');


//sec3 banner클릭하면 modal의 visible클래스를 추가하여 나타나기
sec3_banner.addEventListener('click',(e)=>{
  e.preventDefault();
  sec3_modal.classList.add('visible');
});


//modal 아무곳이나 클릭하면 visible클래스를 제거하여 숨기기
sec3_modal.addEventListener('click',(e)=>{
  e.preventDefault();
  sec3_modal.classList.remove('visible');
});
/* sec3 video_나서영(종료) */

/* sec4 promotion_천혜영(시작) */
/* sec4 promotion_천혜영(종료) */

/* sec5 store_최성희(시작) */  
let targetLink = document.querySelectorAll('.sec5 .tab_menu a');
let tabContent = document.querySelectorAll('.sec5 #tab_content > div');
for(let i = 0; i <targetLink.length; i++){
  targetLink[i].addEventListener('click',(e)=>{//a태그들마다 클릭하면 할 일
    e.preventDefault();//링크 안먹게 기본 속성 막기
    let orgTarget = e.target.getAttribute('href');
    let tabTarget = orgTarget.replace('#','');//#있는거를 없앰

    for(let x = 0; x < tabContent.length ; x++){
      tabContent[x].style.display = 'none';//div 다 안보이게
    }

    document.getElementById(tabTarget).style.display = "block";//클릭하면보임
    
    for( let j = 0; j<targetLink.length; j++){
      targetLink[j].classList.remove('active');//클래스명삭제
      e.target.classList.add('active');//추가
    }
  }); 
}
document.getElementById('tabs1').style.display = "block";//열자마자 첫번째만 보이게
/* sec5 store_최성희(종료) */




/* sec7 notice_천혜영(시작) */  
//변수 선언
let sec7_container = document.querySelector('.notice_slide'), //ul
    sec7_slides = sec7_container.querySelectorAll('li') //각 슬라이드
    sec7_count = sec7_slides.length, //슬라이드 갯수
    sec7_height = 60 //움직일 높이
    sec7_idx = 0;
console.log();

//공지사항 슬라이드 이동함수
function sec7_move(num){
  sec7_container.style.top = `${-num*(sec7_height)}px`;
  sec7_idx = num;
  console.log(sec7_idx);
}
sec7_move(0);

//공지사항 자동 슬라이드
function sec7_auto(){
  timer = setInterval(()=>{
    let nextIdx = (sec7_idx + 1) % sec7_count;
    sec7_move(nextIdx);
  },3000);
}
sec7_auto();

/* sec7 notice_천혜영(종료) */

/* top button_천혜영(시작) */
let topBtn = document.querySelector('.top_button'),
    topScroll = 0;

window.addEventListener('scroll',()=>{
  topScroll = window.scrollY; 
  if(topScroll > 800){
    topBtn.classList.add('active');
  } else{
    topBtn.classList.remove('active');
  }
});

topBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });

});
/* top button_천혜영(종료) */
