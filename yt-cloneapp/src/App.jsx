import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { useAuth } from './context/AuthProvider'
import Home from './Components/Home'
import PlayingVideo from './Components/PlayingVideo'
import Search from './Components/search'
import {Route, Routes} from "react-router-dom"


function App() {
  // const {loading, data} = useAuth()
  // console.log(loading);
  // console.log(data);


  return (
    <div>

      <Navbar />
      <Routes>
        <Route path = "/" exact element = {<Home/>} />
        <Route path = "/search/:searchQuery" element = {<Search/>} />
        <Route path = "/playingvideo/:id" element = {<PlayingVideo/>} />
        {/* <Route path = "/video" element = {<Video/>} /> */}
      </Routes>


    </div>
  )
}

export default App