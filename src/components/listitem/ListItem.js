import React, {useEffect, useState} from 'react';

 function ListItem(){
    const[artist, setArtist] = useState("")
    const[title, setTitle] = useState("")
    const[genre, setGenre] = useState("")
    const[instrument, setInstrument] = useState("")
    const[song_url, setSongUrl] = useState("")
    const[work, setWork] = useState("")
    useEffect(() => {
        fetch("https://api.musixmatch.com/ws/1.1/")
        .then(response => response.json())
        .then((songs) => {
           
            songs.map((song) => {
                return setArtist(song.artist), setSongUrl(song.song_url), setWork(song.work), setTitle(song.title), 
                setGenre(song.genre), setInstrument(song.instrument);
            })
        })
      }, [])
    
return(
        <div class="text-bg-info p-3">
        <div className='container'>

        <center>
        <div className='card' style={{width : 25 + 'rem'}}>
        
            <h5>Song:{title}</h5>
            <h5> Work:{work}</h5>
            <p>music link:{song_url}</p>
            <h6 className='badge bg-info'>Music genre:{genre}</h6>
            <p>Instruments:{instrument}</p>
        </div>
        </center>
        <br></br>
        </div>
    </div>
)
}
export default ListItem;