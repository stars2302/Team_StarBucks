/* sec5 store_최성희(시작) */  
let targetLink =document.querySelectorAll('.sec5 .tab_menu a');
let tabContent = document.querySelectorAll('.sec5 #tab_content > div');
//a태그들마다 클릭하면 할 일
for(let i = 0; i <targetLink.length; i++){

  targetLink[i].addEventListener('click',(e)=>{
    e.preventDefault();//링크 안먹게
    let orgTarget = e.target.getAttribute('href');

    let tabTarget = orgTarget.replace('#','');

    for(let x = 0; x < tabContent.length ; x++){
      tabContent[x].style.display = 'none';
    }

    document.getElementById(tabTarget).style.display = "block";
  }); 
}
document.getElementById('tabs1').style.display = "block";
/* sec5 store_최성희(종료) */