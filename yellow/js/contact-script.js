/*************** ONLOAD ****************/

var sound = document.getElementById('sound');
var audio;
window.onload = function () {
    audio = new Audio();
    audio.src = "../sound/background-music.mp3";
    audio.loop = true;
    // audio.play();
};

$('body').hide().fadeIn(1000);


/*************** END ONLOAD ****************/


/************** BUTTONS HOVER AND CLICK ANIMATIONS ***************/
$(document).ready(function () {

    var home = $('#home');
    var music = $('#music');
    var video = $('#video');
    var gallery = $('#gallery');
    var contact = $('#contact');
    var goLink = document.getElementById('go-link');

    $(".social").hover(function () {
        $(this).toggleClass('animated pulse');
    });

    home.click(function link() {
        home.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = '../index.html';
        }, 1200);
    });

    music.click(function link() {
        music.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = '../html/music.html';
        }, 1200);
    });

    video.click(function link() {
        video.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = '../html/video.html';
        }, 1200);
    });

    gallery.click(function link() {
        gallery.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = '../html/gallery.html';
        }, 1200);
    });

    contact.click(function link() {
        contact.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = '../html/contact.html';
        }, 1200);
    });

});

/**************END BUTTONS HOVER AND CLICK ANIMATIONS ***************/


/**********PLAY AND PAUSE BUTTON***********/

var playBack = $('#play-back');
playBack.click(function () {
    if (audio.paused) {
        audio.play();
        this.src = '../images/play4.gif';
        $(this).css({'opacity': '1'});
        $('#mute-play').text('mute');
    } else {
        audio.pause();
        this.src = '../images/mute4.png';
        $(this).css({'opacity': '0.5'});
        $('#mute-play').text('play');
    }
});

/**********END PLAY AND PAUSE BUTTON***********/


/************** Youtube I Frame ***************/

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'CI2NeSJSD0Q',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerStateChange() {
    if (player.getPlayerState() === 1 || player.getPlayerState() === 3 || player.getPlayerState() === 5) {
        audio.pause();
    }
}

/************** Youtube I Frame End***************/