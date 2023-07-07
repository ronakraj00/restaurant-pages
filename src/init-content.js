export default function initContact(){
    const content=document.querySelector("#content");

    content.append(initMain());
}

function initMain(){
    const main=document.createElement("main");
    const contactLogo=document.createElement("div");
    const mamaBear=document.createElement("div");
    const mamaBearH2=document.createElement("h2");
    const mamaBearP=document.createElement("p");
    const mamaBearImg=document.createElement("img");
    
    contactLogo.setAttribute("id","contact-logo");
    mamaBear.setAttribute("id","contact-mama-bear");
    mamaBearImg.setAttribute("src","https://img.freepik.com/free-vector/cute-teddy-bear-waving-hand-cartoon-icon-illustration_138676-2714.jpg?w=2000");
    mamaBearImg.setAttribute("alt","mama bear");
    contactLogo.textContent="Contacts"
    mamaBearH2.textContent="Mama Bear";
    mamaBearP.innerHTML="chef <br>444-444-4443 <br>totallyRealEmail@notfake.com"

    mamaBear.append(mamaBearH2,mamaBearP,mamaBearImg);
    main.append(contactLogo,mamaBear);

    return main;
}