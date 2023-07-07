import initialPage from "./initial-page";
import initMenu from "./init-menu";
import initContact from "./init-content";
import './style.css'

//initialize the first page
initialPage();

const home=document.querySelector("#home");
home.classList.add("active-tab");
const content=document.querySelector("#content");

const headerLinks=document.querySelectorAll(".header");
headerLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
        content.innerHTML="";

        headerLinks.forEach(linked=>{
            linked.classList.remove("active-tab")
        })

        link.classList.add("active-tab");

        makeNewContent(e);
    })
})

function makeNewContent(e){
    const elem=e.target.id;
    if(elem=="menu"){
        initMenu();
    }
    if(elem=="contact"){
        initContact();
    }
    if(elem=="home"){
        initialPage();
    }

    

   
}

