var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const text = document.querySelector(".profession-1");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Scripter";
    }, 0);
    setTimeout(() => {
        text.textContent = "UI/UX Designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Discord Bot Developer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);