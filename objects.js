var playlist = new Object();
playlist['Pearl Jam'] = 'Black'



function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist {[artistName]: songTitle})
}
