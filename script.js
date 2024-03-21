const skipLoadingBtn = document.getElementById('skip-loading');

skipLoadingBtn.addEventListener('click', () => {
    console.log("Skip")
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', () => {
        document.body.removeChild('loader');
    });
});

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

var typed = new Typed('.profession-1', {
    stringsElement: '#typed-strings',
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && !entry.target.classList.contains('hidden-work')) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let isHidden = true

function showMoreWork(){
    if(isHidden){
        const hiddenWork = document.querySelectorAll(".hidden-work");
        for(let i = 0; i < hiddenWork.length; i++){
            hiddenWork[i].classList.remove('hidden-work');
            hiddenWork[i].classList.add('show');
            hiddenWork[i].classList.add('was-hidden-work');
        }
        document.getElementById('hidden-work-btn').textContent = "SHOW LESS";
    }else{
        const wasHiddenWork = document.querySelectorAll(".was-hidden-work");
        for(let i = 0; i < wasHiddenWork.length; i++){
            wasHiddenWork[i].classList.remove('show');
            wasHiddenWork[i].classList.remove('was-hidden-work');
            wasHiddenWork[i].classList.add('hidden-work');
        }
        document.getElementById('hidden-work-btn').textContent = "SHOW MORE";
    }
    isHidden = !isHidden;
}

const sideMenu = document.getElementById("side-menu");

function OpenMenu(){
    sideMenu.style.right = "0";
}

function CloseMenu(){
    sideMenu.style.right = "-300px";
}

let services = {
    ["Professional Scripting"]: "Professional Lua Programming with 4+ years of experience and many finished projects to showcase!",
    ["UI Design"]: "UI designing experience for 1 year, able to design UI, UX, Logos, and icons!",
    ["Discord Bot Development"]: "Discord bot development with 1+ years of experience, able to deliver complex systems such as verification and moderation!"
}

function ClosePopup() {
    document.getElementById("popup-shadow").style.display = "none";
}

function OpenPopup(name) {
    document.getElementById("popup-shadow").style.display = "block";
    document.getElementById("popup-title").textContent = name;
    document.getElementById("popup-description").textContent = services[name];
}