import {html, render} from 'lit-html';
import { buyBtnAction, createMarketPlace, openBurgerMenu, playVideo, setDate } from './javascript';

function templateForNav(arg1,arg2,arg3,arg4){
    const navigationTemplate = html`
        <div id="companyName">Conscience</div>
        <div id="burgerBtn">
            <div class="line line1"></div>
            <div class="line line2"></div>
        </div>
        <div id="navContainer" class="hide navLinks">
            <a href="#slideshow">${arg1}</a>
            <a href="#productDescription" >${arg2}</a>
            <a href="#sellingWatch">${arg3}</a>
            <a href="#market">${arg4}</a>
        </div>
`
let targetElement = document.getElementsByTagName('nav')[0];

render(navigationTemplate, targetElement)
document.getElementById('burgerBtn').addEventListener('click', openBurgerMenu);
}
let mediaArr = [/*video*/"https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/hungryKids.mp4?alt=media&token=cb660ae2-ecf9-43bf-bbbf-bf70b8acc533",/*Clock*/"https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/stor-urskive.png?alt=media&token=4ec470b8-436f-4095-bf92-4adbb673c7a6",'https://firebasestorage.googleapis.com/v0/b/watch-shop-b2682.appspot.com/o/urFrame.png?alt=media&token=04771148-7082-49ec-9b35-4f053b4986f6',]
function templateForSlideshow(arg1,arg2,arg3){
    let slideshowTemplate = html`
        <video id="videoHeader" >
            <source src=${mediaArr[0]} type="video/mp4">
          </video>
        
        <div class="slogan">
            <h1>${arg1}</h1>
            <h1>${arg3}</h1>
            
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
            </div>
          </div>
        </div>
        
    `

    let targetElement = document.getElementById('slideshow');

    render(slideshowTemplate, targetElement)
    setInterval(setDate, 1000);
    playVideo()


}

function templateForHowItWorks(arg1,arg2,arg3,arg4,arg5,arg6){
    let slideshowTemplate = html`
        <div class="steps">
            <img src="../img/sponsor2.png" class="sponsorImg" alt="sponsors">
            <span><h1>1</h1><h1>${arg1}</h1></span>
            <p>${arg2}</p>
            <img class="extraImgHowItWorks" src="../img/pexels-lisa-fotios-705868.jpg" alt="pexel img">
        </div>
        <div class="steps">
            <img src="../img/sponsor.png" class="sponsorImg" alt="sponsors">
            <span><h1>2</h1><h1>${arg3}</h1></span>
            
            <p>${arg4}</p>
            <img class="extraImgHowItWorks" src="../img/pexels-allan-mas-5368943.jpg" alt="pexel img">

        </div>
        <div class="steps">
          <img src="../img/sponsor3.png" class="sponsorImg" alt="sponsors">
            <span><h1>3</h1><h1>${arg5}</h1></span>
            <p>${arg6}</p>
            <img class="extraImgHowItWorks" src="../img/weChooseCause.jpg" alt="pexel img">

        </div>
    `

    let targetElement = document.getElementById('HowItWorks');

    render(slideshowTemplate, targetElement)
}


function templateForMonthlyWatch(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,arg19,arg20){
    let watchTemplate = html`
        <section id="sellingWatch">
            <h1 class="donationName">${arg1}</h1>
            <div class="watch">
                <img src="../img/MontlyWatch.png" alt="watchImg">
            </div>
            <div class="solded">
                <div class="sells">
                    <p><span>${arg2}</span> / 50 stk</p>
                    <p><span>${arg3}</span> / 200 stk</p>
                    <p><span>${arg4}</span> / &infin; stk</p>
                </div>
                <div class="arrowFunc">
                    <p>-></p>
                    <p>-></p>
                    <p>-></p>
                </div>
                <div class="projectsCount">
                    <p>${arg5}</p>
                    <p>${arg6}</p>
                    <p>${arg7}</p>
                </div>
            </div>
            <p class="purposeForWatch"><span>${arg8}:</span>${arg9}</p>
            <p class="priceForWatch">${arg10} kr</p>
            <div class="btn buyNow">${arg11}</div>
        </section>
        <section class="sellingDetails">
            <img src="../img/redcross.png" alt="redcross missing">
            <p>${arg12}</p>
            <p>${arg13}</p>
            <div class="projects">
                <div class="project">
                    <h5>${arg14}:</h5>
                    <p>${arg15}</p>
                </div>
                <div class="project">
                    <h5>${arg16}:</h5>
                    <p>${arg17}</p>
                </div>
                <div class="project">
                    <h5>${arg18}:</h5>
                    <p>${arg19}</p>
                </div>
            </div>
            <p>${arg20}</p>
        </section>
        
    `

    let targetElement = document.getElementById('desktopForWatches');

    render(watchTemplate, targetElement)
    
    buyBtnAction()
}

function productDescription(arg,arg1){
    let productTemplate = html`
     <div class="watchImg">
            <img id="welcomeImg" src="../img/Conscience2.jpg" alt="rolex missing">

        </div>
        <div class="contentForCompany">
            <h1>${arg}</h1>
            <p>${arg1}</p>
        </div>
    `
     let targetElement = document.getElementById('productDescription');

     render(productTemplate, targetElement)
}

function footerTemplate(about,about1,about2,about3,about4,about5,contact,contact1,contact2,contact3,policies,policies1,policies2,policies3,policies4,policies5,policies6,policies7,service,service1,service2,service3){
    let footerTemplates = html`
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
