let sec1_imgs = document.querySelectorAll('.sec1 .items li ');
let sec1_bigItemImg = document.querySelector('.sec1 .big_item img');
let sec1_bigItem = document.querySelector('.sec1 .big_item');


sec1_imgs.forEach((img,idx)=>{
  img.addEventListener('click',()=>{
    let targetIdx = idx+1;
    sec1_bigItemImg.setAttribute('src',`img/sec1_item${targetIdx}_big.png`);
    sec1_bigItem.classList.add("anime");
    // sec1_bigItem.classList.remove("anime");
    // 수업시간에 했던 shink헤더 참고해보기
  });
}); 