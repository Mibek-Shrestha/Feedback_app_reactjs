import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'
export default function AboutIconLink() {
  return (
    <div  className='about-link'>
        <Link to='/about'>
           {/* pathname:'/about 
           search:'?sort=name'
           hash:'#hello'*/}
        <FaQuestion size={30}/>
        </Link>
        
    </div>
  )
}
