import React, { use } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import Addblog from './pages/Admin/Addblog'
import Listblog from './pages/Admin/Listblog'
import Comments from './pages/Admin/Comments'
import Login from './components/Admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/appContext'


const app=()=>{
  const {token} =  useAppContext();

  return(
    <div> 
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Blog/:id' element={<Blog />}/>
        <Route path='/admin' element={token ? <Layout/>:<Login />} >
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