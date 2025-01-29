const btnel=document.querySelector('.btn');
const closeicon=document.querySelector('.close-icon');
const trailerContainerel=document.querySelector('.trailer-container');
btnel.addEventListener('click',()=>{
  trailerContainerel.classList.remove('active')
});
closeicon.addEventListener('click',()=>{
  trailerContainerel.classList.add('active');
});