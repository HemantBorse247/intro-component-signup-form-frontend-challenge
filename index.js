console.log("hello world");

let btn = document.getElementById('button');
let inp = document.getElementsByClassName('input');
let war = document.getElementsByClassName('warning');
let ban = document.getElementsByClassName('banner');
let err = document.getElementsByClassName('error-icon');

console.log(war);

btn.addEventListener("mouseover", function fnc() {
    btn.classList.add("btnhover");
});

btn.addEventListener("mouseout", function fnc2() {
    btn.classList.remove("btnhover");
});

btn.addEventListener("click", function validation() {
    for (let i = 0; i < 4; i++) {
        if (inp[i].value == "") {
            inp[i].classList.add("red-border");
            war[i].setAttribute("style", "display: block;");
            err[i].setAttribute("style", "display: block;");
            ban[0].setAttribute("style", "margin-top: 60px;");
            inp[0].setAttribute("style", "margin-top: 20px;");

        } else {
            war[i].setAttribute("style", "display: none;");
            err[i].setAttribute("style", "display: none;");
            inp[i].classList.remove("red-border");
        }
    }
});
