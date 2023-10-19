import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart , signInFailure, signInSuccess } from '../../redux/user/userSlice'


const Login = () => {
  const dispatch = useDispatch();
  const [formData , setFormData] = useState({})
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(null)
  const navigate = useNavigate() 
 
  const handleChange = (e) => {
    setFormData({
      ...formData ,
      [e.target.id] : e.target.value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch ('/api/auth/login' ,
      {
        method : 'POST' ,
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
    }
    dispatch(signInSuccess(data))
    navigate('/')
    }catch (error){
      dispatch(signInFailure(error.message))
      setError(error.message)
    }
  }

  console.log(formData)

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-group">
          <label>Email</label>
          <input placeholder='Email' required type='email' id='email' onChange={handleChange}  />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input placeholder=' Password' required type='password'  id='password' onChange={handleChange} />
        </div>
        <div className="form-footer">

           <button>Sign up</button>
           <p className='go-register'>Do You Have a Account ? <Link to="/login">Login</Link></p>
        </div>
        {error && <p className='form-error'>{error}</p>}

      </form>
    </div>
  )
}

export default Login