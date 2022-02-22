/*---Menu Show Y Hidden---*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*---Menu Show---*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*---Menu Hidden---*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*---Remove Menu Mobile---*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav-link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
 navLink.forEach(n => n.addEventListener('click', linkAction))   


/*---Qualification Tabs---*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*---Scroll Sections Active Area---*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*---Change Background Header---*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*---Show Scroll Up---*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*---Dark and Light Themes---*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =  () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*---Scroll Reveal Animation---*/ 
const sr = ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 50,
    viewFactor: 0.3,
    mobile: false,
    desktop: true,
    reset: false
})



sr.reveal('.home__data', { origin: 'top' });
sr.reveal('.home__scroll', { origin: 'left' });
sr.reveal('.home__social', { origin: 'bottom' });
sr.reveal('.home__img', { origin: 'right' });

sr.reveal('.about__title', { origin: 'top' });
sr.reveal('.about__subtitle', { origin: 'top' });
sr.reveal('.about__description', { origin: 'right' });
sr.reveal('.about__img', { origin: 'left' })
sr.reveal('.about__buttons', { origin: 'bottom' })

sr.reveal('.skills', { origin: 'top' });
sr.reveal('.skillcontent1', { origin: 'left' });
sr.reveal('.skillcontent2', { origin: 'right' });

sr.reveal('.qulificationsTitle', { origin: 'top' });
sr.reveal('.qulificationsSubtitle', { origin: 'top' });
sr.reveal('.qualification__container', { origin: 'bottom' });

sr.reveal('.projectTitle', { origin: 'top' });
sr.reveal('.projectSubTitle', { origin: 'top' });
sr.reveal('.card1', { origin: 'left' });
sr.reveal('.card2', { origin: 'bottom' });
sr.reveal('.card3', { origin: 'right' });
sr.reveal('.card4', { origin: 'bottom' });

