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

//Knap for at vise video
    // Knap til video
    document.getElementById('fremvideo').addEventListener('click', function() {
        var video = document.getElementById('videoPlayer');
        
        video.style.visibility = 'visible';  // Gør videoen synlig
        video.play();  // Starter afspilning af videoen
        video.setAttribute('controls', true); // Viser kontrolknapper (play, pause, osv.)
        this.style.display = 'none';  // Skjuler knappen

        // Flytter visningen til videoen
        video.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

