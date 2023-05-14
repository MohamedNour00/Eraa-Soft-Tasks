// Fixed Header Background
const header = document.querySelector("header");
const sectionOne = document.querySelector(".banner");

const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ) {
        entries.forEach(entry => {

            if(!entry.isIntersecting) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        })
    }, 
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Portfolio Sectio
let switcherLis = document.querySelectorAll(".switcher li")
let item  = document.getElementsByClassName("gallery-item");
let items = Array.from(document.querySelectorAll(".gallery-item"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageItems);

})

// Remove All Active Classes From All Lis And Add To Current

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

// Manage Items

function manageItems() {
    items.forEach((item) => {
        item.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}

console.log(item);