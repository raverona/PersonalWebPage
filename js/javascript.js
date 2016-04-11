var song_list = {
	artist_1: "Blink-182",					title_1: "I Miss You",				path_1: "audio/Blink-182-IMissYou.mp3",
	artist_2: "Boys Like Girls",			title_2: "Two Is Better Than One",	path_2: "audio/BoysLikeGirls-TwoIsBetterThanOne.mp3"
};
var curr_song = 2;

function set_song_title(song_number) {
	var song_title = song_list["title_" + song_number];
	document.getElementById("song-title").innerHTML = song_title;
}

function set_artist_name(song_number) {
	var song_title = song_list["artist_" + song_number];
	document.getElementById("song-artist").innerHTML = song_title;
}

function next_song() {
	
}

function previous_song() {

}

window.onload = function () {
	document.getElementById("now-playing").src = song_list["path_" + curr_song];
	document.getElementById("player").load();
	set_song_title(curr_song);
	set_artist_name(curr_song);
};