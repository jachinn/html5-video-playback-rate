var media = document.querySelectorAll('video, audio');
var rate = prompt('Speed? Currently playing back at ' + media[0].playbackRate + 'x.','');
Array.prototype.forEach.call(media, function(player) {
   if (rate != 0) {
      player.playbackRate = rate;
   } else {
      player.playbackRate = 1;
   }
});
