export function contact()
{
    const contentDiv=document.querySelector("#content");
    contentDiv.replaceChildren();

    const navbar=document.createElement('nav');

    const bannered=document.createElement("div");
    bannered.classList.add("contactbanner");

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
    linkList2.classList.add("link","menu");

    const linkList3=document.createElement("li");
    linkList3.textContent="Contact";
    linkList3.classList.add("link","contact","current");

    navbar.appendChild(navHead);
    navbar.appendChild(ul);


    ul.append(linkList1);
    ul.append(linkList2);
    ul.append(linkList3);


    const formSection=document.createElement("div");
    formSection.classList.add("form-section");
    bannered.append(formSection);

    const contactHeading=document.createElement("h1");
    contactHeading.classList.add("heading");
    formSection.append(contactHeading);

    const form=document.createElement("form");
    form.classList.add("form");
    formSection.append(form);

    const part1=document.createElement("div");
    part1.innerHTML=`
    <label for="firstName" class="firstName">First Name</label>
    <input type="text" name="firstName" id="firstName">
    
    <label for="email" class="email">Email</label>
    <input type="email" name="email" id="email">

    <label for="password" class="password">Password</label>
    <input type="password" name="password" id="password">

    `
    part1.classList.add("part1");
    form.append(part1);

    const part2=document.createElement("div");
    part2.innerHTML=`
    <label for="lastName" class="lastName">Last Name</label>
    <input type="text" name="lastName" id="lastName">

    <label for="phone" class="phone">Phone Number</label>
    <input type="number" name="phone" id="phone">

    <label for="confirmPassword" class="confirmPassword">Confirm Password</label>
    <input type="password" name="confirmPassword" id="confirmPassword">
    `
    part2.classList.add("part2");
    form.append(part2);

    const buttonSection=document.createElement("div");
    buttonSection.classList.add("button-section");
    contentDiv.append(buttonSection);

    const btna=document.createElement("button");
    btna.textContent="Create Account";
    btna.classList.add("btna");
    buttonSection.append(btna);

    const loginDIv=document.createElement("div");
    loginDIv.classList.add("login");
    buttonSection.append(loginDIv);

    const headdd=document.createElement("h1");
    headdd.textContent="Already Have an Account? LOGIN";
    loginDIv.append(headdd);

}