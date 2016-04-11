var song_list = {
	artist_1: "Blink-182", title_1: "I Miss You", path_1: "audio/Blink-182-IMissYou.mp3"
};
var curr_song = 1;

function set_song_title(song_number) {
	var song_title = song_list["title_" + song_number];
	var html_song_tile_placeholder = document.getElementById("song-title").innerHTML = song_title;
}

function set_artist_name(song_number) {
	var song_title = song_list["artist_" + song_number];
	var html_song_tile_placeholder = document.getElementById("song-artist").innerHTML = song_title;
}

window.onload = function () {
	document.getElementById("now-playing").src = "audio/Blink-182-IMissYou.mp3";
	document.getElementById("player").load();
	set_song_title(1);
	set_artist_name(1);
};