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






function fixedNavBar() {
    window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let element = document.getElementsByTagName('nav')[0];

        if (window.innerWidth < 768) {

            if (scrollTop > 100) {
                element.style.backgroundColor = '#d4d5d9';
            } else if (scrollTop < 100) {
                element.style.backgroundColor = 'transparent'
            }
        } else {
            if (scrollTop > 700) {
                element.style.backgroundColor = '#d4d5d9';
            } else if (scrollTop <= 700) {
                element.style.backgroundColor = 'transparent'
            }
        }
    }
}
fixedNavBar()



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

/*
const video = document.getElementById("videoHeader");
const gradient = document.createElement("div");
gradient.id = "gradient";
video.parentNode.insertBefore(gradient, video);

 */
export function buyBtnAction() {
    let buyBtn = document.querySelector('.buyNow');
    buyBtn.addEventListener('click', () => {
        window.open('https://buy.stripe.com/7sI6rI5ss1mEboQdQR')
    })
}

function createMarketPlace() {
    let marketPlace = document.getElementById('market');
    Object.keys(watchess).forEach(function (key) {

        let watchContainer = createElement('div', marketPlace, '', '', ['click', openArticle], ['articleContainer'], '', '')
        let imgContainer = createElement('div', watchContainer, '', '', '', ['articleIMGContainer'], '', '')
        createElement('h5', imgContainer, '', '', '', ['monthName'], '', watchess[key].month)
        createElement('img', imgContainer, '', ['src', watchess[key].img], '', ['articleImg'], '', '')
        let contentContainer = createElement('div', watchContainer, '', '', '', ['textContent'], '', '')
        createElement('div', contentContainer, '', '', '', ['overlayContentContainer'], '', '')
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

let child;
let body = document.getElementsByTagName('body')[0];

function openArticle() {
    if (!body.contains(child)) {
        let thingsProvided = ['Food, fuel, clean water and cash assistance to meet children and families most urgent needs.', 'Blankets, hygiene items, baby kits, trauma kits and bunker kits with toys and games to encourage play and learning.', 'Medical supplies and support to health teams and hospitals, including pre-positioned trauma kits.', 'Medical supplies and support to health teams and hospitals, including pre-positioned trauma kits.', 'Mental health support to children and their families, including individual and group therapy and social emotional learning curriculum.', 'Child protection services to ensure children and families remain together and separated children are reunited safely with their caregivers.']
        let imges = ['../img/water-drops.svg', '../img/boy-girl.svg', '../img/stethoscope.svg', '../img/lightbulb.svg', '../img/hand-shake.svg', '../img/girl-parent.svg']


        child = createElement('div', body, '', '', '', ['articlePage'], '');
        let closeBtn = createElement('div', child, 'closeBtn', '', ['click', closeArticle], '', '', '');
        createElement('div', closeBtn, '', '', '', ['line', 'lineLeft'], '', '')
        createElement('div', closeBtn, '', '', '', ['line', 'lineRight'], '', '')


        createElement('img', child, '', ['src', '../img/sponsor1.png'], '', ['partner'], '', '');
        let sectionText = createElement('div', child, '', '', '', ['aboutTheCause'], '', '');
        createElement('h1', sectionText, '', '', '', '', '', "What is Conscience's Response in Afghanistan?");
        createElement('p', sectionText, '', '', '', '', '', 'In Afghanistan, weve provided support to over 345,000 people, including nearly 173,000 children. Our teams our trained teams are working alongside local partners and the Ukraine government to provide lifesaving assistance, including the following: ')
        let howWeHelp = createElement('div', child, '', '', '', ['howWeHelp'], '', '');
        for (let i = 0; i < imges.length; i++) {
            let div = createElement('div', howWeHelp, '', '', '', ['imgAndText'], '', '')

            createElement('img', div, '', ['src', imges[i]], '', ['howWeHelpImg'], '', '');
            createElement('p', div, '', '', '', '', '', thingsProvided[i]);

        }
        createElement('h5', howWeHelp, '', '', '', '', '', 'we collect 40000kr');



    }
}

function closeArticle() {
    if (body.contains(child)) {
        child.remove()
    }
}

export function buyNow(e) {
    if (e.target.textContent !== 'Sold') {
        let navBarSales = document.getElementById('navIcons');
        let lastChild = navBarSales.lastElementChild;
        lastChild.textContent++
    }
}

function showInfo(e) {
    let content = e.target.nextElementSibling
    content.classList.toggle('hide')
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
    video.autoplay = true;
    video.play();
    setInterval(() => {
        video.currentTime = 0
    }, 8000)
}