let watchess = {
    1 : {
        month: 'January',
        name: "Onola",
        model: "steelWatch",
        price: "1000 kr",
        img: "./img/rolex2.jpg",
    },
    2: {
        month: 'February',
        name: "Onolaasdasd2",
        model: 'PlasticVersion',
        price: '1000 kr',
        img: "./img/rolex.jpg",

    },
    3: {
        month: 'March',
        name: "Onola3",
        model: 'PlastasdsdicVersion2',
        price: '12200 kr',
        img: "./img/rolex.jpg",

    },
    4: {
        month: 'April',
        name: "Onola4",
        model: 'PlasticVersion3',
        price: '1000 kr',
        img: "./img/rolex.jpg",

    }

}
function createMarketPlace(){
    let marketPlace = document.getElementById('market');
    Object.keys(watchess).forEach(function(key){
        let watchContainer = createElement('div',marketPlace,'','',['click',showInfo],['articleContainer'],'',watchess[key].month)
        let hideInfo = createElement('div',watchContainer,'','','',['hide'],'','')
        createElement('img',hideInfo,'',['src','./img/rolex2.jpg'],'',['articleImg'],'','')
        createElement('h3',hideInfo,'','','',['articleName'],'',watchess[key].name);
        createElement('h5',hideInfo,'','','',['articleModel'],'',watchess[key].model)
        createElement('p',hideInfo,'','','',['articlePrice'],'',watchess[key].price);
        createElement('button',hideInfo,'','','',['articleButton'],'','Add to Basket');

        console.log(key);
        console.log(watchess[key].name);
    })
}
function showInfo(e){
    let content = e.target.querySelector('div')
    content.classList.toggle('hide')
}
createMarketPlace()

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