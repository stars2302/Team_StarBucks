document.addEventListener('DOMContentLoaded',function(){



let mainMenu = document.querySelectorAll('.bottom_list > .menu_list > li'),
    subMenu = document.querySelectorAll('.bottom_list menu_list dl'),
    bottom = document.querySelector('.bottom_menu'),
    bottomTop = bottom.offsetTop,
    bottomHeight = bottom.offsetHeight;
let subMenuHeight = 0;

window.addEventListener('scroll',()=>{
    if(window.scrollY > bottomTop){
        bottom.classList.add('active');
    }else{
        bottom.classList.remove('active');
    }
});

mainMenu.addEventListener('mouseover',()=>{
    bottom.sty
})






subMenu.forEach(item=>{
    if(item.offsetHeight > subMenuHeight){
        subMenuHeight = item.offsetHeight;
    }
    console.log(subMenuHeight);
});
let totalHeight = `${bottomHeight + subMenuHeight + 60}px`;

mainMenu.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        bottom.style.height = totalHeight;
    });
    item.addEventListener('mouseout',()=>{
        bottom.style.height = `${bottomHeight}px`;
    });
});


});