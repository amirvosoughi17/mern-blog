import React from 'react'
import './addblog.css'
import { useState } from 'react'

const AddBlog = () => {
    const [formData , setFormData] = useState({})
    const handleChange = (e) => {
        setFormData ({
            ...formData ,
            [e.target.id] : e.target.value
        })   
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className='add-blog'>
        <h2>Add Your Blog</h2>
        <div className="add-input">
            <input placeholder='Blog Title' id='title' onChange={handleChange} />
            <input class='desc-input' placeholder='Blog Content' id='content' onChange={handleChange} />
            <input placeholder='Image' type='file' id='image' onChange={handleChange} />
        </div>
        <button>Create Blog</button>
    </form>
  )
}

export default AddBlog