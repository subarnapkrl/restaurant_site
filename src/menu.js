export function menu()
{
    const contentDiv=document.querySelector("#content");
    contentDiv.replaceChildren();

    const navbar=document.createElement('nav');

    const bannered=document.createElement("div");
    bannered.classList.add("menubanner");

    contentDiv.appendChild(navbar);
    contentDiv.append(bannered);

    const navHead=document.createElement("h1");
    navHead.textContent="Eat-O-Food";
    navHead.classList.add("nav-heading");

    const ul=document.createElement("ul");

    const linkList1=document.createElement("li");
    linkList1.textContent="Home";
    linkList1.classList.add("link","home");
   

    const linkList2=document.createElement("li");
    linkList2.textContent="Menu";
    
    linkList2.classList.add("link","menu","current");

    const linkList3=document.createElement("li");
    linkList3.textContent="Contact";
    linkList3.classList.add("link","contact");

    navbar.appendChild(navHead);
    navbar.appendChild(ul);


    ul.append(linkList1);
    ul.append(linkList2);
    ul.append(linkList3);

    const menuArea=document.createElement("div");
    menuArea.classList.add("menuArea");
    bannered.append(menuArea);

    const menuHeading=document.createElement("h1");
    menuHeading.textContent="Menu";
    menuHeading.classList.add("menuHead");
    menuArea.append(menuHeading);

    const menuList=document.createElement("div");
    menuList.classList.add("menuList");
    menuArea.append(menuList);

   const item1=document.createElement("div");
   item1.classList.add("item");
   menuList.append(item1);

   const food1img=document.createElement("image");
   food1img.innerHTML="<img src='../src/assets/burger1.jpg' width='160px' height='130px'>";
    food1img.classList.add("img");
   item1.appendChild(food1img);

   const food1Description=document.createElement("h2");
   food1Description.textContent="Hamburger";
   food1Description.classList.add("foodHead");
   food1img.append(food1Description);

   const food2img=document.createElement("image");
   food2img.innerHTML="<img src='../src/assets/burger2.jpg' width='160px' height='130px'>";
   food2img.classList.add("img");
   item1.appendChild(food2img);

   const food2Description=document.createElement("h2");
   food2Description.textContent="CheeseBurger";
   food2Description.classList.add("foodHead");
   food2img.append(food2Description);

   const food3img=document.createElement("image");
   food3img.innerHTML="<img src='../src/assets/burger3.jpg' width='160px' height='130px'>";
   food3img.classList.add("img");
   item1.appendChild(food3img);

   const food3Description=document.createElement("h2");
   food3Description.textContent="Double CheeseBurger";
   food3Description.classList.add("foodHead");
   food3img.append(food3Description);

   const food4img=document.createElement("image");
   food4img.innerHTML="<img src='../src/assets/burger4.jpg' width='160px' height='130px'>";
   food4img.classList.add("img");
   item1.appendChild(food4img);

   const food4Description=document.createElement("h2");
   food4Description.textContent="Steak Burger";
   food4Description.classList.add("foodHead");
   food4img.append(food4Description);


   const food5img=document.createElement("image");
   food5img.innerHTML="<img src='../src/assets/burger5.jpg' width='160px' height='130px'>";
   food5img.classList.add("img");
   item1.appendChild(food5img);

   const food5Description=document.createElement("h2");
   food5Description.textContent="Double Deck HamBurger";
   food5Description.classList.add("foodHead");
   food5img.append(food5Description);

   const food6img=document.createElement("image");
   food6img.innerHTML="<img src='../src/assets/burger6.jpg' width='160px' height='130px'>";
   food6img.classList.add("img");
   item1.appendChild(food6img);

   const food6Description=document.createElement("h2");
   food6Description.textContent="Special Burger";
   food6Description.classList.add("foodHead");
   food6img.append(food6Description);




}