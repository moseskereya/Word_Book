import React, { Component } from 'react';
import Result from "./Results"
import { Link } from 'react-router-dom';
import Logo from "../components/images/logo.png"
import axios from "axios"

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StartsWith: "",
            EndsWith: "",
            Include: "",
            WordMaxLength: 15,
            WordMinLength: 2,
            WordsList: [],
            isadata: false
        }
    }

    InputValueChnage = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    GetWords = (e) => {
        e.preventDefault();
        const code = "8IZqWCIZi3kVDCXhQnmyvh0EKHvaQsVWN5kJjLnqR4ss4og5HzTL3Q=="
        axios.post(`https://wordfind.azurewebsites.net/api/English?code=${code}`, this.state)
         .then(response => {
                const data = response.data;
                this.setState({
                    WordsList: data
                })
            })
            .then(error => {
                console.log(error)
         });
    }

    render() {
        const { StartsWith, EndsWith, Include, WordMaxLength, WordMinLength,
         isadata } = this.state;
        if (isadata === false && this.state.WordsList.length === 0) {
            return (
                    <>
                    <section className="words">
                        <section className="formsection">
                            <Link to="/">
                                <img className="users_profiles_img" src={Logo} alt="user profile" />
                            </Link>
                            <form className="form_data"
                                onSubmit={this.GetWords}>
                                <input onChange={this.InputValueChnage} value={StartsWith} type="text" name="StartsWith" placeholder="StartsWith" />
                                <input onChange={this.InputValueChnage} value={Include} type="text" name="Include" placeholder="Include" />
                                <input onChange={this.InputValueChnage} value={EndsWith} type="text" name="EndsWith" placeholder="EndsWith" />
                                <input onChange={this.InputValueChnage} value={WordMaxLength} list="number_maxmun" name="WordMaxLength" placeholder="WordMaxLength"
                                    type="number"
                                    id="select"
                                    max="17" min="2" />
                                <datalist id="number_maxmun">
                                    <option value="2" />
                                    <option value="3" />
                                    <option value="4" />
                                    <option value="5" />
                                    <option value="6" />
                                    <option value="7" />
                                    <option value="8" />
                                    <option value="8" />
                                    <option value="9" />
                                    <option value="10" />
                                    <option value="11" />
                                    <option value="12" />
                                    <option value="13" />
                                    <option value="14" />
                                    <option value="15" />
                                    <option value="16" />
                                    <option value="17" />
                                </datalist>
                                <input onChange={this.InputValueChnage} value={WordMinLength}
                                    type="number" min="1" max="5"
                                    list="number_minimum" name="WordMinLength" placeholder="WordMinLength" />
                                <datalist id="number_minimum">
                                    <option value="1" />
                                    <option value="2" />
                                    <option value="3" />
                                    <option value="4" />
                                    <option value="5" />
                                </datalist><br />
                                <button className="btn_search" type="submit">Search</button>
                            </form>
                        </section>
                        <section className="wordsection">
                            <div className="light-content">
                                <h3>WELCOME TO WORDFINDER APP</h3>
                                <div className="mid-container">
                                    <p>With this app, you can learn as Many English Words as you can.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </>
            );

        } else {
            return (
                <div>
                    <Result WordsList={this.state.WordsList}/>
                </div>
            )
        }
    }

}


export default Word;

