var main = function () {
  var playIcon = '\u25B6 ';
  var playBtn  = $('.playBtn');
  var munbeVaaElem = $('.la-anim-12');
  var shareElem = $('.share-container');
  var inProgress = false;
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
    document.getElementById('audio').play();
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
