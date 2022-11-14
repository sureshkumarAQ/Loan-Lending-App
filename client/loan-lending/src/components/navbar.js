import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {
    return (
        <nav className="navbar">
            <b><h1>The Loan Lenders</h1></b>
            <div className="links">
                <a href="/auth">Home</a>
                <a href="/apply">Profile</a>
                <a href="/modify">Chat</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#DD6B20',
                    borderRadius: '8px'
                }}>Apply For Loan</a>
            </div>
        </nav>
    );
}

export default Navigationbar;