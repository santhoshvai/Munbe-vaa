function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

function loadAudio(path, src) {
    if ( typeof Audio != "undefined") {

        var audioUrl = path + src;

        var audio = new Audio();
        audio.src = audioUrl;
        audio.type = 'audio/mpeg';
        audio.preload = "auto";
        audio.load();
        return audio;
    } else {
        alert('Sorry! Cannot play audio via HTML5 in your browser, upgrade to a new browser');
    }
}

function onStartPlay() {
    var playIcon = '\u25B6 ';
    var munbeVaaElem = $('.la-anim-12');
    document.title = playIcon + document.title; // like youtube title
    // $('#playBtnDiv').addClass('flipOutX');
    $("#playBtnDiv").fadeOut( "fast" ); // incase the before the animation fails
    munbeVaaElem.addClass('la-animate');
    $(".language").addClass('anim lang');
    var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    for ( var i = 0; i <= 6; i+=1 ) {
      var idx = i+1;
      var nxtIdx = i+2;
      var currentVerse = $(".lyric" + idx);
      var nextVerse = $(".lyric" + nxtIdx);
      currentVerse.addClass('anim ' + arr[i]);
     }
}
var main = function () {

    var audio =  new Howl({
        urls: ['http://www.santhosh.info/Munbe-vaa/Media/Amazon-Sample.mp3', 'http://www.santhosh.info/Munbe-vaa/Media/Amazon-Sample.ogg', 'http://www.santhosh.info/Munbe-vaa/Media/Amazon-Sample.wav'],
        onload: function () {
            $('.loading').hide();
            $( "#playBtnDiv" ).fadeIn( "slow" );
            console.log('loaded-Music!');
        },
        onplay: function () {
            console.log('started-play!');
            onStartPlay();
        },
        onend: function() {
          document.title = document.title.slice(2);
          $('.share-container').addClass('fadeInRight'); // show the share button
          $('#shopDiv').addClass('fadeInLeft');
          console.log('Finished!');
        }
      });
  var playBtn  = $('.playBtn');

  // var audio = loadAudio('Media/', 'Amazon-Sample.mp3');

  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
    var animationEvent = whichAnimationEvent();
    var transitionEvent = whichTransitionEvent();
  // DETECT TRANSITION END

  playBtn.click(function() {
    audio.play();
  });
}


$(document).ready(main);
