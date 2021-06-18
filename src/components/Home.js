import React from 'react'
import About from './About'
import Google from "./Google"
import Result from './Results'
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
                    <Route path="/WordSearch" component = {Result}/>
                    <Route path='/google/:id' component={Google} />
                    <Route path='*' component={Error} />
                </Switch>
             </>
        </Router>
    )
}


export default Home
