# html5-video-playback-rate
A bookmarklet for tweaking playback rate of html5 videos.

[Drag and drop to bookmarks bar to install](javascript:(function() {var video = document.querySelector('video'); video.playbackRate = prompt("Speed?",""); })();). Clicking the bookmarlet on a page with a video will open a prompt asking for playback speed. You can change speeds as many times as you like. Speeds slower than 0.4x or 0.5x and speeds greater than 4x will play without audio (this is normal behavior for HTML5 video.)

Works on any HTML5 video player. *Note*: Will only work on the first video element in a page.
