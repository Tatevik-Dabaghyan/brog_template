let typing = document.querySelector(".typing");

let typeString = ['Designer', 'Freelancer', 'Photographer', 'Web Developer'];
let i = 0;
let count = 0
let selectedText = '';
let text = '';


(function type() {
    if (count == typeString.length) {
        count = 0;
    }
    selectedText = typeString[count];
    text = selectedText.slice(0, ++i);
    typing.innerHTML = text;
    if (text.length === selectedText.length) {
        count++;
        i = 0;
    }
    setTimeout(type, 200);
}());

// ====================slider=================

let slids = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let arrSlide = [];

// for (i = 0; i < slids.length; i++) {
//     arrSlide.push(slids[i].innerHTML);
// }
//
// slids[0].classList.add("active");
//
// next.onclick = function () {
//     toNext();
//     veragrman();
// };
//
// prev.onclick = function () {
//     toPrev();
//     veragrman();
// };
//
// function toNext() {
//     arrSlide.push(arrSlide.shift());
// }
//
// function toPrev() {
//     arrSlide.unshift(arrSlide.pop());
// }
//
// function veragrman() {
//     for (i = 0; i < slids.length; i++) {
//         slids[i].innerHTML = arrSlide[i];
//     }
// }

// ===================================================End slider part==================================

//
// function nextVisible() {
//     slids[2].classList.add("active");
//     slids[2].style.transform = "translateX(0)";
//     slids[1].style.transform = "translateX(-100%)";
//     slids[0].style.transform = "translateX(+100%)";
// }


// slids[0].classList.replace("pasive", "active");
// let n=0;
// next.onclick=classChanging;
//
// function classChanging() {
//
//     if (n==slids.length-1){
//         n=0;
//         slids[slids.length-1].classList.replace("active", "pasive");
//         slids[n].classList.replace("pasive", "active");
//     }
//     slids[n].classList.replace("active", "pasive");
//     slids[n].nextElementSibling.classList.replace("pasive", "active");
//     return n++;
//
//
// }


// =======================================================================
// =======================================================================
// =======================================================================
arrTransNext=["1s", "1s", "0"];
for (i = 0; i < slids.length; i++) {
    slids[i].style.transition = arrTransNext[i];
}

for (i = 0; i < slids.length; i++) {
    arrSlide.push(slids[i].getAttribute("style"));
}

next.onclick = function () {
    toPrev();
    veragrman();
};

prev.onclick = function () {
    toNext();
    veragrman();
};

function toNext() {
    arrSlide.push(arrSlide.shift());
}

function toPrev() {
    arrSlide.unshift(arrSlide.pop());
}

function veragrman() {
    for (i = 0; i < slids.length; i++) {
        slids[i].style = arrSlide[i];
    }
}


