import React, { Component } from 'react'
import './AboutUs.css';
// import Appbar from './Appbar';
import Banner from './Banner';
import Footer from './Footer';
import Carousel1 from './Carousel1';
import Teachers from './Teachers'
import Navbar from './Navbar';

export class AboutUs extends Component {
    constructor(props){
        super(props);
        // console.log(props);
    }
    render() {
        return (
            <div className="aboutus">
                {/* <Appbar /> */}
                <Navbar/>
                <div className="crsl_top">
                <Carousel1 crsl1 = {this.props.aboutus.crsl1}  />
                </div>
                <Banner banner={this.props.aboutus.banner} />
                <Banner banner={this.props.aboutus.banner} />
                <Teachers teachers = {this.props.aboutus.teachers} />
                <div className="carousel_bottom">
                <Carousel1 crsl1 = {this.props.aboutus.crsl1} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default AboutUs
