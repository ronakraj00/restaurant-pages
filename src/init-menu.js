export default function initMenu(){
    const content=document.querySelector("#content");

    content.append(initMain());
}

function initMain(){
    const main=document.createElement("main");
    const menuLogo=document.createElement("div");
    const beverages=document.createElement("div");
    const beveragesH2=document.createElement("h2");
    const honeyTea=document.createElement("div");
    const honeyTeaP=document.createElement("p");
    const honeyTeaImg=document.createElement("img");
    
    menuLogo.setAttribute("id","menu-logo");
    beverages.setAttribute("id","beverages");
    honeyTea.setAttribute("id","honey-tea");
    honeyTeaImg.setAttribute("src","https://www.simplyrecipes.com/thmb/Q4I8Wg6ScCt98wAMP-xIe05aHtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Honey-Lemon-Tea-LEAD-02-e7fc3d40bc8f4a8aa3e2434fe449eb4c.jpg");

    menuLogo.textContent="Menu"
    beveragesH2.textContent="Beverages";
    honeyTeaP.innerHTML="Honey Tea <br>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right! <br>$2"


    honeyTea.append(honeyTeaP,honeyTeaImg);
    beverages.append(beveragesH2,honeyTea);
    main.append(menuLogo,beverages);

    return main;
}