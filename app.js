
//Logo transition
document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logostart'); //udgangspunktet
    logo.classList.add('logotransform'); //transform på størrelsen
});


//Menu til specifikationer
function toggleMenu(menuId, overlayId) {
    var menu = document.getElementById(menuId);
    var overlay = document.getElementById(overlayId);

    if (menu.classList.contains("closed")) { //Hvis menuen er lukket skal den åbnes via. følgende elementer:
        menu.style.width = "40%"; //Størrelsen på menuen der kommer fra højre
        menu.classList.remove("closed");
        overlay.style.display = "block"; //Gør baggrunden sort
    } else { //Hvis den er åben så:
        menu.style.width = "0"; //Størrelse
        menu.classList.add("closed"); //Luk menu
        overlay.style.display = "none"; //Den sorte baggrunden fjerner sig
    }
}

//Ændre trykfunktionen på hver section m. urerne
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
        nav.style.transition = 'ease-in 1s';

    } else {
        nav.style.display = 'none';
    }
});



  
  




