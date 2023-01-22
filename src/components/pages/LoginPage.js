import React from 'react'

import Navbar from './Navbar'
import '../../App.css'

export default function SignInPage() {
    return (
        <div>
        <Navbar></Navbar>
        <div className="text-center m-5-auto">
             
            <h2>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
        </div>
    )
}
