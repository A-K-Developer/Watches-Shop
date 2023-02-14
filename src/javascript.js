let watchess = {
    1: {
        img: "./img/watch2.png",
        donated: 'Red Cross DK',
        sales: '1.000 kr.',
        project: ['./img/copdk.png', "./img/kclogo1.png"]

    },
    2: {
        img: "./img/watch33.png",
        donated: "EU for Turkey",
        sales: "250 kr.",
        project: ['./img/copdk.png', "./img/kclogo1.png"]

    },
    3: {
        img: "./img/watch2.png",
        donated: "EU for Turkey",
        sales: "350 kr.",
        project: ['./img/copdk.png', "./img/kclogo1.png"]

    },
    4: {
        img: "./img/MontlyWatch.png",
        donated: "EU for Turkey",
        sales: "5 kr.",
        project: ['./img/copdk.png', "./img/kclogo1.png"]

    },
}

playVideo()
createMarketPlace()
buyBtnAction();
function buyBtnAction(){
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
        createElement('img', imgContainer, '', ['src', watchess[key].img], '', ['articleImg'], '', '')
        let contentContainer = createElement('div', watchContainer, '', '', '', ['textContent'], '', '')
        let donateContainer = createElement('div', contentContainer, '', '', '', ['namecontainer'], '', '');
        createElement('p', donateContainer, '', '', '', '', '', 'Conscience')
        createElement('div', contentContainer, '', '', '', ['articlePrice'], '', watchess[key].sales);


        let unitContainer = createElement('div', contentContainer, '', '', '', ['unitContainer'], '', '');
        createElement('p', unitContainer, '', '', '', ['articleDonation'], '', '- Doneret til -');
        createElement('img', contentContainer, '', ['src', watchess[key].project[0]], '', ['priviusDonationIMg'], '', '')
        createElement('img', contentContainer, '', ['src', watchess[key].project[1]], '', ['priviusDonationIMg'], '', '')
    })
}
let child;
function openArticle() {
    let body = document.getElementsByTagName('body')[0];
    if (!body.contains(child)) {
        child = createElement('div', body, '', '', '', ['articlePage'], '');
    }
}

function buyNow(e) {
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

function openBurgerMenu() {
    let navContainer = document.getElementById('navContainer')
    // Get Nav Linkss and close them after Click
    let navlinks = document.querySelectorAll('.navLinks');
    navlinks.forEach(x => {
        x.addEventListener('click', openBurgerMenu);
    })

    burgerBtn.classList.toggle('change');
    if (navContainer.classList.contains('hide')) {
        navContainer.classList.remove('hide');
        navContainer.classList.add('show');

    } else {
        navContainer.classList.add('hide');
        navContainer.classList.remove('show')
    }
}

function createElement(type, parent, id, attributeArr,
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

function playVideo() {
    let video = document.getElementById('videoHeader');
    video.autoplay = true;
    setInterval(() => {
        video.currentTime = 0
    }, 8000)
}