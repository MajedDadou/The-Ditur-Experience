
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




