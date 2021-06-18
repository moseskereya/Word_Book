import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer"
import Logo from "../components/images/logo.png"
class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "hello"
         }
    }
    render() {
            return (
                <>
                    <section className="words">
                        <section className="formsection">
                            <Link to="/">
                                <img className="users_profiles_img" src={Logo} alt="user profile" />
                            </Link>
                            <section className="mid_container">
                                <div className="light-content">
                                    <h3>WELCOME TO WORDFINDER APP</h3>
                                    <div className="mid-container">
                                        <p>With this app, you can learn as Many English Words as you can. Please Try now</p>
                                        <Link to="/WordSearch">
                                            <button className="btn_search" type="submit">Search Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="wordsection">
                        </section>
                    </section>
                    <Footer/>
                </>
            );
        }
    }


export default Word;