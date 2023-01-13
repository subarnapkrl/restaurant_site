import * as device from './initial-page-load.js'
import {menu} from './menu.js'
console.log("You are Heartly Welcome To Our Restaurant");
console.log("Here is the MENU")

device.initialPageLoad();

let tabSwitchingModule=(function()
{
    const homeTab=document.querySelector(".home");
    homeTab.addEventListener("click",device.initialPageLoad);

    const menuTab=document.querySelector(".menu");
    menuTab.addEventListener("click",menu);
})();