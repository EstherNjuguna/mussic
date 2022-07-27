import React, { useEffect, useState } from 'react';
import ListItem from '../listitem/ListItem';

export default function Music(){
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
        .then(response => response.json())
        .then((songs) => {
          setSongs(songs)
        
        })
      }, [])

      let mySongs = songs.map((song) => (<ListItem
        songTitle={song.title} 
        songThumbnail={song.thumbnail} 
        key={song.id} />))

    return(
      <div class="text-bg-info p-3">
        <div className='container'>My Songs
          <div className='row'>
            {mySongs}
          </div>
        </div>
        </div>
    )
}