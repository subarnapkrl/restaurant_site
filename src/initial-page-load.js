export  function initialPageLoad()
{
    const contentDiv=document.querySelector("#content");

    const navbar=document.createElement('nav');

    const banner=document.createElement("div");
    banner.classList.add("banner");

    contentDiv.appendChild(navbar);
    contentDiv.append(banner);

    const navHead=document.createElement("h1");
    navHead.textContent="Eat-O-Food";
    navHead.classList.add("nav-heading");

    const ul=document.createElement("ul");

    const linkList1=document.createElement("li");
    linkList1.textContent="Home";
    linkList1.classList.add("link","home","current");
   

    const linkList2=document.createElement("li");
    linkList2.textContent="Menu";
    linkList2.classList.add("link","menu");

    const linkList3=document.createElement("li");
    linkList3.textContent="Contact";
    linkList3.classList.add("link","contact");

    navbar.appendChild(navHead);
    navbar.appendChild(ul);


    ul.append(linkList1);
    ul.append(linkList2);
    ul.append(linkList3);

    const area=document.createElement("div");
    area.classList.add("area");

    const bannerHead=document.createElement("h1");
    bannerHead.classList.add("heading");
    bannerHead.textContent="Come on down for some delicious cuisine!";

    const bannerHeading2=document.createElement("h2");
    bannerHeading2.textContent="Tasty and Affordable";

    const btnLink=document.createElement("a")
    btnLink.textContent="Order Now"
    btnLink.classList.add("btn");

    banner.append(area);
    
    area.append(bannerHead);
    area.append(bannerHeading2);
    area.append(btnLink);





}