import React, { useState, useEffect, useRef } from 'react';

const MP3Player = () => {
    const [songs, setSongs] = useState([]); // manage the state of songs and the current song index
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);

    fetch("https://playground.4geeks.com/apis/fake/sound/songs")  //call API, all the songs
        .then((res) => res.json())  //this so that we get promise
        .then((data) => console.log(data)); //then method again for handling promise

    return (<h1>hola</h1>)
}

export default MP3Player;