import './profile.css';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const Profile = () => {
  const [users , setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/users")
  })
  
  return (
    <div>Profile</div>
  )
}

export default Profile