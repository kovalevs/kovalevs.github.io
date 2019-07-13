const burger = document.getElementById('header-burger-target');
let isOpen = true;
burger.onclick = function(){
  if(isOpen){
    burger.classList.remove('header-burger-closed');
    burger.classList.add('header-burger-open');
    isOpen = false;
  } else{
    burger.classList.remove('header-burger-open');
    burger.classList.add('header-burger-closed');
    isOpen = true;
  }
}
