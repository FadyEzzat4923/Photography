
let openInfo = document.querySelectorAll(".text2");
openInfo.forEach((e) => {
    e.onclick = () => {
        window.open('./portfolio3.html', '_self')
    }
});
let centerImg = document.querySelector('.center-img img')
let image = document.querySelectorAll(".portfolio1-show img");
let secondScreen = document.querySelector(".second-screen");
let openImg = document.querySelectorAll(".text1");
let fullScreen = document.querySelector(".full-screen");
let share = document.querySelector(".share");
let closeing = document.querySelector(".close");
let linkShare = document.querySelector('.third-screen input');
let thirdScreen = document.querySelector('.third-screen');
let closes = document.querySelector('.xcolse')
let brandShare = document.querySelectorAll('.brand-icon');
for (let i = 0; i < image.length; i++) {
    openImg[i].onclick = () => {
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

$(() => {
    for (let i = 0; i < $('.caption').length; i++) {
        $('.caption').eq(i).fadeOut(0);
    }
    for (let i = 0; i < $('.portfolio1-show').length; i++) {
        $('.portfolio1-show').eq(i).hover(() => {
            $('.caption').eq(i).fadeIn(400);
        }, () => {
            $('.caption').eq(i).fadeOut(400);
        })
    }
})
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