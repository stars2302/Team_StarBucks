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
