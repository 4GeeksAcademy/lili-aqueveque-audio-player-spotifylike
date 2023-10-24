import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import MP3Player from "./MP3Player";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<MP3Player />
		</div>
	);
};

export default Home;

/*
Let's create a MP3 player that works similar to Spotify

The buttons should always remain at the bottom of the viewport (use position fixed for that). You only need to implement the Play, Pause, Next and previous buttons.

 Requirements:
1. List the songs from the Sounds API using the Fetch API.
2. When the user clicks on a song, the player it must start playing it.
3. When the user clicks on the "next" button the player should start playing the next song from the list, if there is no next song then it should start over by playing the first song of the list, the same applies for the "previous" button.
4. Use the react ref attribute to get the audio tag from the DOM.
5. Make sure to have only one <audio> tag on the entire project, use ref to change its src url.
*/