import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                    <Link to="/About" className="links">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
         );
    }
}
 
export default Nav;