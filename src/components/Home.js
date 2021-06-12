import React from 'react'
import About from './About'
import Footer from "./Footer"
import Google from "./Google"
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom"
import Word from './Word'
import Nav from './Nav'
function Home() {
    return (
        <Router>
            <>
            <section className="nav_header">
            <Nav />
            </section>
            <Switch>
                <Route path="/" exact component={Word} />
                    <Route path="/about" component={About} />
                    <Route path='/google/:id' component={Google} />
                    <Route path='*' component={Error} />
                </Switch>
            <Footer/>
             </>
        </Router>
    )
}


export default Home
