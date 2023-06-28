let headerz = document.querySelector('.bottom_menu'),
menu = document.querySelectorAll('.bottom_menu .menu_list li'),
submenu = document.querySelectorAll('.bottom_menu .menu_list dl'),
headerHeight = headerz.offsetHeight;
let submenuHeight = 0;

submenu.forEach(item=>{
  if(item.offsetHeight > submenuHeight){
      submenuHeight = item.offsetHeight;
  }
});

console.log(submenuHeight);
let headerzTotal = `${headerHeight + submenuHeight}px`;

menu.forEach(tem=>{
  tem.addEventListener('mouseover',()=>{
      headerz.style.height = headerzTotal;
  });
  tem.addEventListener('mouseout',()=>{
      headerz.style.height = `${headerHeight}px`;
  });	
});

window.addEventListener('scroll',()=>{
  if(window.scrollY > headerHeight){
      headerz.classList.add('sticky');
  }else{
      headerz.classList.remove('sticky');
  }
});

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
