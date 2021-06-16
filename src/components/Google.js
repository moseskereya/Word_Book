import React, { Component } from 'react';
import Spinner from "./Spinner"
import axios from "axios"
class Google extends Component {
    constructor(props) {
        super(props);
        this.state = {
            googleresult: []
        }
    }

    componentDidMount = () => {
        const word_value = this.props.location.state.word;
        const api_key = "AIzaSyCrsNRKRXcWffQOtHHdxM5ac_vzRTKN-1c";
        const context_key = "70d7b8cd2d67ed8bf";
        const google_url = "https://www.googleapis.com/customsearch/v1?"
         axios.get(`${google_url}key=${api_key}&cx=${context_key}&q=${word_value}`)
            .then(res => {
                this.setState({googleresult: res.data.items})
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
         })
    }
    
    render() {
        const data = this.state.googleresult;
        const word_value = this.props.location.state.word;
        if (data === undefined || data.length === 0) {
            return <Spinner/>
        } else {
            return (
                <>
                    <div>
                        <section className="how">
                            <div>
                                <a href={`https://translate.google.com/?sl=en&tl=en&text=${word_value}&op=translate`}>
                                    <h4 data-aos="flip-left" data-aos-delay="100">How to pronounce a word {word_value}</h4>
                                </a>
                            </div>
                        </section>
                        <section className="results">
                            {data.map(item => {
                                return (
                                    <div className="google_result">
                                        <a className="search_link" href={item.link}>
                                            <h5>{item.displayLink}</h5>
                                        </a>
                                        <a className="search_title" href={item.link}>
                                            <h4>{item.title}</h4>
                                        </a>
                                        <p className="search_spippets">{item.snippet}</p>
                                 </div>
                                )
                            })}
                        </section>
                    </div>
                </>
            );
        }
    }

}
       
export default Google;

