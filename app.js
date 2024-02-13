
//Logo transition
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logostart'); //udgangspunktet
    logo.classList.add('logotransform'); //transform på størrelsen
});


//Menu til specifikationer
function toggleMenu(menuId, overlayId) {
    var menu = document.getElementById(menuId);
    var overlay = document.getElementById(overlayId);

    if (menu.classList.contains("closed")) {
        if (window.innerWidth <= 600) {
            menu.style.width = "70vw"; // Set width to 80vw for screens <= 600px
        } else {
            menu.style.width = "500px"; // Default width for larger screens
        }
        menu.classList.remove("closed");
        overlay.style.display = "block";
    } else {
        menu.style.width = "0";
        menu.classList.add("closed");
        overlay.style.display = "none";
    }
}

// Adjust menu width on window resize
window.addEventListener('resize', function() {
    var menu = document.getElementById('menuId');
    
    if (menu) { // Check if the 'menu' element exists
        if (!menu.classList.contains("closed")) {
            if (window.innerWidth <= 600) {
                menu.style.width = "70vw"; // Set width to 80vw for screens <= 600px
            } else {
                menu.style.width = "500px"; // Default width for larger screens
            }
        }
    }
});

// Change the function assigned to each section
for (let i = 1; i <= 8; i++) {
    window['toggleMenu' + i] = function () {
        toggleMenu('menu' + i, 'overlay' + i);
    };
}




document.addEventListener('scroll', function () {
    var nav = document.getElementById('upper-nav');
    var visibleSection = null;

    for (var i = 1; i <= 8; i++) {
        var sectionId = 'section' + i;
        var section = document.getElementById(sectionId);

        if (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight  && rect.bottom > window.innerHeight ) {
                visibleSection = section;

                // Reset the color of all watch elements
                for (var j = 1; j <= 8; j++) {
                    var allWatchElements = document.querySelectorAll('#watch' + j);
                    allWatchElements.forEach(function (watchElement) {
                        watchElement.style.color = ''; // Reset color to default
                    });
                }

                // Set the color of current section's watch elements
                var watchElements = document.querySelectorAll('#watch' + i);
                watchElements.forEach(function (watchElement) {
                    watchElement.style.color = 'white';
                });

                break; // Exit the loop if a visible section is found
            }
        }
    }

    if (visibleSection) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});



  
  




