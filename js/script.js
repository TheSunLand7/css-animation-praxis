const modal = document.querySelector(".modal");
const button1 = document.getElementById("button-1");
const close = document.querySelector(".modal__content--close");
// console.log(button1);

button1.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
}
);

close.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
}
);