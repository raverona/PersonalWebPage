var song_list_1 = {
	size: 4,
	artist_1: "Blink-182",					title_1: "I Miss You",				path_1: "audio/poppunk/Blink-182-IMissYou.mp3",
	artist_2: "Boys Like Girls",			title_2: "Two Is Better Than One",	path_2: "audio/poppunk/BoysLikeGirls-TwoIsBetterThanOne.mp3",
	artist_3: "Syd Matters",				title_3: "Obstacles",				path_3: "audio/poppunk/SydMatters-Obstacles.mp3",
	artist_4: "Avenged Sevenfold",			title_4: "So Far Away",				path_4: "audio/poppunk/AvengedSevenfold-SoFarAway.mp3"
};

var song_list_2 = {
	size: 2,
	artist_1: "Castlevania",				title_1: "Wicked Child",			path_1: "audio/8bit/Castlevania-WickedChild.mp3",
	artist_2: "Castlevania",				title_2: "Vampire Killer",			path_2: "audio/8bit/Castlevania-VampireKiller.mp3"
};

var playlist = {
	name_1: "Pop Punk",						list_1: song_list_1,
	name_2: "8-bit Games",					list_2: song_list_2
};

var curr_playlist_selector = 1;
var max_playlists_selector = 2;

var curr_song_selector = 1;
var max_songs_selector = 4;

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
	if (curr_song_selector == max_songs_selector) {
		curr_song_selector = 1;
	}
	else {
		curr_song_selector++;
	}
	load_song(curr_song_selector);
	document.getElementById("player").play();
}

function previous_song() {
	if (curr_song_selector == 1) {
		curr_song_selector = max_songs_selector;
	}
	else {
		curr_song_selector--;
	}
	load_song(curr_song_selector);
	document.getElementById("player").play();
}

window.onload = function () {
	load_song(curr_song_selector);
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