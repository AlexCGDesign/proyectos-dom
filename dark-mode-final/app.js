
document.addEventListener('DOMContentLoaded', ()=>{

  const swictherTheme = document.querySelector('.main__check');
  const root = document.documentElement;

  if(root.getAttribute('data-theme') === 'dark'){
    swictherTheme.checked = true;
  }

  swictherTheme.addEventListener('click', toggleTheme);

  function toggleTheme(){
    const setTheme = swictherTheme.checked ? 'dark' : 'light';

    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
  }

});