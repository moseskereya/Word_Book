import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: false,
         }
    }

    changeTheme = () => {
        const moon = document.querySelector('.fa-sun');
        if (this.state.theme === true) {
            moon.onclick = () => {
            }
        } else if (this.state.theme === false) {
            document.body.classList.toggle('gray-theme');
        }
    }

    render() { 
        return (
            <div className="word_nav">
                <Link to="/" className="links">
                    <h5 className="title">WordFinder</h5>
                </Link>
                <ul>
                    <Link to="/" className="links">
                        <li>Home</li>
                    </Link>
                    <Link to="/WordSearch" className="links">
                        <li>WordSearch</li>
                    </Link>
                    <Link to="/About" className="links">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
         );
    }
}
 
export default Nav;