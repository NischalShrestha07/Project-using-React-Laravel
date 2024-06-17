
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CreatePost from './Components/CreatePost/CreatePost'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import ReadPost from './Components/ReadPost/ReadPost'
import UpdatePost from './Components/UpdatePost/UpdatePost'
import DeletePost from './Components/DeletePost/DeletePost'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login />} />
        <Route path='/readpost' element={<ReadPost />} />
        <Route path='/updatepost' element={<UpdatePost />} />
        <Route path='/deletepost' element={<DeletePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
