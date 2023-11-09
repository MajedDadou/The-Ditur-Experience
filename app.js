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

document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logostart');
    logo.classList.add('logotransform');
});
