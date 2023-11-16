
//Logo transition
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logostart');
    logo.classList.add('logotransform');
});



function toggleMenu(menuId, overlayId) {
    var menu = document.getElementById(menuId);
    var overlay = document.getElementById(overlayId);

    if (menu.classList.contains("closed")) {
        menu.style.width = "500px";
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





document.addEventListener('scroll', function () {
    var nav = document.getElementById('upper-nav');
    var visibleSection = null;

    for (var i = 1; i <= 8; i++) {
        var sectionId = 'section' + i;
        var section = document.getElementById(sectionId);

        if (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom > window.innerHeight) {
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
        nav.classList.add('bolder');
    } else {
        nav.style.display = 'none';
        nav.classList.remove('bolder');
    }
});



  
  




