function velocityFadeInUp(elem, delayV, durationV) {
    elem.velocity({translateY: [0, 100], opacity: [1, 0]}, { delay: delayV, duration: durationV });
}

function animateLyricsAfterPlay(arr, isMobile) {
    $(".language").velocity({ opacity: 1}, "slow");
    velocityFadeInUp(arr[0], 5600, 1000);
    velocityFadeInUp(arr[1], 8300, 1000);
    velocityFadeInUp(arr[2], 11700, 1000);
    velocityFadeInUp(arr[3], 15500, 1000);
    velocityFadeInUp(arr[4], 18500, 1000);
    velocityFadeInUp(arr[5], 26100, 1000);
    velocityFadeInUp(arr[6], 30000, 1000);
}
