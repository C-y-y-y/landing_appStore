const toggler = document.getElementById('toggler');
const nav = document.getElementById('nav');

window.addEventListener('resize',function(){
  if(window.innerWidth < 900) {
    toggler.addEventListener('click', () => {
      nav.classList.toggle('burger-menu__nav--active');
      toggler.classList.toggle('burger-menu--active');
    });
  }
});
