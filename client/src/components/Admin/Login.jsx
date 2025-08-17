import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
    if(!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    if(password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    if(email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/admin');
    } else {
      alert('Invalid email or password');
    }

    // Handle login logic here
  }

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
