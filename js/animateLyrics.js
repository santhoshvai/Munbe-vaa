$.Velocity.Sequences.fadeInU = function(element, options){
  var duration = options.duration || 800;
  var delay =  options.delay || 1000;
  $.Velocity.animate(element, {translateY: [0, 100], opacity: [1, 0]}, {
    duration: duration,
    delay: delay
  });
}

function animateLyricsAfterPlay(arr) {

    $(".language").velocity({ opacity: 1}, "slow");
    arr[0].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 5600, duration: 1000 });
    arr[1].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 8300, duration: 1000 });
    arr[2].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 11700, duration: 1000 });
    arr[3].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 15500, duration: 1000 });
    arr[4].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 18500, duration: 1000 });
    arr[5].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 26100, duration: 1000 });
    arr[6].velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: 30000, duration: 1000 });
}
