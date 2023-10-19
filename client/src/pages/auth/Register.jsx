import './register.css'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Register = () => {
  const [formData , setFormData] = useState({});
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        setLoading(false)
        setError(data.message);
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/signin')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }

  }

  console.log(formData)

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-group">
          <label>Username</label>
          <input placeholder='Username' required type='text' id='username' onChange={handleChange}  />
        </div>
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
           <p className='go-login'>Do You Have a Account ? <Link to="/login">Login</Link></p>
        </div>
        {error && <p className='form-error'>{error}</p>}

      </form>
    </div>
    )
}

export default Register