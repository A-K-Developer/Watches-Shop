import {
    html,
    render
} from 'lit-html';
import {
    buyBtnAction,
    closeArticle,
    createElement,
    openBurgerMenu,
    playVideo,
    setDate
} from './javascript';

function templateForNav(arg1, arg2, arg3, arg4) {
    const navigationTemplate = html `
        <div id="companyName">Conscience</div>
        <div id="burgerBtn">
            <div class="line line1"></div>
            <div class="line line2"></div>
        </div>
        <div id="navContainer" class="hide navLinks">
            <a href="#slideshow">${arg1}</a>
            <a href="#desktopForWatches">${arg3}</a>
            <a href="#market">${arg4}</a>
            <a href="#productDescription" >${arg2}</a>
        </div>
`
    let targetElement = document.getElementsByTagName('nav')[0];

    render(navigationTemplate, targetElement)
    document.getElementById('burgerBtn').addEventListener('click', openBurgerMenu);
}
let mediaArr = [ /*video*/ "https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/hungryKids.mp4?alt=media&token=cb660ae2-ecf9-43bf-bbbf-bf70b8acc533",
    /*Clock*/
    "https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/stor-urskive.png?alt=media&token=4ec470b8-436f-4095-bf92-4adbb673c7a6",
    'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/urFrame.png?alt=media&token=04771148-7082-49ec-9b35-4f053b4986f6', /* HowItWorksSec */
    'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/designWatch.jpg?alt=media&token=4c13f69a-2634-486e-ba2d-610ac8c664f9',
    'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/demo.jpg?alt=media&token=22cac101-aba6-4c59-8496-13cedd59c528',
    'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/hands.jpg?alt=media&token=85bb971b-91b2-482b-b997-a0c81180ddf6'
]

function templateForSlideshow(arg1, arg2, arg3) {
    let slideshowTemplate = html `
        <video id="videoHeader" >
            <source src=${mediaArr[0]} type="video/mp4">
          </video>
        
        <div class="slogan">
            <h1 class="sloganAni">${arg1}</h1>
            <h1 class="sloganAni2">${arg3}</h1>
            
        </div>
        <div class="opacityVideo"></div>
        <a href="#desktopForWatches" class="supportBtn">${arg2}</a>
        <div id="clock">
            
        
        <div class="clock">
            <div class="backgroundWatch">
                <img src=${mediaArr[1]} alt="watch frame">
            </div>
            <div class="frame">
                <img src=${mediaArr[2]} alt="watch frame">
            </div>
            <div class="clock-face">
                <h3>Conscience</h3>
              <div class="hand hour-hand"></div>
              <div class="hand min-hand"></div>
              <div class="hand second-hand"></div>
              <div class="center-dot"></div>
            </div>
          </div>
        </div>
        
    `

    let targetElement = document.getElementById('slideshow');

    render(slideshowTemplate, targetElement)
    setInterval(setDate, 1000);
    playVideo()


}
let sponsorsImgesRef = {
    firstSponsor: 'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/sponsor.png?alt=media&token=8c702b3d-dcb0-46f9-88c0-f205ee1d34d5',
    secondSponsor: 'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/sponsor2.png?alt=media&token=ef0a29fe-c39d-4bb9-b55c-2d9c42d8b974',
    thirthSponsor: 'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/sponsor3.png?alt=media&token=d0f913f0-8a0a-48fe-875e-d47356f9e4eb',
    fourthSponsor: 'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/sponsor1.png?alt=media&token=3e8a661b-4eb4-408f-80cb-a964ca5c662e',
}

function templateForHowItWorks(arg1, arg2, arg3, arg4, arg5, arg6) {
    let slideshowTemplate = html `
        <div class="steps">
            <img src=${sponsorsImgesRef.firstSponsor} class="sponsorImg" alt="sponsors">
            <div class="text-how-works">
                <span>
                    <h1>1.</h1><h1>${arg1}</h1>
                </span>
                <p>${arg2}</p>
            </div>
            <img class="extraImgHowItWorks" src=${mediaArr[3]} alt="pexel img">
            <div class="lineBetween"></div>
        </div>
        <div class="steps">
            <img src=${sponsorsImgesRef.secondSponsor} class="sponsorImg" alt="sponsors">
            <div class="text-how-works">
            <span><h1>2.</h1><h1>${arg3}</h1></span>
            <p>${arg4}</p>
            </div>
            <img class="extraImgHowItWorks" src=${mediaArr[4]}  alt="pexel img">
            <div class="lineBetween"></div>

        </div>
        <div class="steps">
          <img src=${sponsorsImgesRef.thirthSponsor} class="sponsorImg" alt="sponsors">
          <div class="text-how-works">
            <span><h1>3.</h1><h1>${arg5}</h1></span>
            <p>${arg6}</p>
            </div>
            <img class="extraImgHowItWorks" src=${mediaArr[5]}  alt="pexel img">

        </div>
    `

    let targetElement = document.getElementById('HowItWorks');

    render(slideshowTemplate, targetElement)
}


function templateForMonthlyWatch(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {

    let watchTemplate = html `
        <section id="sellingWatch">
            <h1 class="donationName">${arg1}</h1>
            <div class="watch">
                <img src="../img/MontlyWatch.png" alt="watchImg">
            </div>
            
            <p class="purposeForWatch"><span>${arg2}:</span>${arg3}</p>
            <p class="priceForWatch">${arg4} kr</p>
            <div class="btn buyNow">${arg5}</div>
        </section>
        <section class="sellingDetails">
            <img src="../img/redcross.png" alt="redcross missing">
            <p>${arg6}</p>
            <p class="readMore">read more...</p>
            <div class="projects">
                <div class="project">
                    <h5>${arg8}:</h5>
                    <p>${arg9}</p>
                </div>
                <div class="project">
                    <h5>${arg10}:</h5>
                    <p>${arg11}</p>
                </div>
                <div class="project">
                    <h5>${arg12}:</h5>
                    <p>${arg13}</p>
                </div>
                
                <section class="proggresBar">
                    <div class="progressBarEle"></div>
                    <div class="point"></div>
                    <div class="progressBarEle"></div>
                    <div class="point"></div>
                    <div class="progressBarEle"></div>
                    <section class="iconsForBar">
                    <img class="iconForBar" src="../img/folded-hand-fil1.png" alt="folded-hand-fil1 missing">
                    <img  src="../img/hand-fil.png" alt="hand-fil missing">
                    <img src="../img/heart-stroke3.png" alt="rolex missing">

                    <img src="../img/box-stroke4.png" alt="rolex missing">

                </section>
                </section>
            </div>
            <p class="lastText">${arg14}</p>
        </section>
        
    `
    let targetElement = document.getElementById('desktopForWatches');


    render(watchTemplate, targetElement)

    buyBtnAction()
}

function productDescription(arg, arg1) {
    let productTemplate = html `
     
        <div class="contentForCompany">
            <h1>${arg}</h1>
            <img id="welcomeImg" src="../img/Conscience2.jpg" alt="rolex missing">
            <p>${arg1}</p>
        </div>
    `
    let targetElement = document.getElementById('productDescription');

    render(productTemplate, targetElement)
}
export function openArticles() {
    //let closeBtn = createElement('div', child, 'closeBtn', '', ['click', closeArticle], '', '', '');


    let articleTemplate = html `
    <div>
        <div id="header">
            <img src="../img/weChooseCause.jpg" alt="headerImg Missing">
            <h1>Red Cross Donation</h1>
        </div>
        <div id="closeBtn">
            
        </div>
        <div id="articlePages">
            <div class="firstText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minima consectetur, saepe enim totam non laboriosam voluptates illo suscipit voluptatum laborum aut natus magni tempora!</p>
                <div class="lineBetweens"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, enim ab ea esse expedita praesentium, voluptate quasi animi similique laborum voluptas vero quia, pariatur consequuntur.</p>
            </div>
            <div class="galleryImg">
                <img src="../img/Conscience0.jpg" alt="imgMissing">
                <img src="../img/Conscience0.jpg" alt="imgMissing">
                <img src="../img/Conscience0.jpg" alt="imgMissing">
                <img src="../img/Conscience0.jpg" alt="imgMissing">
                <img src="../img/Conscience0.jpg" alt="imgMissing">
            </div>
            <div class="lastText">
                <div class="textSection">
                    <div>
                        <p>LtextSectionucimus earum ipsum, esse textSectionucimus earum ipsum, esse sint corporis qui veritextSectionucimus earum ipsum, esse sint corporis qui verisint corporis qui veritatis culpa suscipit sed aliquid numquam dolor porro inventore voluptate, exercitationem quidem quae ipsam ea aliquam. Illo consectetur sed numquam at, repudiandae</p>
                        <img src="../img/Conscience1.jpg" alt="imgMissing">
                        <p class="last"> sunt obcaecati atque dolores vero deserunt fugiat aperiam est nobis vel aut!</p>
                    </div>
                </div>
                <div class="lineBetweens"></div>
                <div class="textSection textSection1">
                    <img src="../img/Conscience1.jpg" alt="imgMissing">
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus earum ipsum, 
                        esse sint corporis qui veritatis culpa suscipit
                    </p>
                    <p>
                        sed !!!aliquid numquam dolor 
                        porro inventore voluptate, exercitationem quidem quae ipsam ea aliquam. Illo consectetur sed </p>
                    <p>numquam at, repudiandae sunt obcaecati atque dolores vero deserunt fugiat aperiam est nobis vel aut!</p>
                </div>
            </div>
        </div>
        </div>
    `
    let targetElement = document.getElementById('articleContainer');
    let body = document.getElementsByTagName('body')[0]
    if (targetElement == null) {
        targetElement = createElement('section', body, 'articleContainer', '', '', '');
        render(articleTemplate, targetElement)
    }
    render(articleTemplate, targetElement)
    let closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', () => {
        targetElement.remove()
    })
    createElement('div', closeBtn, '', '', '', ['closeLine', 'lineLeft'], '', '')
    createElement('div', closeBtn, '', '', '', ['closeLine', 'lineRight'], '', '')
}

function footerTemplate(about, about1, about2, about3, about4, about5, contact, contact1, contact2, contact3, policies, policies1, policies2, policies3, policies4, policies5, policies6, policies7, service, service1, service2, service3) {
    let footerTemplates = html `
    
    <div class="about">
            <span>
                <p>${about}</p>
            </span>
            <p>${about1}</p>
            <p>${about2}</p>
            <p>${about3}</p>
            <p>${about4}</p>
            <p>${about5}</p>
        </div>
        <div class="contact">
            <span>
                <p>${contact}</p>
            </span>
            <p>${contact1}</p>
            <p>${contact2}</p>
            <p>${contact3}</p>
        </div>
        <div class="policies">
            <span>
                <p>${policies}</p>
            </span>
            <p>${policies1}</p>
            <p>${policies2}</p>
            <p>${policies3}</p>
            <p>${policies4}</p>
            <p>${policies5}</p>
            <p>${policies6}</p>
            <p>${policies7}</p>
        </div>
        <div class="paymentService">
            <span>
                <p>${service}</p>
            </span>
            <p>${service1}</p>
            <p>${service2}</p>
            <p>${service3}</p>
        </div>
    `
    let targetElement = document.getElementsByTagName('footer')[0];

    render(footerTemplates, targetElement)
}

export {
    templateForNav,
    templateForSlideshow,
    templateForHowItWorks,
    templateForMonthlyWatch,
    productDescription,
    footerTemplate
}