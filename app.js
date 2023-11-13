// window.addEventListener('scroll', function() {
//     let offset = window.scrollY;
//     document.getElementById('section1').style.backgroundPositionY = offset * 0.5 + 'px';
//     document.getElementById('section2').style.backgroundPositionY = offset * 0.5 + 'px';
// });

window.addEventListener('scroll', function () {
    let offset = window.scrollY;
    for (let i = 1; i <= 10; i++) {
        document.getElementById('section' + i).style.backgroundPositionY = offset * 0.0 + 'px';
        // document.getElementById('section2').style.backgroundPositionY = offset * 0.1 + 'px';
        // document.getElementById('section3').style.backgroundPositionY = offset * -0.1 + 'px';
    }
});

//Logo transition
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logostart');
    logo.classList.add('logotransform');
});

/*Burgermenu*/
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var upperNav = document.getElementById('upperNav');

    // Adjust the scroll position value based on when you want the upperNav to be visible
    if (scrollPosition >= 500) {
        upperNav.style.display = 'block'; // Make the upperNav visible
    } else {
        upperNav.style.display = 'none'; // Hide the upperNav
    }
});