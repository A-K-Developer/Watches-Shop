import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc, 
    doc,
    query, where,
    orderBy,
    getDoc,
    updateDoc,
} from 'firebase/firestore'
import { footerTemplate, productDescription, templateForHowItWorks, templateForMonthlyWatch, templateForNav, templateForSlideshow } from './templates';

const firebaseConfig = {
    apiKey: "AIzaSyCzJNMsYcuLThyueu96GIJ7Iim98iJ5GxI",
    authDomain: "watch-shop-b2682.firebaseapp.com",
    projectId: "watch-shop-b2682",
    storageBucket: "watch-shop-b2682.appspot.com",
    messagingSenderId: "886121237214",
    appId: "1:886121237214:web:42dc7cc4d44b25b36e504f"
  };

  initializeApp(firebaseConfig)


const db = getFirestore();

const colRef = collection(db, 'Front-endText')

//queries
const q = query(colRef,where('causeName','==','Support red cross'), orderBy('title','asc'));

let watchSection = [];

// real time data base 
onSnapshot(q,(snapshot) =>{
    snapshot.docs.forEach((doc) => {
       //console.log(doc.data());
    })
} )

onSnapshot(colRef, (snapshot) => {
    snapshot.docs.forEach((doc)=> {
        watchSection.push({...doc.data(), id: doc.id})
    })
    console.log(watchSection[0]);


})


// get Single Document 

    const docRef = doc(db,'Front-endText','navbar')

    onSnapshot(docRef, (doc) => {
        let data = doc.data();
        
        templateForNav(data.navbarLink1, data.navbarLink2,data.navbarLink3,data.navbarLink4 )
    
    })

    let slideshow = doc(db,'Front-endText','headings');

    onSnapshot(slideshow, (doc) => {
        let data = doc.data();
        templateForSlideshow(data.slogan,data.support,data.slogan1)
        templateForHowItWorks(data.section2heading1,data.text1,data.section2heading2,data.text2,data.section2heading3,data.text3,);
        productDescription(data.section5heading1,data.section5para1)
        
    })

    let monthlyWatch = doc(db,'Front-endText', 'WatchSection');

    onSnapshot(monthlyWatch, (doc) => {
        let data = doc.data();
        templateForMonthlyWatch(data.causeName,data.purpose,data.valueOnPurpose,data.buyNow,data.buyBtnValue,data.bigText,data.bigText1,data.projectHeading1,data.projectText1,data.projectHeading2,data.projectText2,data.projectHeading3,data.projectText3,data.bigText3)
       
    })

    let footerData = doc(db,'Front-endText', 'footer');

    onSnapshot(footerData , (doc) => {
        let data = doc.data();
        footerTemplate(data.headings1,data.aboutLinks1,data.aboutLinks2,data.aboutLinks3,data.aboutLinks4,data.aboutLinks5,data.headings2,data.contactLink1,data.contactLink2,data.contactLink3,data.headings3,data.policiesLink1,data.policiesLink2,data.policiesLink3,data.policiesLink4,data.policiesLink5,data.policiesLink6,data.policiesLink7,data.headings4,data.servicesLink1,data.servicesLink2,data.servicesLink3)
    })
    
/* Adding and Deleting Documents :
//select The elemetn and his input
//add event listener to submit the data into firebase

addDoc(colRef, {
    title: first Input!!! ,
    author: secondInput ,
}).then(() => {
    //clear the input fields 
})


//select input look for document and delete it ! 

    const docRef = doc(db,'collId','docID');
    deleteDoc(docRef)
        .then(() => {
            //reset the form or input
        })



*/


/* 
 Update document 

 get the input fire function to update Data

    const docRef(doc(db, 'Front-endText, id of document ))

    updateDoc(docRef, {
        tittle : 'updated title",
        

    }).then(() => {
        reset form 
    })
*/
