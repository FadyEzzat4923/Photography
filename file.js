let imges = Array.from(document.querySelectorAll(".image img"));
let summary = Array.from(document.querySelectorAll(".changed-header"));
let nums = Array.from(document.querySelectorAll(".numnum"));
let duration = 5000;
let len = imges.length;
let count = 0;

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// Program
imges[count].classList.add("active");
summary[count].classList.add("active");
nums[count].classList.add("active");
setInterval(changeNext, duration);
prevBtn.addEventListener("click", changePrev);
nextBtn.addEventListener("click", changeNext);

//  function
function remove() {
    imges.forEach((e) => {
        e.classList.remove("active");
    });
    summary.forEach((e) => {
        e.classList.remove("active");
    })
    nums.forEach((e) => {
        e.classList.remove("active");
    })
}

function changeNext() {
    remove();
    next();
    imges[count].classList.add("active");
    summary[count].classList.add("active");
    nums[count].classList.add("active");
}

function next() {
    if (count === len - 1) {
        count = 0;
    }
    else {
        count++;
    }
}
function prev() {
    if (count <= 0) {
        count = len - 1;
    }
    else {
        count--;
    }
}

function changePrev() {
    remove();
    prev();
    imges[count].classList.add("active");
    summary[count].classList.add("active");
    nums[count].classList.add("active");
}
// /////////////////////////////////////////////////////////
let rate = document.querySelectorAll('.rated-line');
let containerRate = document.querySelectorAll(".rated");
// Program
rate.forEach((e) => {
    e.style.width = e.getAttribute("data-rate");
})
for (let i = 0; i < containerRate.length; i++) {
    let span = document.createElement("span");
    span.textContent = rate[i].getAttribute("data-rate");
    span.style.left = rate[i].getAttribute("data-rate");
    containerRate[i].appendChild(span);
}
// /////////////////////////////////////////////////////////
let portfolioBar = document.querySelectorAll(".portfolio-bar ul li");
let portfolioShow = document.querySelectorAll(".portfolio-show");
// Program
portfolioBar[0].classList.add("active");
portfolioShow.forEach((e) => {
    e.classList.add("active");
})
for (let i = 0; i < portfolioBar.length; i++) {
    portfolioBar[i].onclick = () => {
        portfolioBar.forEach((e) => {
            e.classList.remove("active");
        })
        portfolioShow.forEach((e) => {
            e.classList.remove("active");
        })
        if (i === 0) {
            portfolioBar[i].classList.add("active");
            portfolioShow.forEach((e) => {
                e.classList.add("active");
            });
        } else {
            portfolioBar[i].classList.add("active");
            portfolioShow[i - 1].classList.add("active");
        }
    }
}
// //////////////////////////////////////////////////////

let image = document.querySelectorAll(".portfolio-show img");
let centerImg = document.querySelector('.center-img img')
let secondScreen = document.querySelector(".second-screen");
let fullScreen = document.querySelector(".full-screen");
let share = document.querySelector(".share");
let closeing = document.querySelector(".close");
let linkShare = document.querySelector('.third-screen input');
let thirdScreen = document.querySelector('.third-screen');
let closes = document.querySelector('.xcolse')
let brandShare = document.querySelectorAll('.brand-icon');
for (let i = 0; i < image.length; i++) {
    image[i].onclick = () => {
        secondScreen.classList.remove("d-none");
        centerImg.setAttribute('src', image[i].getAttribute('src'));
    }
}
fullScreen.onclick = () => {
    centerImg.classList.add('full');
    fullScreen.classList.add('full');
    secondScreen.classList.add('full-mode');
}
closeing.onclick = () => {
    fullScreen.classList.remove('full');
    centerImg.classList.remove('full');
    secondScreen.classList.remove('full-mode');
    secondScreen.classList.add("d-none");
}
share.onclick = () => {
    thirdScreen.classList.remove('d-none');
}
closes.onclick = () => {
    thirdScreen.classList.add('d-none');
}
brandShare.forEach((e) => {
    e.onclick = () => {
        thirdScreen.classList.add('d-none');
        secondScreen.classList.add("d-none");
    }
});
linkShare.value = location.href;