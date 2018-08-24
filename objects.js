var playlist = new Object();

function updatePlaylist(targetObject, artistName, songTitle){
  return Object.assign({}, targetObject, {[artistName]: songTitle})
}
