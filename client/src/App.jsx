import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import Addblog from './pages/Admin/Addblog'
import Listblog from './pages/Admin/Listblog'
import Comments from './pages/Admin/Comments'
import Login from './components/Admin/Login'

const app=()=>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Blog/:id' element={<Blog />}/>
        <Route path='/admin' element={true ? <Layout/>:<Login />} >
        <Route index element={<Dashboard/>} />
        <Route path='AddBlog' element={<Addblog/>} />
        <Route path='ListBlog' element={<Listblog/>} />
        <Route path='Comments' element={<Comments/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default app