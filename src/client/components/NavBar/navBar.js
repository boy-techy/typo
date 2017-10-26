import React, { Component } from 'react';
import './navBar.scss';

class NavBar extends Component {

    render(){
        return(
            <div>
                <header className="header-details">
                    <h3>TOURRATO TRAVEL COMMUNITY</h3>
                    <p>
                        <span>Social Logins</span>
                        <span>Call: +91 9876543210</span>
                    </p>
                </header>
                <nav className="nav-bar">
                    <ul>
                        <li>HOME</li>
                        <li>About Us</li>
                        <li>Tour Package</li>
                        <li>Enquiry</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;