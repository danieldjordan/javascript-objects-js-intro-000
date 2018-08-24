var playlist = {
  "Pearl Jam": "Black"
}

function updatePlaylist(targetObject, artistName, songTitle){
  return Object.assign({}, targetObject, {[artistName]: songTitle})
}
