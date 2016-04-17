var song_list_1 = {
	size: 4,
	curr_song: 1,
	artist_1: "Blink-182",					title_1: "I Miss You",				path_1: "audio/poppunk/Blink-182-IMissYou.mp3",
	artist_2: "Boys Like Girls",			title_2: "Two Is Better Than One",	path_2: "audio/poppunk/BoysLikeGirls-TwoIsBetterThanOne.mp3",
	artist_3: "Syd Matters",				title_3: "Obstacles",				path_3: "audio/poppunk/SydMatters-Obstacles.mp3",
	artist_4: "Avenged Sevenfold",			title_4: "So Far Away",				path_4: "audio/poppunk/AvengedSevenfold-SoFarAway.mp3"
};

var song_list_2 = {
	size: 2,
	curr_song: 1,
	artist_1: "Castlevania",				title_1: "Wicked Child",			path_1: "audio/8bit/Castlevania-WickedChild.mp3",
	artist_2: "Castlevania",				title_2: "Vampire Killer",			path_2: "audio/8bit/Castlevania-VampireKiller.mp3"
};

var playlist = {
	size: 2,
	curr_playlist: 1,
	name_1: "Pop Punk",						list_1: song_list_1,
	name_2: "8-bit Games",					list_2: song_list_2
};

var curr_playlist_songs_loaded = false;
var playlists_loaded = false;

function remove_child_elements(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function show_playlist_songs(playlist_number) {
	if (curr_playlist_songs_loaded == true) return;
	playlists_loaded = false;
	var song_list = playlist["list_" + playlist_number];
	var list_container = document.getElementById("music-container");
	remove_child_elements(list_container);
	var i;
	for (i = 1; i <= song_list["size"]; i++) {
		var list_element = document.createElement('p');
		list_element.className = "list-item song";
		list_element.id = i;
		list_element.innerHTML = song_list["artist_" + i] + " - " + song_list["title_" + i];
		list_container.appendChild(list_element);
	}
	bind_songs_double_click(song_list);
	curr_playlist_songs_loaded = true;
}

function show_playlists(playlist_list) {
	if (playlists_loaded == true) return;
	curr_playlist_songs_loaded = false;
	var list_container = document.getElementById("music-container");
	remove_child_elements(list_container);
	var i;
	for (i = 1; i <= playlist_list["size"]; i++) {
		var list_element = document.createElement('p');
		list_element.className = "list-item playlist";
		list_element.id = i;
		list_element.innerHTML = playlist["name_" + i];
		list_container.appendChild(list_element);
	}
	bind_playlists_double_click(playlist_list);
	playlists_loaded = true;
}

function set_song_title(song_number, song_list) {
	document.getElementById("song-title").innerHTML = song_list["title_" + song_number];
}

function set_artist_name(song_number, song_list) {
	document.getElementById("song-artist").innerHTML = song_list["artist_" + song_number];
}

function load_song(song_number, playlist_number) {
	var song_list = playlist["list_" + playlist_number];
	document.getElementById("now-playing").src = song_list["path_" + song_number];
	document.getElementById("player").load();
	set_song_title(song_number, song_list);
	set_artist_name(song_number, song_list);
}

function load_playlist(playlist_number) {
	playlist["curr_playlist"] = playlist_number;
	load_song((playlist["list_" + playlist_number])["curr_song"], playlist_number);
	show_playlist_songs(playlist_number);
}

function next_song(playlist_number) {
	var song_list = playlist["list_" + playlist_number];
	if (song_list["curr_song"] == song_list["size"]) {
		song_list["curr_song"] = 1;
	}
	else {
		song_list["curr_song"]++;
	}
	load_song(song_list["curr_song"], playlist_number);
	document.getElementById("player").play();
}

function previous_song(playlist_number) {
	var song_list = playlist["list_" + playlist_number];
	if (song_list["curr_song"] == 1) {
		song_list["curr_song"] = song_list["size"];
	}
	else {
		song_list["curr_song"]--;
	}
	load_song(song_list["curr_song"], playlist_number);
	document.getElementById("player").play();
}

function auto_next_song(playlist_number){
	var song_list = playlist["list_" + playlist_number];
	if (song_list["curr_song"] == song_list["size"]) {
		song_list["curr_song"] = 1;
		load_song(song_list["curr_song"], playlist_number);
	}
	else {
		song_list["curr_song"]++;
		load_song(song_list["curr_song"], playlist_number);
		document.getElementById("player").play();
	}
}

function bind_songs_double_click(song_list) {
	var i;
	for (i = 1; i <= song_list["size"]; i++) {
		$("#" + i).dblclick(function () {
			load_song(event.target.id, playlist["curr_playlist"]);
			document.getElementById("player").play();
		});
	}
}

function bind_playlists_double_click(playlist_list) {
	var i;
	for (i = 1; i <= playlist_list["size"]; i++) {
		$("#" + i).dblclick(function () {
			load_playlist(event.target.id);
		});
	}
}

window.onload = function () {
	load_song(1, playlist["curr_playlist"]);

	document.getElementById("player").volume = 0.4;

	$("#previous-button").click(function() {
		previous_song(playlist["curr_playlist"]);
	});

	$("#next-button").click(function() {
		next_song(playlist["curr_playlist"]);
	});

	$("#songs-button").click(function() {
		show_playlist_songs(playlist["curr_playlist"]);
	});

	$("#playlists-button").click(function() {
		show_playlists(playlist);
	});

	$("#player").bind("ended", function(){
		auto_next_song(playlist["curr_playlist"]);
	});
};