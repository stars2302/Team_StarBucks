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