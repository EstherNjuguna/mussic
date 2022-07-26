import React, { useEffect, useState } from "react";


function Music() {

  // set initial events before fetch
  const [album, setAlbum] = useState([]);

  
  useEffect(() => {
    fetch("https://musicbrainz.org/ws/2/")
    .then(res => res.json())
    .then(data => {
      setAlbum(data)
    })
  }, [])

  
  const displayMusic = album.map((song, index) => {
    return <div key={index} className="show-details">
        <img src={song.image} alt="album Images"/>
        <p>{song.genre}</p>
        <p>{song.rating}</p>
        <p>{song.album}</p>
    </div>
  })


  return (
    <div className="Albums">
      {displayMusic}
    </div>
  );
}

export default Music;