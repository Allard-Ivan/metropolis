function audioAutoPlay(id) {
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener('WeixinJSBridgeReady', function() {
        audio.play();
    });
}