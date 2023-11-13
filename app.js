// window.addEventListener('scroll', function() {
//     let offset = window.scrollY;
//     document.getElementById('section1').style.backgroundPositionY = offset * 0.5 + 'px';
//     document.getElementById('section2').style.backgroundPositionY = offset * 0.5 + 'px';
// });

// window.addEventListener('scroll', function () {
//     let offset = window.scrollY;
//     for (let i = 1; i <= 10; i++) {
//         document.getElementById('section' + i).style.backgroundPositionY = offset * 0.0 + 'px';
//         // document.getElementById('section2').style.backgroundPositionY = offset * 0.1 + 'px';
//         // document.getElementById('section3').style.backgroundPositionY = offset * -0.1 + 'px';
//     }
// });

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






document.addEventListener('scroll', function () {
    var nav = document.getElementById('upper-nav');

    // Check the visibility of each section
    for (var i = 1; i <= 8; i++) {
        var sectionId = 'section' + i;
        var section = document.getElementById(sectionId);

        if (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight  && rect.bottom >= window.innerHeight / 1) {
                // Section is in the viewport
                nav.style.display = 'block';
                return; // Exit the loop if a visible section is found
            }
        }
    }

    nav.style.display = 'none';
});



