/* header_성진영(시작) */
    
let headerz = document.querySelector('header'),
body = document.querySelector('body'),
botmenu = document.querySelector('.bottom_menu'),
menu = document.querySelectorAll('.bottom_menu .menu_list li'),
submenu = document.querySelectorAll('.bottom_menu .menu_list dl'),
header_Topsize = document.querySelector('.top_menu'),
headerTop = header_Topsize.offsetHeight,
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
    if(window.scrollY == 0){
        headerz.style.height = headerzTotal;
    }else{
        headerz.style.height = `${botmenu.offsetHeight + submenuHeight}px`;
    }
});
tem.addEventListener('mouseout',()=>{
    if(window.scrollY == 0){
        headerz.style.height = `${headerHeight}px`;
    }else{
        headerz.style.height = `${botmenu.offsetHeight}px`;
    }
});	
});

window.addEventListener('scroll',()=>{
if(window.scrollY > headerTop){
    body.classList.add('sticky');
    headerz.style.height = `${botmenu.offsetHeight}px`;
}else{
    body.classList.remove('sticky');
    headerz.style.height = `${headerHeight}px`;
    
}
});

/* header_성진영(종료) */