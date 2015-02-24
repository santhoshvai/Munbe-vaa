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
function playAudio(audioInstance) {
    audioInstance.play();
}
var main = function () {
  var playIcon = '\u25B6 ';
  var playBtn  = $('.playBtn');
  var munbeVaaElem = $('.la-anim-12');
  var shareElem = $('.share-container');
  var inProgress = false;
  var audio = loadAudio('Media/', 'Amazon-Sample.mp3');
  // http://jshanley.github.io/blip/ // For mp3
    //   blip.sampleLoader()
    //     .samples({
    //     //'samp': 'Media/Amazon-Sample.mp3'
    //     'samp' : 'http://www.santhosh.info/Munbe-vaa/Media/Amazon-Sample.mp3'
    // })
    //     .load();


  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
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

    var animationEvent = whichAnimationEvent();

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

    var transitionEvent = whichTransitionEvent();
  // DETECT TRANSITION END
  playBtn.click(function() {
    if( inProgress ) return false;
    audio.play();
    inProgress = true;
    // play the mp3
    // var samp = blip.clip().sample('samp');
    // samp.play(0);
    // mp3 end
    // document.getElementById('audio').play();
    document.title = playIcon + document.title; // like youtube title
    inProgress = true;
    $('#playBtnDiv').addClass('flipOutX');
    $("#playBtnDiv").fadeOut( "fast" );
    munbeVaaElem.addClass('la-animate');
    /* reset page after the sound has finished */
    // execute given function after the transition completes
    munbeVaaElem.one(transitionEvent,
      function(e) {
        // munbeVaaElem.removeClass( 'la-animate' );
        document.title = document.title.slice(2);
        shareElem.addClass('fadeInRight'); // show the share button
        $('#shopDiv').addClass('fadeInLeft');
        inProgress = false;
    });
    // shareElem.addClass('fadeInRight'); // show the share button
    $(".language").addClass('anim lang');
    var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    for ( var i = 0; i <= 6; i+=1 ) {
      var idx = i+1;
      var nxtIdx = i+2;
      var currentVerse = $(".lyric" + idx);
      var nextVerse = $(".lyric" + nxtIdx);
      currentVerse.addClass('anim ' + arr[i]);
     }
  });
}


$(document).ready(main);
