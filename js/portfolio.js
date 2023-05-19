let btnBar = document.querySelectorAll(".portfolio-1 ul li");
let portfolioImg = document.querySelectorAll(".portfolio1-show");

btnBar[0].classList.add("active");
portfolioImg.forEach((e) => {
    e.classList.add("active");
});
for (let i = 0; i < btnBar.length; i++) {
    btnBar[i].onclick = () => {
        btnBar.forEach((e) => {
            e.classList.remove("active")
        })
        portfolioImg.forEach((e) => {
            e.classList.remove("active");
        })
        btnBar[i].classList.add("active")
        if (i === 0) {
            portfolioImg.forEach((e) => {
                e.classList.add("active");
            });
        }
        if (i === 1) {
            portfolioImg[0].classList.add("active");
            portfolioImg[4].classList.add("active");
        } if (i === 2) {
            portfolioImg[1].classList.add("active");
            portfolioImg[7].classList.add("active");
        } if (i === 3) {
            portfolioImg[2].classList.add("active");
            portfolioImg[5].classList.add("active");
        } if (i === 4) {
            portfolioImg[3].classList.add("active");
            portfolioImg[6].classList.add("active");
        }
    }
}
