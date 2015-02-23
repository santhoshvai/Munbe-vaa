var main = function () {
  var playIcon = '\u25B6 ';
  var playBtn  = $('.playBtn');
  var munbeVaaElem = $('.la-anim-12');
  var inProgress = false;
  var soundID = "Amazon-Sample";
  // load sound
  createjs.Sound.registerSound("media/Amazon-Sample.mp3", soundID);
  function playSound () {
    createjs.Sound.play(soundID);
  }
  playBtn.click(function() {
    if( inProgress ) return false;
    document.title = playIcon + document.title; // like youtube title
    inProgress = true;
    munbeVaaElem.addClass('la-animate');
    /* reset page after the sound has finished */
    // execute given function after the transition completes
    munbeVaaElem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
        munbeVaaElem.removeClass( 'la-animate' );
        document.title = document.title.slice(2);
        inProgress = false;
    });
    playSound();
    $(".language").addClass('anim lang');
    var arr = ['one', 'two', 'three', 'four', 'five'];
    for ( var i = 0; i <= 1; i+=1 ) {
      var idx = i+1;
      var nxtIdx = i+2;
      var currentVerse = $(".lyric" + idx);
      var nextVerse = $(".lyric" + nxtIdx);
      currentVerse.addClass('anim ' + arr[i]);
      currentVerse.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            nextVerse.addClass('anim ' + arr[i+1]));
    }

  });
}


$(document).ready(main);
