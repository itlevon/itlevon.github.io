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

/************** END BUTTONS HOVER AND CLICK ANIMATIONS ***************/


/********** PLAY AND PAUSE BUTTON ***********/

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

/********** END PLAY AND PAUSE BUTTON ***********/

/******* Photo Count *******/

$.getScript('../js/mezzo.js',function () {
    console.log($(photoCount)[0]);
});

/******* Photo Count *******/

/****** Slider ******/

/*mezzo*/

let i = 0;
let mezzo = document.getElementById('gallery-mezzo');
let arr = ['2.jpg', '3.jpg', '4.jpg', '5.jpg','1.jpg'];

let theInterval;

function startSlide() {
    theInterval = setInterval(function () {
        mezzo.setAttribute('src', '../photos/mezzo/slide/' + arr[i]);
        i++;
        if (i === arr.length){
            i = 0;
        }
    }, 1000);
}

function stopSlide() {
    clearInterval(theInterval);
    mezzo.setAttribute('src', '../photos/mezzo/slide/1.jpg');
}

$(function () {
    stopSlide();
    $('#mezzo-div').hover(function () {
        startSlide();
    }, function () {
        stopSlide();
    })
});


/*mezzo*/

/*retro*/



let i1 = 0;
let retro = document.getElementById('gallery-retro');
let arr1 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval1;

function startSlide1() {
    theInterval1 = setInterval(function () {
        retro.setAttribute('src', '../photos/retro/slide/' + arr1[i1]);
        i1++;
        if (i1 === arr1.length){
            i1 = 0;
        }
    }, 1000);
}

function stopSlide1() {
    clearInterval(theInterval1);
    retro.setAttribute('src', '../photos/retro/1.jpg');
}

$(function () {
    stopSlide1();
    $('#retro-div').hover(function () {
        startSlide1();
    }, function () {
        stopSlide1();
    })
});


/*retro*/


/*Club 12*/



let i2 = 0;
let club12 = document.getElementById('gallery-12');
let arr2 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval2;

function startSlide2() {
    theInterval2 = setInterval(function () {
        club12.setAttribute('src', '../photos/12-club/slide/' + arr2[i2]);
        i2++;
        if (i2 === arr2.length){
            i2 = 0;
        }
    }, 1000);
}

function stopSlide2() {
    clearInterval(theInterval2);
    club12.setAttribute('src', '../photos/12-club/1.jpg');
}

$(function () {
    stopSlide2();
    $('#12-div').hover(function () {
        startSlide2();
    }, function () {
        stopSlide2();
    })
});


/*Club 12*/


/*BD*/


let i3 = 0;
let bd = document.getElementById('gallery-bd');
let arr3 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval3;

function startSlide3() {
    theInterval3 = setInterval(function () {
        bd.setAttribute('src', '../photos/second-birthday/slide/' + arr3[i3]);
        i3++;
        if (i3 === arr3.length){
            i3 = 0;
        }
    }, 1000);
}

function stopSlide3() {
    clearInterval(theInterval3);
    bd.setAttribute('src', '../photos/second-birthday/1.jpg');
}

$(function () {
    stopSlide3();
    $('#bd-div').hover(function () {
        startSlide3();
    }, function () {
        stopSlide3();
    })
});


/*BD*/


/*Bobs*/


let i4 = 0;
let bobs = document.getElementById('gallery-bobs');
let arr4 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval4;

function startSlide4() {
    theInterval4 = setInterval(function () {
        bobs.setAttribute('src', '../photos/bobs/slide/' + arr4[i4]);
        i4++;
        if (i4 === arr4.length){
            i4 = 0;
        }
    }, 1000);
}

function stopSlide4() {
    clearInterval(theInterval4);
    bobs.setAttribute('src', '../photos/bobs/1.jpg');
}

$(function () {
    stopSlide4();
    $('#bobs-div').hover(function () {
        startSlide4();
    }, function () {
        stopSlide4();
    })
});


/*Bobs*/

/*Arevik*/


let i5 = 0;
let arevik = document.getElementById('gallery-arevik');
let arr5 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval5;

function startSlide5() {
    theInterval5 = setInterval(function () {
        arevik.setAttribute('src', '../photos/arevik/slide/' + arr5[i5]);
        i5++;
        if (i5 === arr5.length){
            i5 = 0;
        }
    }, 1000);
}

function stopSlide5() {
    clearInterval(theInterval5);
    arevik.setAttribute('src', '../photos/arevik/1.jpg');
}

$(function () {
    stopSlide5();
    $('#arevik-div').hover(function () {
        startSlide5();
    }, function () {
        stopSlide5();
    })
});


/*Arevik*/

/*Lennon*/


let i6 = 0;
let lennon = document.getElementById('gallery-lennon');
let arr6 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval6;

function startSlide6() {
    theInterval6 = setInterval(function () {
        lennon.setAttribute('src', '../photos/lennon/slide/' + arr6[i6]);
        i6++;
        if (i6 === arr6.length){
            i6 = 0;
        }
    }, 1000);
}

function stopSlide6() {
    clearInterval(theInterval6);
    lennon.setAttribute('src', '../photos/lennon/1.jpg');
}

$(function () {
    stopSlide6();
    $('#lennon-div').hover(function () {
        startSlide6();
    }, function () {
        stopSlide6();
    })
});


/*Lennon*/


/*Lennon*/


let i7 = 0;
let helloween = document.getElementById('gallery-helloween');
let arr7 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval7;

function startSlide7() {
    theInterval7 = setInterval(function () {
        helloween.setAttribute('src', '../photos/helloween/slide/' + arr7[i7]);
        i7++;
        if (i7 === arr7.length){
            i7 = 0;
        }
    }, 1000);
}

function stopSlide7() {
    clearInterval(theInterval7);
    helloween.setAttribute('src', '../photos/helloween/1.jpg');
}

$(function () {
    stopSlide7();
    $('#helloween-div').hover(function () {
        startSlide7();
    }, function () {
        stopSlide7();
    })
});


/*Lennon*/


/*Kami*/


let i8 = 0;
let kami = document.getElementById('gallery-kami');
let arr8 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval8;

function startSlide8() {
    theInterval8 = setInterval(function () {
        kami.setAttribute('src', '../photos/kami/slide/' + arr8[i8]);
        i8++;
        if (i8 === arr8.length){
            i8 = 0;
        }
    }, 1000);
}

function stopSlide8() {
    clearInterval(theInterval8);
    kami.setAttribute('src', '../photos/kami/1.jpg');
}

$(function () {
    stopSlide8();
    $('#kami-div').hover(function () {
        startSlide8();
    }, function () {
        stopSlide8();
    })
});


/*Kami*/

/*Calumet*/


let i9 = 0;
let calumet = document.getElementById('gallery-calumet');
let arr9 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval9;

function startSlide9() {
    theInterval9 = setInterval(function () {
        calumet.setAttribute('src', '../photos/calumet/slide/' + arr9[i9]);
        i9++;
        if (i9 === arr9.length){
            i9 = 0;
        }
    }, 1000);
}

function stopSlide9() {
    clearInterval(theInterval9);
    calumet.setAttribute('src', '../photos/calumet/1.jpg');
}

$(function () {
    stopSlide9();
    $('#calumet-div').hover(function () {
        startSlide9();
    }, function () {
        stopSlide9();
    })
});


/*Calumet*/

/*Calumet*/


let i10 = 0;
let stop = document.getElementById('gallery-stop');
let arr10 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval10;

function startSlide10() {
    theInterval10 = setInterval(function () {
        stop.setAttribute('src', '../photos/stop/slide/' + arr10[i10]);
        i10++;
        if (i10 === arr10.length){
            i10 = 0;
        }
    }, 1000);
}

function stopSlide10() {
    clearInterval(theInterval10);
    stop.setAttribute('src', '../photos/stop/1.jpg');
}

$(function () {
    stopSlide10();
    $('#stop-div').hover(function () {
        startSlide10();
    }, function () {
        stopSlide10();
    })
});


/*Calumet*/

/*Other*/


let i11 = 0;
let other = document.getElementById('gallery-other');
let arr11 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let theInterval11;

function startSlide11() {
    theInterval11 = setInterval(function () {
        other.setAttribute('src', '../photos/other/slide/' + arr11[i11]);
        i11++;
        if (i11 === arr11.length){
            i11 = 0;
        }
    }, 1000);
}

function stopSlide11() {
    clearInterval(theInterval11);
    other.setAttribute('src', '../photos/other/1.jpg');
}

$(function () {
    stopSlide11();
    $('#other-div').hover(function () {
        startSlide11();
    }, function () {
        stopSlide11();
    })
});


/*Other*/

/****** Slider ******/





