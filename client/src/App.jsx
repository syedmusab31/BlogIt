import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const app=()=>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Blog' element={<Blog />}/>
      </Routes>
    </div>
  )
}

export default app