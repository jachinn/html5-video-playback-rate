var media = document.querySelectorAll('video, audio');
var rate = prompt('Speed?','');
Array.prototype.forEach.call(media, function(player) {
   player.playbackRate = rate;
});
