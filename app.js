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


// document.addEventListener('scroll', function () {
//     var nav = document.getElementById('upper-nav');

//     // Check the visibility of each section
//     for (var i = 1; i <= 8; i++) {
//         var sectionId = 'section' + i;
//         var section = document.getElementById(sectionId);

//         if (section) {
//             var rect = section.getBoundingClientRect();

//             if (rect.top <= window.innerHeight / 4 && rect.bottom >= window.innerHeight / 4) {
//                 // Section is in the viewport
//                 nav.style.display = 'block';
//             }else if (rect.bottom >= window.innerHeight) {
//                     // Section is in the viewport
//                     nav.style.display = 'none';
//                 }
//             }
//             // Add "bolder" class for sections 2 to 9
//             if (i >= 2 && i <= 9) {
//                 nav.classList.add('bolder');
//             } else {
//                 nav.classList.remove('bolder');
//             }

//             return; // Exit the loop if a visible section is found
//         }
//     }


//     // If no section is in the viewport, hide the navigation
//     // nav.style.display = 'none';
// );






// document.addEventListener('scroll', function () {
//     var nav = document.getElementById('upper-nav');

//     // Check the visibility of each section
//     for (var i = 1; i <= 8; i++) {
//         var sectionId = 'section' + i;
//         var section = document.getElementById(sectionId);

//         if (section) {
//             var rect = section.getBoundingClientRect();

//             if (rect.top <= window.innerHeight / 4 && rect.bottom >= window.innerHeight / 1) {
//                 // Section is in the viewport
//                 nav.style.display = 'block';

//                 // Add "bolder" class for sections 2 to 9
//                 if (i >= 2 && i <= 9) {
//                     nav.classList.add('bolder');
//                 } else {
//                     nav.classList.remove('bolder');
//                 }

//                 return; // Exit the loop if a visible section is found
//             }
//         }
//     }

//     // If no section is in the viewport, hide the navigation
//     nav.style.display = 'none';
// });



document.addEventListener('scroll', function () {
    var nav = document.getElementById('upper-nav');
    var visibleSection = null;

    // Check the visibility of each section
    for (var i = 1; i <= 8; i++) {
        var sectionId = 'section' + i;
        var section = document.getElementById(sectionId);

        if (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top <= window.innerHeight  && rect.bottom > window.innerHeight ) {
                // Section is fully in the viewport
                visibleSection = section;
                break; // Exit the loop if a visible section is found
            }

        }
    }

    // Show or hide the navigation based on section visibility
    if (visibleSection) {
        nav.style.display = 'block';
        nav.classList.add('bolder');
    } else {
        nav.style.display = 'none';
        nav.classList.remove('bolder');
    }
});
