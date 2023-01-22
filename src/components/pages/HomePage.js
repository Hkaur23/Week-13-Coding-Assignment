import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function HomePage() {
    return (
        <div>
             <Navbar></Navbar>
            <div className="text-center">
           
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </div>
       
       
    )
}
