import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();
export  class Provider extends Component {
    state ={
        tract_list:[],
        heading: 'top 10 track'
    };
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res=> console.log(res.data))
        .catch(e => console.log(e))
    }
  render() {
    return (
        <this.context.Provider value={this.state}>
     {}
        </this.context.Provider>

    )
  }
}
export const Consumer=Context.Consumer;