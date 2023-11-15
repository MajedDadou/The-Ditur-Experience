// window.addEventListener('scroll', function() {
//     let offset = window.scrollY;
//     document.getElementById('section1').style.backgroundPositionY = offset * 0.5 + 'px';
//     document.getElementById('section2').style.backgroundPositionY = offset * 0.5 + 'px';
// });



//Logo transition
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logostart');
    logo.classList.add('logotransform');
});

//Burgermenu
// function toggleMenu1() {

//     var menu1 = document.getElementById("menu1");
//     var overlay = document.getElementById("overlay1");

//     if (menu1.classList.contains("closed")) {
//         menu1.style.width = "500px";
//         menu1.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu1.style.width = "0";
//         menu1.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }


// function toggleMenu2() {

//     var menu2 = document.getElementById("menu2");
//     var overlay = document.getElementById("overlay2");

//     if (menu2.classList.contains("closed")) {
//         menu2.style.width = "500px";
//         menu2.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu2.style.width = "0";
//         menu2.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }

// function toggleMenu3() {

//     var menu3 = document.getElementById("menu3");
//     var overlay = document.getElementById("overlay3");

//     if (menu3.classList.contains("closed")) {
//         menu3.style.width = "500px";
//         menu3.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu3.style.width = "0";
//         menu3.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }
// function toggleMenu4() {

//     var menu4 = document.getElementById("menu4");
//     var overlay = document.getElementById("overlay4");

//     if (menu4.classList.contains("closed")) {
//         menu4.style.width = "500px";
//         menu4.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu4.style.width = "0";
//         menu4.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }

// function toggleMenu5() {

//     var menu5 = document.getElementById("menu5");
//     var overlay = document.getElementById("overlay5");

//     if (menu5.classList.contains("closed")) {
//         menu5.style.width = "500px";
//         menu5.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu5.style.width = "0";
//         menu5.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }

// function toggleMenu6() {

//     var menu6 = document.getElementById("menu6");
//     var overlay = document.getElementById("overlay6");

//     if (menu6.classList.contains("closed")) {
//         menu6.style.width = "500px";
//         menu6.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu6.style.width = "0";
//         menu6.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }

// function toggleMenu7() {

//     var menu7 = document.getElementById("menu7");
//     var overlay = document.getElementById("overlay7");

//     if (menu7.classList.contains("closed")) {
//         menu7.style.width = "500px";
//         menu7.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu7.style.width = "0";
//         menu7.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }

// function toggleMenu8() {

//     var menu8 = document.getElementById("menu8");
//     var overlay = document.getElementById("overlay8");

//     if (menu8.classList.contains("closed")) {
//         menu8.style.width = "500px";
//         menu8.classList.remove("closed");
//         overlay.style.display = "block";

//     } else {
//         menu8.style.width = "0";
//         menu8.classList.add("closed");
//         overlay.style.display = "none";
//     }
// }


function toggleMenu(menuId, overlayId) {
    var menu = document.getElementById(menuId);
    var overlay = document.getElementById(overlayId);

    if (menu.classList.contains("closed")) {
        menu.style.width = "28vw";
        menu.classList.remove("closed");
        overlay.style.display = "block";
    } else {
        menu.style.width = "0";
        menu.classList.add("closed");
        overlay.style.display = "none";
    }
}


for (let i = 1; i <= 8; i++) {
    window['toggleMenu' + i] = function () {
        toggleMenu('menu' + i, 'overlay' + i);
    };
}



//Knap til kollektion
document.getElementById("knap").addEventListener("click", function () {
    var button = document.querySelector("#knap button");
    var globalHref = button.getAttribute("data-global-href");

    // Kontroller, om data-global-href eksisterer, før du forsøger at omdirigere
    if (globalHref) {
        window.location.href = globalHref;
    }
});


// document.addEventListener('scroll', function () {
//     var nav = document.getElementById('navigation');

//     // Check the visibility of each section
//     for (var i = 1; i <= 8; i++) {
//         var sectionId = 'section' + i;
//         var section = document.getElementById(sectionId);

//         if (section) {
//             var rect = section.getBoundingClientRect();

//             if (rect.top <= window.innerHeight / 1 && rect.bottom > window.innerHeight / 1) {
//                 // Section is in the viewport
//                 nav.style.display = 'block';

//                 return; // Exit the loop if a visible section is found
//             }
//         }
//     }

//     // nav.style.display = 'none';
// });




document.addEventListener('scroll', function () {
    var nav = document.getElementById('upper-nav');
    // Check the visibility of each section
    for (var i = 1; i <= 8; i++) {
        var sectionId = 'menu' + i;
        var section = document.getElementById(sectionId);
        if (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 1 && rect.bottom >= window.innerHeight / 1) {
                // Section is in the viewport
                nav.style.display = 'block';
            } else if (rect.bottom >= window.innerHeight) {
                // Section is in the viewport
                nav.style.display = 'none';
            }
        }
       
    }
}

);