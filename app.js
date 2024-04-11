const parallax_el = document.querySelectorAll(".parallax");
var rightDiv = document.querySelectorAll(".right");

window.addEventListener("mousemove", (e) => {
    var xValue = e.clientX - window.innerWidth/2;
    var yValue = e.clientY - window.innerHeight/2;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(${xValue * speedx}px)) translateY(calc(${yValue * speedy}px))`;
    });
});