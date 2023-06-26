let sec1_smallItem = document.querySelectorAll('.sec1 .items li ');
let sec1_bigItem = document.querySelector('.sec1 .big_item');
let sec1_bigItemImg = sec1_bigItem.querySelector('img');


sec1_smallItem.forEach((img,idx)=>{
  img.addEventListener('click',()=>{
    let targetIdx = idx+1;
    
    debounce(changeImg(sec1_bigItemImg,targetIdx),800);
    ;
  });//click
}); 

//모션주며 이미지 바꾸기
function changeImg(target,index){
  target.classList.add('hidden');
  //
  setTimeout(()=>{
    target.setAttribute('src',`img/sec1_item${index}_big.png`);
    target.classList.remove('hidden');
    target.classList.add('active');
  },10);
  
  setTimeout(()=>{
    target.classList.remove('active');
  },800);
}


//모션이 완료되기 전에 클릭하지 못하도록 막기
function debounce(callback, time){
  let slideTrigger = true;
  return ()=>{
    if(slideTrigger){
      callback();
      slideTrigger = false;
      setTimeout(()=>{
        slideTrigger= true;
      },time)
    }
  }
}