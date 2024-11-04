
let taskIcon = document.querySelector('.task-bar');
let mobile = document.querySelector('.mobile');
let menu = document.querySelector('.menu');



function showI() {
    let menuShow = document.querySelector('.show-menu .menu');
    menuShow.innerHTML = `
               <i></i>
               <i></i>
               <i></i>
               <i></i>
    `
}
function showIcon() {
    let menuShow = document.querySelector('.show-menu .menu');

    menuShow.innerHTML = `
                 <i class="fa-solid fa-music"></i>
                <i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-file"></i>
                <i class="fa-solid fa-gear"></i>
    `
    document.querySelectorAll('i').forEach((i) => {
        i.classList.add('color');
    });

}
let condition = 'show';

function showTaskBar() {
    menu.innerHTML = '';
    clearTimeout();
    taskIcon.classList.toggle('rotate');
    mobile.classList.toggle('show-menu');
    mobile.classList.toggle('hide-menu');

    if (condition == 'show') {

        setTimeout(() => {
            showI()
        }, 1200);

        setTimeout(() => {
            showIcon()
        }, 1500);
        condition = 'hide';
    } else {
        condition = 'show';
    }
}
