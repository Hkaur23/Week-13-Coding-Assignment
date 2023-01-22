import React from 'react';

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Login Page</a>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
        </ul>
    </nav>
}