import React, { useState, useEffect, useRef } from 'react';

import playlistImage from "../../img/spotify-playlist.png";

const MP3Player = () => {
    const [songs, setSongs] = useState([]); // manage the state of songs and the current song index
    const [currentSongIndex, setCurrentSongIndex] = useState(-1);
    const audioRef = useRef(null); //create a ref for the audio element



    //The useEffect hook ensures that the songs are fetched from the API when the component is mounted. 
    //The fetched data is stored in the songs state.
    useEffect(() => {
        // Fetch songs from the API when the component mounts
        fetch("https://playground.4geeks.com/apis/fake/sound/songs") //call API, all the songs
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return response.json(); //this so that we get promise
            })
            .then((data) => setSongs(data)) //'then' method again for handling promise
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []); // Empty -> effect runs once after the initial render


    const songURL = "https://assets.breatheco.de/apis/sound/"; // Base URL for your audio files


    //This function sets the audio source and plays the selected song.
    const playSong = (songIndex) => {  //It takes a songIndex as a parameter, allowing you to play any song by passing its index.
        const song = songs[songIndex];  //variable to store song by song
        setCurrentSongIndex(songIndex); //update function receives each songIndex
        //setting the source of the <audio> element to the URL of the selected song and then immediately starting playback:
        audioRef.current.src = songURL + song.url;; //This sets the src attribute of the <audio> element to the url of the selected song
        audioRef.current.play(); //This calls the play() method on the <audio> element
    };

    const stopSong = () => {
        audioRef.current.pause(); // Pause the audio
        setCurrentSongIndex(-1); // Reset the currentSongIndex to indicate no song is playing
    };

    //The playNextSong and playPreviousSong functions calculate the next and previous song 
    //indexes respectively and call the playSong function to play the appropriate song.
    const playNextSong = () => {
        const nextSongIndex = (currentSongIndex + 1) % songs.length;
        // cycle back to the first song after reaching the end of the playlist
        playSong(nextSongIndex);
    };

    const playPreviousSong = () => {
        const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(prevSongIndex);
    };


    return (
        <div className="mp3-player">
            <div className="settings"></div>
            <div className="mp3-header">
                <div className="box">
                    <img className="image" src={playlistImage} alt="Playlist Image" />
                </div>
                <div class="box title">
                    <p>Public Playlist</p>
                    <p className="study">Nostalgia</p>
                    <i className="fab fa-spotify" style={{ color: '#11a222' }}>17 songs</i>
                </div>

            </div>
            <ol>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => playSong(index)}>
                        {song.name} -  {/*each song object has a name property*/}
                    </li>
                ))}
            </ol>

            <audio ref={audioRef}></audio>
            <div className="player-controls">
                <button onClick={playPreviousSong}>⏪</button>
                <button className="play-button" onClick={() => playSong(currentSongIndex)}>▶‍️
                </button>
                <button onClick={playNextSong}>⏩</button>
                <button onClick={stopSong}>⏹‍️</button>
            </div>
        </div>
    )
}

export default MP3Player;