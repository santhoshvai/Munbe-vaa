function velocityFadeInUp(a,e,t){a.velocity({translateY:[0,100],opacity:[1,0]},{delay:e,duration:t})}function velocityFade(a,e,t){a.velocity({opacity:1},{delay:e,duration:t})}function allFades(a){var e=[{e:a[0],p:{opacity:1},o:{duration:1e3,delay:5530}},{e:a[1],p:{opacity:1},o:{duration:1e3,delay:2370}},{e:a[2],p:{opacity:1},o:{duration:1e3,delay:2230}},{e:a[3],p:{opacity:1},o:{duration:1e3,delay:2640}},{e:a[4],p:{opacity:1},o:{duration:1e3,delay:2880}},{e:a[5],p:{opacity:1},o:{duration:1e3,delay:5560}},{e:a[6],p:{opacity:1},o:{duration:1e3,delay:2110}}];$.Velocity.RunSequence(e)}function allFadeIns(a){var e=[{e:a[0],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:5530}},{e:a[1],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:2370}},{e:a[2],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:2230}},{e:a[3],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:2640}},{e:a[4],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:2880}},{e:a[5],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:5560}},{e:a[6],p:{translateY:[0,100],opacity:[1,0]},o:{duration:1e3,delay:2110}}];$.Velocity.RunSequence(e)}

function animateLyricsAfterPlay(arr, isMobile) {
    $(".language").velocity({ opacity: 1}, "slow");
    if (isMobile) allFades(arr);
    else allFadeIns(arr);
    return;
}
