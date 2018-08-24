var playlist = {
  "Pearl Jam": "Black"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {artistName: songTitle})
}
