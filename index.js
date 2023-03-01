let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click", () => {
    console.log("click");
    navBar.classList.toggle('active');
})