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

