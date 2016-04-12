var song_list = {
	artist_1: "Blink-182",					title_1: "I Miss You",				path_1: "audio/Blink-182-IMissYou.mp3",
	artist_2: "Boys Like Girls",			title_2: "Two Is Better Than One",	path_2: "audio/BoysLikeGirls-TwoIsBetterThanOne.mp3",
	artist_3: "Syd Matters",				title_3: "Obstacles",				path_3: "audio/SydMatters-Obstacles.mp3",
	artist_4: "Avenged Sevenfold",			title_4: "So Far Away",				path_4: "audio/AvengedSevenfold-SoFarAway.mp3"
};

var curr_song_number = 1;
var max_songs_number = 4;

function set_song_title(song_number) {
	document.getElementById("song-title").innerHTML = song_list["title_" + song_number];
}

function set_artist_name(song_number) {
	document.getElementById("song-artist").innerHTML = song_list["artist_" + song_number];
}

function load_song(song_number) {
	document.getElementById("now-playing").src = song_list["path_" + song_number];
	document.getElementById("player").load();
	set_song_title(song_number);
	set_artist_name(song_number);
}

function next_song() {
	if (curr_song_number == max_songs_number) {
		curr_song_number = 1;
	}
	else {
		curr_song_number++;
	}
	load_song(curr_song_number);
	document.getElementById("player").play();
}

function previous_song() {
	if (curr_song_number == 1) {
		curr_song_number = max_songs_number;
	}
	else {
		curr_song_number--;
	}
	load_song(curr_song_number);
	document.getElementById("player").play();
}

window.onload = function () {
	load_song(curr_song_number);
	document.getElementById("player").volume = 0.5;
	$("#previous-button").click(function() {
		previous_song();
	});

	$("#next-button").click(function() {
		next_song();
	});
	$("#player").bind("ended", function(){
		next_song();
	});
};