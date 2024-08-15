$(document).ready(function () {
    new fullpage('#fullpage', {
        sectionSelector: '.vertical-scrolling', // 修改html外層框架的class名稱
        navigation: false,                      // 是否會出現右側導覽按鈕
        verticalCentered: true,                 // 是否垂直置中
        menu: '#menu',
        anchors:['slide01', 'slide02', 'slide03','slide04', 'slide05', 'slide06'],
        credits: 	{enabled: false, label: ' ', position: 'right'},
        afterLoad: function (origin, destination, direction) {
            
        }
    });
});


document.getElementById('muteButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    var muteButtonImage = document.getElementById('muteButtonImage');
    if (video.muted) {
        video.muted = false;
        muteButtonImage.src = 'asset/image/volume.png';
    } else {
        video.muted = true;
        muteButtonImage.src = 'asset/image/mute.png';
    }
});

document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

document.getElementById('myVideo').addEventListener('pause', function () {
    var playButtonImage = document.getElementById('playButtonImage');
    playButtonImage.src = 'asset/image/play.png';
    playButtonImage.alt = 'Play';

    colorLayer = document.getElementById('video-bg_color');
    colorLayer.classList.remove('high-opacity');
    $("#home-text").show();
});

document.getElementById('myVideo').addEventListener('play', function() {
    var playButtonImage = document.getElementById('playButtonImage');
    playButtonImage.src = 'asset/image/stop.png';
    playButtonImage.alt = 'Stop';

    colorLayer = document.getElementById('video-bg_color');
    colorLayer.classList.add('high-opacity');
    $("#home-text").hide();
});

document.getElementById('replayButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.currentTime = 0;  // Set the current time to the start of the video
    video.play();           // Play the video from the beginning
});


document.getElementById('youtubeButton').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=dnkaZNy1QLw', '_blank'); // Replace with the actual YouTube URL
});
