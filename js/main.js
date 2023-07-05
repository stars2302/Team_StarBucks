//a태그 클릭 방지
let aTag = document.getElementsByTagName('a');
for(let a of aTag){
  a.addEventListener('click',(e)=>{
    e.preventDefault();
  });
}



/* header_성진영(시작) */
let header = document.querySelector('.bottom_menu'),
headerMenu = document.querySelectorAll('.bottom_menu .menu_list li'),
headerSubmenu = document.querySelectorAll('.bottom_menu .menu_list dl'),
headerHeight = header.offsetHeight;
let headerBottomOST = header.offsetTop;
let headerSubmenuHeight = 0;

// dl 리스트를 아이템에 담고
headerSubmenu.forEach(item=>{
// 만약 dl높이가 0(서브메뉴높이)보다 크면
  if(item.offsetHeight > headerSubmenuHeight){
// 서브메뉴 높이는 dl 리스트의 높이
    headerSubmenuHeight = item.offsetHeight;
  }
});

// console.log(headerSubmenuHeight);
// header총값 = 바텀메뉴OST + dl메뉴크기 + 45px
let headerTotal = `${headerHeight + headerSubmenuHeight + 45}px`;

//바텀메뉴에 마우스를 올리면 할일,일어날 일
headerMenu.forEach(tem=>{
  tem.addEventListener('mouseover',()=>{
    //css 헤더의 높이가 header총값으로 변경
      header.style.height = headerTotal;
  });
    //마우스가 나가면 바텀메뉴OST로 돌아옴
  tem.addEventListener('mouseout',()=>{
      header.style.height = `${headerHeight}px`;
  });	
});
//스크롤이 생기면 할일
window.addEventListener('scroll',()=>{
  //만약 스크롤양이 헤더 높이보다 크면 header 클래스에 sticky 추가
  if(window.scrollY > headerBottomOST){
      header.classList.add('sticky');
  //아니라면header 클래스에 sticky 삭제
  }else{
      header.classList.remove('sticky');
  }
});
/* header_성진영(종료) */



/* header modal_나서영(시작) */
let modal_wrapper = document.querySelector('header .modal_wrap');
let modal_loginForm = modal_wrapper.querySelector('.login_form');
let modal_loginInput = modal_loginForm.querySelectorAll('.field input');
let modal_loginFeedback = modal_loginForm.querySelector('.login_func .feedback');
let header_loginBtn = document.querySelector('header .right .login_btn');
let modal_closeBtn = modal_wrapper.querySelector('.close_btn');


//header의 로그인버튼은 클릭하면
header_loginBtn.addEventListener('click',()=>{
  //modal에 클래스 show 추가해서 모달 열기
  modal_wrapper.classList.add('show');
});

//모달의 close button을 클릭하면
modal_closeBtn.addEventListener('click',()=>{
  //modal에 클래스 show 제거해서 모달 닫기
  modal_wrapper.classList.remove('show');
});



//로그인 폼에 전송이벤트가 일어나면
modal_loginForm.addEventListener('submit',(e)=>{
  //전송기능을 막고
  e.preventDefault();


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
  img.addEventListener('click',(e)=>{
    let targetIdx = idx+1;
    //이미지 바꾸는 함수 실행
    changeImg(sec1_bigItemImg,targetIdx);

    //큰 이미지의 alt값에 해당 음료 이름 넣기
    let itemTitle = e.currentTarget.querySelector('h3').innerText;
    sec1_bigItemImg.setAttribute('alt',itemTitle)
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
    nextBtn.addEventListener('click',()=>{
      if(currentSlideIdx < slideCount-slidePerView){
        moveSlide(currentSlideIdx + 3);
      }
    });

    prevBtn.addEventListener('click',()=>{
      if(currentSlideIdx > 0){
        moveSlide(currentSlideIdx - 3);
      }
    });
/* sec2 bestSlide_최성희(종료) */



/* sec3 video_나서영(시작) */
let sec3_banner = document.querySelector('.sec3 .container');
let sec3_modal = document.querySelector('.sec3 .modal_wrap');

//sec3 banner클릭하면 modal의 visible클래스를 추가하여 나타나기
sec3_banner.addEventListener('click',()=>{
  sec3_modal.classList.add('visible');
});

//modal 아무곳이나 클릭하면 visible클래스를 제거하여 숨기기
sec3_modal.addEventListener('click',()=>{
  sec3_modal.classList.remove('visible');
});
/* sec3 video_나서영(종료) */



/* sec4 promotion_천혜영(시작) */
let sec4_promotion = document.querySelector('.sec4 .promotion'),
    sec4_event = sec4_promotion.querySelectorAll('div[class^=event]');

sec4_event.forEach(item=>{
  item.addEventListener('mouseenter',()=>{
    sec4_promotion.classList.add('active');
  });
  item.addEventListener('mouseleave',()=>{
    sec4_promotion.classList.remove('active');
  });
})
/* sec4 promotion_천혜영(종료) */



/* sec5 store_최성희(시작) */  
let targetLink = document.querySelectorAll('.sec5 .tab_menu a'),
    tabContent = document.querySelectorAll('.sec5 #tab_content > div'),
    targetImg = document.querySelector('.sec5 .sec5wrap #tab_content');

for(let i = 0; i <targetLink.length; i++){
  targetLink[i].addEventListener('click',(e)=>{//a태그들마다 클릭하면 할 일
    for( let k = 0; k<targetLink.length; k++){
      targetLink[k].classList.remove('active');//클래스명삭제
      e.target.classList.add('active');//추가
    }
  }); 
}

targetLink.forEach((item,idx)=>{//제목을 클릭하면
  item.addEventListener('click',(e)=>{//모든 이미지들을 숨기고
    tabContent.forEach((tabImg)=>{
      tabImg.classList.add('hide');
    });

    setTimeout(()=>{//잠깐의 시간 후에 index에 해당하는 이미지 나타나기
      tabContent[idx].classList.remove('hide');
    },30);
  });
});
/* sec5 store_최성희(종료) */



/* sec7 notice_천혜영(시작) */  
//변수 선언
let sec7_container = document.querySelector('.notice_slide'), //ul
    sec7_slides = sec7_container.querySelectorAll('li'), //각 슬라이드
    sec7_count = sec7_slides.length, //슬라이드 갯수
    sec7_height = 60, //움직일 높이
    sec7_idx = 0;

//마지막 슬라이드 복제 함수
function sec7_clone(){
  let sec7_cloneLast = sec7_container.lastElementChild.cloneNode(true);
  sec7_container.insertBefore(sec7_cloneLast, sec7_container.firstElementChild);
} 
sec7_clone();

//복제된 슬라이드를 포함한 새로운 슬라이드 변수
let sec7_newSlides = document.querySelectorAll(".notice_slide li"),
    sec7_countClone = sec7_newSlides.length;

//공지사항 슬라이드 이동함수
function sec7_move(num){
  sec7_container.style.top = `${-num*(sec7_height)}px`;
  sec7_container.style.transition = `${0.5}s ease-out`;
  sec7_idx = num;
  // console.log(sec7_idx);
  //마지막 슬라이드 일때
  if(sec7_idx === sec7_countClone - 1){
    //0.5초동안 복제한 첫번째에서 진짜 첫번째 위치로 이동
    setTimeout(()=>{
      sec7_container.style.top = "0px";
      sec7_container.style.transition = `${0}s ease-out`;
    }, 500);
    sec7_idx = 0;
  }
}
sec7_move(0);

//공지사항 자동 슬라이드
function sec7_auto(){
  sec7_timer = setInterval(()=>{
    let nextIdx = (sec7_idx + 1) % sec7_countClone;
    sec7_move(nextIdx);
  },3000);
}
sec7_auto();

//슬라이드에 마우스 있을때/없을때 작동
sec7_container.addEventListener('mouseover',()=>{
  clearInterval(sec7_timer);
});
sec7_container.addEventListener('mouseout',()=>{
  sec7_auto();
});
/* sec7 notice_천혜영(종료) */



/* top button_천혜영(시작) */
let topBtn = document.querySelector('.top_button'),
    topBtnOffset = document.querySelector('.sec2').offsetTop,
    topScroll = 0;

window.addEventListener('scroll',()=>{
  topScroll = window.scrollY; 
  if(topScroll > topBtnOffset - 60){
    topBtn.classList.add('active');
  } else{
    topBtn.classList.remove('active');
  }
});

topBtn.addEventListener('click',()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
});
/* top button_천혜영(종료) */



/* popup */
let popup = document.querySelector('.popup');
let popup_closeBtn = popup.querySelector('#close');
let popup_input = popup.querySelector('#daycheck');

popup.querySelector('.git').addEventListener('click',()=>{
  window.open('https://github.com/teastz/Team_StarBucks', '_blank');
});

// setCookie('starbucks','popup',1)
//쿠키 만들기
//name - 쿠키이름 / value - 쿠키값 / day - 쿠키기한
function setCookie(name, value, day){
  //day - 오늘날짜부터 정해진 기한까지 설정
  let date = new Date();
  date.setDate(date.getDate() + day);
  
  document.cookie = `${name}=${value};expires= ${date.toUTCString()}`;
}//setCookie func


//쿠키 있는지 확인해서 popup 보일지 결정
function cookieCheck(name){
  //존재하는 쿠키들을 배열로 만들기
  let cookieArr = document.cookie.split(';');
  let visited = false;

  //쿠키 배열 중
  for(let cookie of cookieArr){
    //지정한 쿠키가 있으면
    if(cookie.search(name) > -1){
      //visited를 true로 변경하기(+ dialog 숨기기)
      visited = true;
      break;
    }
  }

  //만약 visited의 값이 false면 dialog가 보인다
  if(!visited){
    popup.setAttribute('open','');
  }

}//cookieCheck func
cookieCheck('starbucks');


//close클릭하면
popup_closeBtn.addEventListener('click',()=>{
  //'오늘안보기'의 체크 유무에 상관없이 팝업을 닫는다
  popup.removeAttribute('open');

  //만약 '오늘안보기'에 체크 되어있다면, 쿠키만들고(기한 1일) 아니면 제거
  if(popup_input.checked){
    setCookie('starbucks','popup',1)
  } else{
    setCookie('starbucks','popup',-1)
  }
});//closeBtn click
/* popup */