import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {
    return (
        <nav className="navbar">
            <b><h1>The Loan Lenders</h1></b>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/chats">Chat</a>
                <a href="/apply" style={{
                    color: 'white',
                    backgroundColor: '#DD6B20',
                    borderRadius: '8px'
                }}>Apply For Loan</a>
            </div>
        </nav>
    );
}

export default Navigationbar;