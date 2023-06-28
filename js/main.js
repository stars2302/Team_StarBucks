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