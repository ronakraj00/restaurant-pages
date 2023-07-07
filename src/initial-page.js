export default function initialPage(){
    const content=document.getElementById("content");
    
    content.append(initMain());
    
}

function setAttributes(el, attrs) {
    el.forEach(element => {
        for(var key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
    });
    
  }


// function initHeader(){
//     const header=document.querySelector("header");
//     const home=document.querySelector("#home");
//     const menu=document.querySelector("#menu");
//     const  contact=document.querySelector("#contact");

//     //set attribute "href"
    
//     // home.setAttribute("id","home");
//     // menu.setAttribute("id","menu");
//     // contact.setAttribute("id","contact");

//     setAttributes([home,menu,contact],{"class":"header"})

//     //text content
//     // home.textContent="Home";
//     // menu.textContent="Menu";
//     // contact.textContent="Content";

//     //append
//     header.append(home,menu,contact);

//     return header;
// }

function initMain(){
    const main=document.createElement("main");
    const name=document.createElement("div");
    const about=document.createElement("div");
    const hours=document.createElement("div");
    const location=document.createElement("div");

    name.setAttribute('id',"name");
    about.setAttribute('id',"about");
    hours.setAttribute('id',"hours");
    location.setAttribute('id',"location");

    name.innerHTML="Beary's Breakfast Bar";
    about.innerHTML="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again. <br>~~Goldilocks";
    hours.innerHTML="hours <br>Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm <br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm<br>";
    location.innerHTML="Location <br> 123 Forest Drive, Forestville, Maine";


    main.append(name,about,hours,location);
    
    return main;

}