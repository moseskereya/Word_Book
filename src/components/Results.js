import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom"
import axios from 'axios';
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: "",
            SortBy: true,
            Asc: "Ascending",
            Desc: "Descending",
            StartsWith: "",
            EndsWith: "",
            Include: "",
            WordMaxLength: 15,
            WordMinLength: 2,
            WordsList: [],
            isadata: false
        }
    }

    Search = (e) => {
        this.setState({ filters: e.target.value })
    }

    SortBy = () => {
        if (this.state.SortBy === false && this.state.Asc === "Ascending") {
            this.setState({
                data: this.state.WordsList.sort((a, b) => a - b)
            })
        } else if (this.state.SortBy === true && this.state.Desc === "Descending") {
            this.setState({ data: this.state.WordsList.reverse((a, b) => b - a) })
        } else {
            return this.state.WordsList;
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
        const responsive = {
            myResponsiveRules: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6,
                partialVisibilityGutter: 40
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
                partialVisibilityGutter: 30
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2,
                partialVisibilityGutter: 30
            }
        }


        const mydata = this.state.WordsList;
        // eslint-disable-next-line array-callback-return
        const groups = mydata.filter((value) => {
            if (this.state.filters === "") {
                return value;
            } else if (value.toLowerCase().includes(this.state.filters.toLowerCase())) {
                return value;
            }
        }).map((value) => {
            return (
                <section id={value}>
                    <Link className="link_google"
                        to={{
                            pathname: `/google/${value}`,
                            state: { word: value }
                        }}>
                        <div className="word_content">
                            <p>{value}</p>
                        </div>
                    </Link>
                </section>
            )
        })

        const { StartsWith, EndsWith, Include, WordMaxLength, WordMinLength } = this.state;
        const group1 = groups.slice(0, 200);
        const group2 = groups.slice(200, 400);
        const group3 = groups.slice(400, 600);
        const group4 = groups.slice(600, 800);
        const group5 = groups.slice(800, 1000);
        const group6 = groups.slice(1000, 1200);
        const group7 = groups.slice(1200, 1400);
        const group8 = groups.slice(1400, 1600);
        const group9 = groups.slice(1600, 1800);
        const group10 = groups.slice(1800, 2000);
        const group11 = groups.slice(2000, 2200);
        const group12 = groups.slice(2200, 2400);
        const group13 = groups.slice(2400, 2600);
        const group14 = groups.slice(2600, 2800);
        const group15 = groups.slice(2800, 3000);
        const group16 = groups.slice(3000, 3200);
        const group17 = groups.slice(3200, 3400);
        const group18 = groups.slice(3400, 3600);
        const group19 = groups.slice(3600, 3800);
        const group20 = groups.slice(3800, 4000);
        const group21 = groups.slice(4000, 4200);
        const group22 = groups.slice(4200, 4400);
        const group23 = groups.slice(4400, 4600);
        const group24 = groups.slice(4600, 4800);
        const group25 = groups.slice(4800, 5000);
        const group26 = groups.slice(5000, 5200);
        const group27 = groups.slice(5200, 5400);
        const group28 = groups.slice(5400, 5600);
        const group29 = groups.slice(5600, 5800);
        const group30 = groups.slice(5800, 6000);
        const group31 = groups.slice(6000, 6200);
        const group32 = groups.slice(6200, 6400);
        const group33 = groups.slice(6400, 6600);
        const group34 = groups.slice(6600, 6800);
        const group35 = groups.slice(6800, 7000);
        const group36 = groups.slice(7000, 7200);
        const group37 = groups.slice(7200, 7400);
        const group38 = groups.slice(7400, 7600);
        const group39 = groups.slice(7600, 7800);
        const group40 = groups.slice(7800, 8000);
        const group41 = groups.slice(8000, 8200);
        const group42 = groups.slice(8200, 8400);
        const group43 = groups.slice(8400, 8600);
        const group44 = groups.slice(8600, 8800);
        const group45 = groups.slice(8800, 9000);
        const group46 = groups.slice(9000, 9200);
        const group47 = groups.slice(9200, 9400);
        const group48 = groups.slice(9400, 9600);
        const group49 = groups.slice(9600, 9800);
        const group50 = groups.slice(9800, 10000);
        const group51 = groups.slice(10000, 10200);
        const group52 = groups.slice(10200, 10400);
        const group53 = groups.slice(10400, 10600);
        const group54 = groups.slice(10600, 10800);
        const group55 = groups.slice(10800, 11000);
        const group56 = groups.slice(11000, 11200);
        const group57 = groups.slice(11200, 11400);
        const group58 = groups.slice(11400, 11600);
        const group59 = groups.slice(11600, 11800);
        const group60 = groups.slice(11800, 12000);
        const group61 = groups.slice(12000, 12200);
        const group62 = groups.slice(12200, 12400);
        const group63 = groups.slice(12400, 12600);
        const group64 = groups.slice(12600, 12800);
        const group65 = groups.slice(12800, 13000);
        const group66 = groups.slice(13000, 13200);
        const group67 = groups.slice(13200, 13400);
        const group68 = groups.slice(13400, 13600);
        const group69 = groups.slice(13600, 13800);
        const group70 = groups.slice(13800, 14000);
        const group71 = groups.slice(14000, 14200);
        const group72 = groups.slice(14200, 14400);
        const group73 = groups.slice(14400, 14600);
        const group74 = groups.slice(14600, 14800);
        const group75 = groups.slice(14800, 15000);
        const group76 = groups.slice(15000, 15200);
        const group77 = groups.slice(15200, 15400);
        const group78 = groups.slice(15400, 15600);
        const group79 = groups.slice(15600, 15800);
        const group80 = groups.slice(15800, 16000);
        const group81 = groups.slice(16000, 16200);
        const group82 = groups.slice(16200, 16400);
        const group83 = groups.slice(16400, 16600);
        const group84 = groups.slice(16600, 16800);
        const group85 = groups.slice(16800, 17000);
        const group86 = groups.slice(17000, 17200);
        const group87 = groups.slice(17200, 17400);
        const group88 = groups.slice(17400, 17600);
        const group89 = groups.slice(17600, 17800);
        const group90 = groups.slice(17800, 18000);
        const group91 = groups.slice(18000, 18200);
        const group92 = groups.slice(18400, 18600);
        const group93 = groups.slice(18600, 18800);
        const group94 = groups.slice(18800, 19000);
        const group95 = groups.slice(19000, 19200);
        const group96 = groups.slice(19200, 19400);
        const group97 = groups.slice(19400, 19600);
        const group98 = groups.slice(19600, 19800);
        const group99 = groups.slice(19800, 20000);
        const group100 = groups.slice(20000, 20200);
        return (
            <>
                <div>
                    <form className="form_data"
                        onSubmit={this.GetWords}>
                        <section>
                            <input onChange={this.InputValueChnage} value={StartsWith} type="text" name="StartsWith" placeholder="StartsWith" />

                            <input onChange={this.InputValueChnage} value={Include} type="text" name="Include" placeholder="Include" />

                            <input onChange={this.InputValueChnage} value={EndsWith} type="text" name="EndsWith" placeholder="EndsWith" />
                        </section>
                     <section>
                            <input onChange={this.InputValueChnage}
                                value={WordMaxLength} list="number_maxmun" name="WordMaxLength" placeholder="WordMaxLength"
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
                            <button className="btn_search" type="submit">{this.state.WordsList.length === 0 ? <span>Search </span> : <span>Search Results</span>}</button>
                     </section>
                    </form>
                </div>
                {this.state.WordsList.length === 0 ? <div></div>: <div className="search_bar">
                    <input className="search_bar_1" type="text" placeholder="Search Your Word" onChange={this.Search} />
                    <select name="sortby" onChange={this.SortBy}>
                        <option value={this.state.Asc}>Ascending</option>
                        <option value={this.state.Desc}>Descending</option>
                    </select>
                </div>}
                <div className="main_result">
                    <Carousel responsive={responsive}>
                        <div>
                            {group1}
                        </div>
                        <div>
                            {group2}
                        </div>
                        <div>
                            {group3}
                        </div>
                        <div>
                            {group4}
                        </div>
                        <div>
                            {group5}
                        </div>
                        <div>
                            {group6}
                        </div>
                        <div>
                            {group7}
                        </div>
                        <div>
                            {group8}
                        </div>
                        <div>
                            {group9}
                        </div>
                        <div>
                            {group10}
                        </div>
                        <div>
                            {group11}
                        </div>
                        <div>
                            {group12}
                        </div>
                        <div>
                            {group13}
                        </div>
                        <div>
                            {group14}
                        </div>
                        <div>
                            {group15}
                        </div>
                        <div>
                            {group16}
                        </div>
                        <div>
                            {group17}
                        </div>
                        <div>
                            {group18}
                        </div>
                        <div>
                            {group19}
                        </div>
                        <div>
                            {group20}
                        </div>
                        <div>
                            {group21}
                        </div>
                        <div>
                            {group22}
                        </div>
                        <div>
                            {group23}
                        </div>
                        <div>
                            {group24}
                        </div>
                        <div>
                            {group25}
                        </div>
                        <div>
                            {group26}
                        </div>
                        <div>
                            {group27}
                        </div>
                        <div>
                            {group28}
                        </div>
                        <div>
                            {group29}
                        </div>
                        <div>
                            {group30}
                        </div>
                        <div>
                            {group31}
                        </div>
                        <div>
                            {group32}
                        </div>
                        <div>
                            {group33}
                        </div>
                        <div>
                            {group34}
                        </div>
                        <div>
                            {group35}
                        </div>
                        <div>
                            {group36}
                        </div>
                        <div>
                            {group37}
                        </div>
                        <div>
                            {group38}
                        </div>
                        <div>
                            {group39}
                        </div>
                        <div>
                            {group40}
                        </div>
                        <div>
                            {group41}
                        </div>
                        <div>
                            {group42}
                        </div>
                        <div>
                            {group43}
                        </div>
                        <div>
                            {group44}
                        </div>
                        <div>
                            {group45}
                        </div>
                        <div>
                            {group46}
                        </div>
                        <div>
                            {group47}
                        </div>
                        <div>
                            {group48}
                        </div>
                        <div>
                            {group49}
                        </div>
                        <div>
                            {group50}
                        </div>
                        <div>
                            {group51}
                        </div>
                        <div>
                            {group52}
                        </div>
                        <div>
                            {group53}
                        </div>
                        <div>
                            {group54}
                        </div>
                        <div>
                            {group55}
                        </div>
                        <div>
                            {group56}
                        </div>
                        <div>
                            {group57}
                        </div>
                        <div>
                            {group58}
                        </div>
                        <div>
                            {group59}
                        </div>
                        <div>
                            {group60}
                        </div>
                        <div>
                            {group61}
                        </div>
                        <div>
                            {group62}
                        </div>
                        <div>
                            {group63}
                        </div>
                        <div>
                            {group64}
                        </div>
                        <div>
                            {group65}
                        </div>
                        <div>
                            {group66}
                        </div>
                        <div>
                            {group67}
                        </div>
                        <div>
                            {group68}
                        </div>
                        <div>
                            {group69}
                        </div>
                        <div>
                            {group70}
                        </div>
                        <div>
                            {group71}
                        </div>
                        <div>
                            {group72}
                        </div>
                        <div>
                            {group73}
                        </div>
                        <div>
                            {group74}
                        </div>
                        <div>
                            {group75}
                        </div>
                        <div>
                            {group76}
                        </div>
                        <div>
                            {group77}
                        </div>
                        <div>
                            {group78}
                        </div>
                        <div>
                            {group79}
                        </div>
                        <div>
                            {group80}
                        </div>
                        <div>
                            {group81}
                        </div>
                        <div>
                            {group82}
                        </div>
                        <div>
                            {group83}
                        </div>
                        {/*  */}
                        <div>
                            {group84}
                        </div>
                        <div>
                            {group85}
                        </div>
                        <div>
                            {group86}
                        </div>
                        <div>
                            {group87}
                        </div>
                        <div>
                            {group88}
                        </div>
                        <div>
                            {group89}
                        </div>
                        <div>
                            {group90}
                        </div>
                        <div>
                            {group91}
                        </div>
                        <div>
                            {group92}
                        </div>
                        <div>
                            {group93}
                        </div>
                        <div>
                            {group94}
                        </div>
                        <div>
                            {group95}
                        </div>
                        <div>
                            {group96}
                        </div>
                        <div>
                            {group97}
                        </div>
                        <div>
                            {group98}
                        </div>
                        <div>
                            {group99}
                        </div>
                        <div>
                            {group100}
                        </div>
                    </Carousel>
                </div>
            </>
        );
    }
}

export default Result;