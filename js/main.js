/* sec7 notice_천혜영(시작) */  
//변수 선언
let sec7_container = document.querySelector('.notice_slide'), //ul
    sec7_slides = sec7_container.querySelectorAll('li') //각 슬라이드
    sec7_count = sec7_slides.length, //슬라이드 갯수
    sec7_height = 60 //움직일 높이
    sec7_idx = 0;
console.log();

//공지사항 슬라이드 이동함수
// if(sec7_count > 1){
//   sec7_slides.forEach((item,idx)=>{
//     item.style.height - `${idx*60}px`;
//   })
// }

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