
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import CreatePost from './Components/CreatePost/CreatePost'
import ReadPost from './Components/ReadPost/ReadPost'
import UpdatePost from './Components/UpdatePost/UpdatePost'
import DeletePost from './Components/DeletePost/DeletePost'
import Login from './Components/Login/Login'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/readpost' element={<ReadPost />} />
          <Route path='/updatepost' element={<UpdatePost />} />
          <Route path='/deletepost' element={<DeletePost />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Switch>
    </BrowserRouter>
  )
}

export default App
