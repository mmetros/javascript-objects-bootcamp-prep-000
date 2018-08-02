var playlist = {
  drake: ["Jumpman", "What's My Name?", "Sacrifices"],
  future: ["Percocet & Stripper Joint", "I'm Tha Plug"]
};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}

updatePlaylist(playlist,"drake", "schemin up")

console.log(playlist)