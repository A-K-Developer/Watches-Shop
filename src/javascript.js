import { articleTemplate, priviousTemplate } from "./templates";
export function animateElementOnScroll(id) {
    const element = id
    const startPos = { x: 0, y: 0 }; // set the initial position of the element
    const endPos = { x: 0, y: 300 }; // set the end position of the element
    let hasMoved = false;

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 2900 && !hasMoved) {
        hasMoved = true;
        element.style.transition = 'transform 0.5s ease-out';
        element.style.transform = `translate(${endPos.x}px, ${endPos.y}px)`;
      } else if (scrollTop <= 2900 && hasMoved) {
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
                    onhover(x ,'down')

                })
            } else if (scrollTop <= 800) {
            
                nav.style.backgroundColor = 'transparent'
               
                logo.style.color = '#d4d5d9'
                alinks.forEach(x => {
                    x.style.color = '#d4d5d9'
                    onhover(x ,'top')
                })
            }
        }

    }
}
function onhover(ele,position){
    if(position == 'top'){
        ele.addEventListener("mouseover", function() {
            ele.style.color = "#203334";
        });
    
        ele.addEventListener("mouseout", function() {
            ele.style.color = "#d4d5d9";
        });
    }else{
        ele.addEventListener("mouseover", function() {
            ele.style.color = "#fff";
        });
    
        ele.addEventListener("mouseout", function() {
            ele.style.color = "#203334";
        });
    }
}
function animateSponsors() {

    let imgArr = ['../img/sponsor2.png', '../img/sponsor.png','', '../img/sponsor3.png', '../img/sponsor1.png', ]
    let classArr = ['firstIcon', 'secondIcon', 'thirdIcon', 'fourthIcon']
    let sposnorsContainer = document.querySelector('#sponsors')

    for (let i = 0; i < imgArr.length; i++) {
        createElement('img', sposnorsContainer, '', ['src', imgArr[i]], '', '', '', '');
    }
}
animateSponsors()

export function checkWatches(data){
    priviousTemplate(data.monthName,data.WatchImg,data.companyName,data.price,data.sponsorsImg,data.sponsorsImg2)
}
export function eventAndPrint(data){
    let bigParent = Array.from(document.getElementsByClassName('articleContainer'))
    bigParent.forEach(x => {
        let name = x.querySelector('.monthName').textContent;
        if(name == data.monthName){
            let btn = x.querySelector('.btnOpenArticle');
            btn.addEventListener('click',() =>{
                
                articleTemplate(data);
            })
        }
    })
    let btnsss = Array.from(document.getElementsByClassName('btnToOpenArticle'))
    btnsss.forEach(x => {
        let name = x.textContent;
        if(name == data.monthName){
            x.addEventListener('click',() =>{
                articleTemplate(data);
            })
        }
    })

}
export function buyBtnAction() {
    let buyBtn = document.querySelector('.buyNow');
    buyBtn.addEventListener('click', () => {
        window.open('https://buy.stripe.com/7sI6rI5ss1mEboQdQR')
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
