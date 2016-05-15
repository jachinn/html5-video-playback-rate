# html5-video-playback-rate
A bookmarklet for tweaking playback rate of HTML5 videos.

Add as a new bookmark: 
`javascript:(function() {var script = document.createElement('script'); script.src = https://github.com/jachinn/html5-video-playback-rate/script.js; document.body.appendChild(script);})();`

Clicking the bookmarlet on a page with a video will open a prompt asking for playback speed. You can change speeds as many times as you like. Speeds slower than 0.4x or 0.5x and speeds greater than 4x will play without audio (this is normal behavior for HTML5 video.)

Works on any HTML5 video player. *Note*: Will only work on the first video element in a page.
