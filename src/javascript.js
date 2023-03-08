import { openArticles } from "./templates";


export function animateElementOnScroll(id) {
    const element = id
    const startPos = { x: 0, y: 0 }; // set the initial position of the element
    const endPos = { x: 0, y: 300 }; // set the end position of the element
    let hasMoved = false;
  
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 3200 && !hasMoved) {
        hasMoved = true;
        element.style.transition = 'transform 0.5s ease-out';
        element.style.transform = `translate(${endPos.x}px, ${endPos.y}px)`;
      } else if (scrollTop <= 3200 && hasMoved) {
        hasMoved = false;
        element.style.transition = 'transform 0.5s ease-out';
        element.style.transform = `translate(${startPos.x}px, ${startPos.y}px)`;
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  }


export function readMoreOPT(arg,arg1){
    if(arg.textContent == 'read more...'){
        arg.textContent = arg1
        arg.style.color = '#203334'
    }else{
        arg.textContent = 'read more...'
    }
   

}
export function setDate() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 5) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 268;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
export function fixedNavBar(nav,logo,navLinks,alinks) {
    window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let navBars = nav.querySelector('#burgerBtn').querySelectorAll('.line')
        if (window.innerWidth < 768) {
            if (scrollTop > 500) {
                nav.style.display = 'flex'
                nav.style.backgroundColor = '#d4d5d9';
                navBars.forEach(x => x.style.backgroundColor = "#203334")
                logo.style.color ='#203334'
                navLinks.style.backgroundColor ='#d4d5d9'
                alinks.forEach(x => {
                    x.style.color = '#203334'
                })
            } else if (scrollTop <= 500) {
                nav.style.display = 'flex'
                alinks.forEach(x => {
                    x.style.color = '#d4d5d9'
                })
                navLinks.style.backgroundColor ='#203334'
                logo.style.color ='#d4d5d9'
                nav.style.backgroundColor = 'transparent'
                navBars.forEach(x => x.style.backgroundColor = "#d4d5d9")
                
            }
        } else {
            if (scrollTop > 800) {
                nav.style.backgroundColor = '#d4d5d9'; 
                logo.style.color = '#203334'
                alinks.forEach(x => {
                    x.style.color = '#203334'
                })
            } else if (scrollTop <= 700) {
            
                nav.style.backgroundColor = 'transparent'
               
                logo.style.color = '#d4d5d9'
                alinks.forEach(x => {
                    x.style.color = '#fff'
                })
            }
        }

    }
}
/*  Sponsors scrolling bottom page!
function animateSponsors() {

    let imgArr = ['../img/sponsor2.png', '../img/sponsor.png', '../img/sponsor3.png', '../img/sponsor1.png', ]
    let classArr = ['firstIcon', 'secondIcon', 'thirdIcon', 'fourthIcon']
    let sposnorsContainer = document.querySelector('.slideshow-container')

    for (let i = 0; i < imgArr.length; i++) {
        let imgContainer = createElement('div', sposnorsContainer, '', '', '', ['mySlides', classArr[i]], '', '');
        createElement('img', imgContainer, '', ['src', imgArr[i]], '', '', '', '');
    }
}
animateSponsors()
*/
let watchess = {
    1: {
        img: "../img/watch2.png",
        donated: 'Red Cross DK',
        sales: '1.000 kr.',
        project: ['../img/copdk.png', "../img/kclogo1.png"],
        month: 'January',

    },
    2: {
        img: "../img/watch33.png",
        donated: "EU for Turkey",
        sales: "250 kr.",
        project: ['../img/copdk.png', "../img/kclogo1.png"],
        month: 'February',

    },
    3: {
        img: "../img/watch2.png",
        donated: "EU for Turkey",
        sales: "350 kr.",
        project: ['../img/copdk.png', "../img/kclogo1.png"],
        month: 'March',

    },
    4: {
        img: "../img/MontlyWatch.png",
        donated: "EU for Turkey",
        sales: "5 kr.",
        project: ['../img/copdk.png', "../img/kclogo1.png"],
        month: 'April',

    },
}
createMarketPlace()
export function buyBtnAction() {
    let buyBtn = document.querySelector('.buyNow');
    buyBtn.addEventListener('click', () => {
        window.open('https://buy.stripe.com/7sI6rI5ss1mEboQdQR')
    })
}

function createMarketPlace() {
    let marketPlace = document.getElementById('market');
    Object.keys(watchess).forEach(function (key) {

        let watchContainer = createElement('div', marketPlace, '', '', ['click', openArticles], ['articleContainer'], '', '')
        createElement('h5', watchContainer, '', '', '', ['monthName'], '', watchess[key].month)
        let imgContainer = createElement('div', watchContainer, '', '', '', ['articleIMGContainer'], '', '')
        createElement('img', imgContainer, '', ['src', watchess[key].img], '', ['articleImg'], '', '')
        let contentContainer = createElement('div', watchContainer, '', '', '', ['textContent'], '', '')
        //createElement('div', contentContainer, '', '', '', ['overlayContentContainer'], '', '')
        let donateContainer = createElement('div', contentContainer, '', '', '', ['namecontainer'], '', '');
        createElement('p', donateContainer, '', '', '', '', '', 'Conscience')
        createElement('div', contentContainer, '', '', '', ['articlePrice'], '', watchess[key].sales);


        let unitContainer = createElement('div', contentContainer, '', '', '', ['unitContainer'], '', '');
        createElement('p', unitContainer, '', '', '', ['articleDonation'], '', '- Doneret til -');
        createElement('img', contentContainer, '', ['src', watchess[key].project[0]], '', ['priviusDonationIMg'], '', '')
        createElement('img', contentContainer, '', ['src', watchess[key].project[1]], '', ['priviusDonationIMg'], '', '')

        let children = contentContainer.children;

        for (let i = 0; i < children.length; i++) {
            let classLists = children[i].classList;
            if (!classLists.contains('overlayContentContainer')) {
                children[i].style.position = 'relative';
                children[i].style.zIndex = 22;
            }
        }
    })
}
export function buyNow(e) {
    if (e.target.textContent !== 'Sold') {
        let navBarSales = document.getElementById('navIcons');
        let lastChild = navBarSales.lastElementChild;
        lastChild.textContent++
    }
}
export function openBurgerMenu() {
    let navContainer = document.getElementById('navContainer')
    let burgerBtn = document.getElementById('burgerBtn');
    // Get Nav Linkss and close them after Click
    burgerBtn.classList.toggle('change');

    let navlinks = document.querySelectorAll('.navLinks');
    navlinks.forEach(x => {
        x.addEventListener('click', openBurgerMenu);
    })

    if (navContainer.classList.contains('hide')) {
        navContainer.classList.remove('hide');
        navContainer.classList.add('show');

    } else {
        navContainer.classList.add('hide');
        navContainer.classList.remove('show')
    }
}

export function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context, ) {

    let container = document.createElement(type);
    let [href, path] = attributeArr;

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    if (href !== undefined && path !== undefined) {
        container.setAttribute(href, path)
    }
    while (classArr.length > 0 && classArr !== '') {
        container.classList.add(classArr.shift())
    }

    if (eventListenerArr !== '') {
        let event = eventListenerArr.shift();

        while (eventListenerArr.length > 0) {
            container.addEventListener(event, eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }

    if (action == 'push') {
        parent.push(container)
    } else {
        parent.appendChild(container)
    }

    return container
}

export function playVideo() {
    let video = document.getElementById('videoHeader');

    video.autoplay = true
    setInterval(() => {
        video.currentTime = 0
    }, 8000)
}
