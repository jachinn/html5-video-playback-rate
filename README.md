# html5-video-playback-rate
A bookmarklet for tweaking playback rate of HTML5 videos.

Add as a new bookmark: 
`javascript:(function() {var script = document.createElement('script'); script.src='https://github.com/jachinn/html5-video-playback-rate/script.js'; document.body.appendChild(script);})();`

Or, if your adblocker is keeping the bookmarklet from working, add:
`javascript:(function() {var media = document.querySelectorAll('video,audio'); var rate = prompt('Speed?', ''); Array.prototype.forEach.call(media, function(player) {player.playbackRate = rate;}); })();`

Clicking the bookmarlet on a page with a video or embedded audio will open a prompt asking for playback speed. You can change speeds as many times as you like. Speeds slower than 0.4x or 0.5x and speeds greater than 4x will play video without audio (this is normal behavior for HTML5 video.)

Works on any HTML5 video or audio player. Will change the playback speed of all media on the page.
