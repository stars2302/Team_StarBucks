document.addEventListener('DOMContentLoaded',function(){

    let mainMenu = document.querySelectorAll('.bottom_menu > .menu_list > li'),
        subMenu = document.querySelectorAll('.bottom_menu .menu_list li'),
        bottom = document.querySelector('.bottom_menu'),
        bottomHeight = bottom.offsetHeight;
    
    let subMenuHeight = 0;
        subMenu.forEach(item=>{
            if(item.offsetHeight > subMenuHeight){
                subMenuHeight = item.offsetHeight;
            }
        });
    let bottomTotalHeight = `${bottomHeight + subMenuHeight + 30}px`;
    
    mainMenu.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            bottom.style.height = bottomTotalHeight;
        });
        item.addEventListener('mouseout',()=>{
            bottom.style.height = `${bottomHeight}px`;
        });
        });
    });