import React, { useEffect, useState } from 'react';


export default function Music(){
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch(" https://cors-anywhere.herokuapp.com/http://api.napster.com/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
        .then(response => response.json())
        .then((songs) => { 
          setSongs(songs)
        })
      }, [])
      let myMusic = songs.map((song) => (<MusicCard 
        songTitle={song.title} 
        songArtist={song.thumbnail} 
        songId={song.id} />))


    return(
      <div className="text-bg-info p-3">
       {myMusic}
        </div>
    )
}