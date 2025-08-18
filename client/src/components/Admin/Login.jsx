import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import toast from 'react-hot-toast';

const Login = () => {

  const {axios, setToken} = useAppContext();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', { email, password });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg '>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span> Login</h1>
            <p className='font-light'>Enter your Credentials to access the Admin Dashboard</p>
          </div >
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            <div className='flex flex-col'>
              <label >Email</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} type='email' required className=' border-b-2 border-gray-300 p-2 outline-none mb-6' placeholder='Enter your email' />
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type='password' required className=' border-b-2 border-gray-300 p-2 outline-none mb-6' placeholder='Enter your password' />
            </div>
            
            <button type='submit' className='w-full py-3 mt-4 font-medium rounded text-white bg-primary cursor-pointer hover:bg-primary/90'>Login</button> 
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login
