
document.querySelector(".click__dropdown").addEventListener("click", function() {
    const dropDown = document.querySelector(".dropdown__content")
    dropDown.classList.toggle("dropdown--hidden")
    console.log('this is working');
})