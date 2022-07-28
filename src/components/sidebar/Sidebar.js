import React ,{useEffect, useState}from 'react'
import Sidebarbutton from './Sidebarbutton'
import { MdLibraryMusic } from "react-icons/md";
import { MdSpaceDashboard} from "react-icons/md";
import {  HiPlay} from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";
import {FaSignOutAlt} from "react-icons/fa";
import apiClient from '../../spotify';
const Sidebar = () => {
const [image, setImage]=useState("https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)")
    useEffect(() => {
        apiClient.get("me").then((response) => {
            console.log(response.data)
        });
     }, []);
    return (
    <div className="sidebar" >
< img src={image} alt="music"/>
    
    <div>
<Sidebarbutton title="Feed" to="/feed" icon={MdSpaceDashboard } />
<Sidebarbutton title="Player" to="/player" icon={HiPlay } />
<Sidebarbutton title="Favourite" to="/favourite" icon={MdOutlineFavorite} />
<Sidebarbutton title="Music" to="/music" icon={AiFillAudio } />
<Sidebarbutton title="Library" to="/library" icon={MdLibraryMusic} />

    </div>
    <Sidebarbutton title="Sign Out" to="" icon={FaSignOutAlt}/>
    </div>
  )
}
 
export default Sidebar