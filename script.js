var media = document.querySelector('video, audio');
Array.prototype.forEach.call(media, function(player) {
   player.playbackRate = prompt('Speed?','');
});
