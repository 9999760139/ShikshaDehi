import React, { Component } from 'react'
import './Carousel1.css'

export class Carousel1 extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // console.log(this.porps.heading);
    }
    render() {
        return (
            <div className="crsl1">
                {/* {this.props.carosel1.map((step,nextstep) => ( */}
                {/* this is third carousel */}
                {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active crsl_div">
                        <div className="crsl_div_div" >
                                <div>
                                    <h1>this is first carousel irst carouselirst carousel</h1>
                                    <p>this is a carousel paehis is first carousehis is ragraph</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item crsl_div">
                            <div>
                                <div className="crsl_div_div" >
                                    <h1>this is first carousehis is first carousehis is first carousel</h1>
                                </div>
                                <div className="crsl_div_div" >
                                    <p>this is a carousel paehehis is first carousehis is is is first carousehis is ragraph</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item crsl_div">
                            <div className="crsl_div_div" >
                                <div>
                                    <h1>this is first carousel</h1><br />
                                    <p>this is a carousel paehis is first carousehis is ragraph</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
                {/* this is second carousel */}
                {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="https://www.w3schools.com/w3images/lights.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80" className="d-block w-100 " alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  */}
                {/* this is first carousel */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner crsl_text_div">
                        <div className="carousel-item active crl_text1 ">
                            <h4>How 1 to Learn Strategi Startinsthe Skills You've Alwaysed
                            </h4> 
                            <p>How to Learn Strategi Startin Name,Title,Company<br />How to Learn Strategi Startiategi Startin Name,Titln Strategi Startiategi Startin Name,Titln Strategi Stararn Strategi Startin</p>
                        </div>
                        <div className="carousel-item crl_text1 ">
                        <h4>How 3 to Learn Strategi Startinsthe Skills You've Alwaysed
                            </h4> 
                            <p>How to Learn Strategi Startin Name,Title,Company<br />How to Learn Strategi Startin</p>
                        </div>
                        <div className="carousel-item crl_text1">
                            <h4>How 3 to Learn Strategi Startinsthe Skills You've Alwaysed
                            </h4>
                            <p>How to Learn Strategi Startin Name,Title,Company<br />How to Learn Strategi Startin</p>
                        </div>
                    </div>
                    <div className="carousel-indicators indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" data-bs-target="#carouselExampleControls" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" data-bs-target="#carouselExampleControls" aria-hidden="true" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" data-bs-target="#carouselExampleControls" aria-hidden="true" aria-label="Slide 3"></button>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
                {/* ))} */}
            </div>
        )
    }
}

export default Carousel1
