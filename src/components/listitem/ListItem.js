import React, {useEffect, useState} from 'react';

 function ListItem(){
    const[primaryArtist, setPrimaryArtist] = useState("")
    const[track, setTrack] = useState("")
    const[genre, setGenre] = useState("")
    const[image, setImage] = useState("")
    const[song_url, setSongUrl] = useState("")
    
    useEffect(() => {
        fetch("http://api.napster.com/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4")
        .then(response => response.json())
        .then((tracks) => {
           
            tracks.map((track) => {
                return setPrimaryArtist(track.primaryArtist), setSongUrl(track.song_url), setTrack(track.track), 
                setGenre(track.genre), setImage(track.image);
            })
        })
      }, [])
    
return(
        <div class="text-bg-info p-3">
        <div className='container'>

        <center>
        <div className='card' style={{width : 25 + 'rem'}}>
        
            <h5>Song:{track}</h5>
            <h5> image:{image}</h5>
            <p>music link:{song_url}</p>
            <h6 className='badge bg-info'>Music genre:{genre}</h6>
            <p>genre:{genre}</p>
        </div>
        </center>
        <br></br>
        </div>
        </div>
)
 }
 export default ListItem;