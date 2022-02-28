const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('nav-menu');

menu.addEventListener('click',()=>{
    menu.style.display = 'none';
    closeBtn.style.display = "block";
    nav.style.display = "flex";
    nav.style.left = "0";
})


closeBtn.addEventListener('click',()=>{
    closeBtn.style.display = 'none';
    menu.style.display = 'block';
    nav.style.left = "100%";
})
