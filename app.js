let b = 5;

a = 5
a = 'привет'

console.log(a);





function sum() {
    console.log('Здесь должен быть вывод суммы')
}

sum(); /* что бы функция отработала */
sum();
sum();
sum();



/* console.dir(nav.firstElementChild); */
/* dir для просмотра содержимого */
/* console.log(nav.firstElementChild); */

/* событие реагирующе на клик по элементу 'NAV' >>> */
// nav.addEventListener('click', function () {
//     console.log('Мы кликнули на объект nav');
// } )

/* для константы обязательно сразу присваевать значение */
const nav = document.querySelector('.navbar-nav');
const navImg = document.querySelector('.navbar-brand__img');
const links = document.querySelectorAll('.nav__link');


for (let link of links) {
    link.addEventListener('click', () => {
        link.c
    })
}


window.addEventListener('scroll', function () {
    // console.log('Мы скролллим');
    let scrollPos = window.scrollY; /* выражение */
    console.log(scrollPos);

    if (scrollPos > 1486) {
        navImg.classList.add('hidden')
        nav.classList.add('navbar-nav__activ_bg')
    }
    else {
        navImg.classList.remove('hidden')
        nav.classList.remove('navbar-nav__activ_bg')
    }

    if (scrollPos > 1671 && scrollPos < 2170 ) {
        links[1].classList.add('active_link')
    }
    else {
        links[1].classList.remove('active_link')
    }
} )



