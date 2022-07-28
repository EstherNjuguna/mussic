import React from 'react'

const spotify = () => {
const client_id= "69506e6ee34d48968927805d9bea7bbe"
const redirect_uri="http://localhost:3000"
const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
  const response_type="token"
return (
    <div>
 <a href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`}>Login
                        to Spotify</a>
    </div>
  )
}

export default spotify