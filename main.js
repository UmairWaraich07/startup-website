const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const navbar = document.getElementById('toggle');

openBtn.addEventListener('click',()=> {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navbar.classList.toggle('toggle');
})

closeBtn.addEventListener('click', ()=> {
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navbar.classList.toggle('toggle');
})