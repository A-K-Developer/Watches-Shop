let watchess = {
    1 : {
        img: "./img/rolex2.jpg",
        donated: 'Red Cross DK',
        sales: '1000pc',
        project: 'ASD-Project.dk',

    },
    2: {
        img: "./img/rolex.jpg",
        donated: "EU for Turkey",
        sales: "250pc",
        project: 'ASD-Project.dk',

    },3: {
        img: "./img/rolex.jpg",
        donated: "EU for Turkey",
        sales: "350pc",
        project: 'ASD-Project.dk',

    },4: {
        img: "./img/rolex.jpg",
        donated: "EU for Turkey",
        sales: "5pc",
        project: 'ASD-Project.dk',

    },
}
function createMarketPlace(){
    let marketPlace = document.getElementById('market');
    Object.keys(watchess).forEach(function(key){
        let watchContainer = createElement('div',marketPlace,'','','',['articleContainer'],'','')
        createElement('img',watchContainer,'',['src','./img/rolex2.jpg'],'',['articleImg'],'','')
        let rightSideEle = createElement('div',watchContainer,'','','',['textContent'],'','')
        let donateContainer = createElement('div',rightSideEle,'','','',['namecontainer'],'','');
        createElement('p',donateContainer,'','','','','','Donated: ')
        createElement('p',donateContainer,'','','',['articleName'],'',watchess[key].donated);

        let modelContainer = createElement('div',rightSideEle,'','','',['modelContainer'],'','');
        createElement('p',modelContainer,'','','',['articleModel'],'','Sales: ')
        createElement('p',modelContainer,'','','',['articleModel'],'',watchess[key].sales)

        let unitContainer = createElement('div',rightSideEle,'','','',['unitContainer'],'','');
        createElement('p',unitContainer,'','','',['articlePrice'],'','Project: ');
        createElement('p',unitContainer,'','','',['articlePrice'],'',watchess[key].project);

        let option = createElement('button',rightSideEle,'','',['click',buyNow],['articleButton'],'',watchess[key].option);

        if(option.textContent == 'Sold'){
            option.classList.add('markAsSold')
        }
        createElement('p',rightSideEle,'','',['click',openArticle],['readMore'],'','read more');
        
    })
}
let child ;
function openArticle(){
    let body = document.getElementsByTagName('body')[0];
    if(!body.contains(child)){    
        child = createElement('div',body,'','','',['articlePage'],'');
    }
}
function buyNow(e){
    if(e.target.textContent !== 'Sold'){    
        let navBarSales = document.getElementById('navIcons');
        let lastChild = navBarSales.lastElementChild;
        lastChild.textContent++
    }
}
function showInfo(e){
    let content = e.target.nextElementSibling
    content.classList.toggle('hide')
}
createMarketPlace()
let navContainer = document.getElementById('navContainer')
function openBurgerMenu() {
    burgerBtn.classList.toggle('change');
    if (navContainer.classList.contains('hide')) {
        navContainer.classList.remove('hide');
        navContainer.classList.add('show');

    } else {
        navContainer.classList.add('hide');
        navContainer.classList.remove('show')
    }
}
let imgArr = ['./img/rolex.jpg','./img/rolex2.jpg']
setInterval(slideShow,2000)

function slideShow(){
    let img = document.getElementById('welcomeImg');

    let usedImg = img.src.slice(-10)
    let newImg = imgArr[0].slice(-10)

    if(usedImg == newImg){
        img.src = imgArr[1];
    }else{
        img.src= imgArr[0];
    }
}

function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context,) {

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