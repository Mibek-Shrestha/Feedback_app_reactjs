import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'
export default function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React based project 
          please complete this project 
        </p>
        <p>Version:20.00</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
      
    </Card>
  )
}
