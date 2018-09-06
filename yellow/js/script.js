/*************** ONLOAD ****************/

var sound = document.getElementById('sound');
var audio;
window.onload = function () {
    audio = new Audio();
    audio.src = "sound/background-music.mp3";
    audio.loop = true;
    audio.value = '';
    // audio.play();
};

$('body').hide().fadeIn(1000);


/*************** END ONLOAD ****************/


/****** Audio JS ******/

$(function () {
    // Setup the player to autoplay the next track
    var a = audiojs.createAll({
        trackEnded: function () {
            var next = $('ol li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
        }
    });

    // Load in the first track
    var audio = a[0];
    first = $('ol a').attr('data-src');
    $('ol li').first().addClass('playing');
    audio.load(first);

    // Load in a track on click
    $('ol li').click(function (e) {
        e.preventDefault();
        $(this).addClass('playing').siblings().removeClass('playing');
        audio.load($('a', this).attr('data-src'));
        audio.play();
    });
    // Keyboard shortcuts
    $(document).keydown(function (e) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        // right arrow
        if (unicode == 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.click();
            // back arrow
        } else if (unicode == 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ol li').last();
            prev.click();
            // spacebar
        } else if (unicode == 32) {
            audio.playPause();
        }
    })
});

/****** Audio JS ******/


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
            window.location = 'index.html';
        }, 1200);
    });

    music.click(function link() {
        music.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = 'html/music.html';
        }, 1200);
    });

    video.click(function link() {
        video.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = 'html/video.html';
        }, 1200);
    });

    gallery.click(function link() {
        gallery.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = 'html/gallery.html';
        }, 1200);
    });

    contact.click(function link() {
        contact.toggleClass('animated bounceOut');
        // goLink.play();
        window.setTimeout(function () {
            window.location = 'html/contact.html';
        }, 1200);
    });

});

/**************END BUTTONS HOVER AND CLICK ANIMATIONS ***************/


/**********PLAY AND PAUSE BUTTON***********/

var playBack = $('#play-back');
playBack.click(function () {
    if (audio.paused) {
        audio.play();
        audio.value = 1;
        this.src = 'images/play4.gif';
        $(this).css({'opacity': '1'});
        $('#mute-play').text('mute');
    } else {
        audio.pause();
        audio.value = 2;
        this.src = 'images/mute4.png';
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

    else if(audio.value == 2){
        audio.pause();
    }

    else if(audio.value != 0){
        audio.play();
    }
}

/************** Youtube I Frame End***************/


/**** Main Menu Click ****/

$('.main-menu-header').click(function () {
    $('.main-menu-block').toggleClass('home-menu-open');
    $('.arrowDown').toggleClass('button-rotate');
    if ($('.arrowDown').hasClass('button-rotate')) {
        $('.arrowDown').attr('src', 'images/arrow-up.png');
    } else {
        $('.arrowDown').attr('src', 'images/arrow2.gif');
    }
    // $('.main-menu-ul-block').toggleClass('display-ul');
    $('.upcoming').toggleClass('upcoming-animate');
    $('.playlist').toggleClass('playlist-animate');
    $('.prize').toggleClass('prize-animate');
    $('.story').toggleClass('story-animate');
    $('.members').toggleClass('members-animate');
});


$('.upcoming').hover(function () {
    $('.upcoming-icon').toggleClass('animated wobble');
});

$('.playlist').hover(function () {
    $('.playlist-icon').toggleClass('animated wobble');
});

$('.prize').hover(function () {
    $('.prize-icon').toggleClass('animated wobble');
});

$('.story').hover(function () {
    $('.story-icon').toggleClass('animated wobble');
});

$('.members').hover(function () {
    $('.members-icon').toggleClass('animated wobble');
});

/**** End Main Menu Click ****/


/**** Members ****/

$('#members').click(function () {
    $('.members').html('<ul class="members-ul">\n' +
        '<li class="levon"><a href="html/levon.html" class="members-a">Levon</a></li>\n' +
        '<li class="william"><a href="html/william.html" class="members-a">William</a></li>\n' +
        '<li class="sergey"><a href="html/sergey.html">Sergey</a></li>\n' +
        '<li class="vahagn"><a href="html/vahagn.html" class="members-a-min">Vahagn</a></li>\n' +
        '<li class="erik"><a href="html/erik.html" class="members-a-min">Erik</a></li>\n' +
        '</ul>');
});

if($('#main-menu-block').hasClass('home-menu-open')){
    alert(123);
}

/**** Members ****/






