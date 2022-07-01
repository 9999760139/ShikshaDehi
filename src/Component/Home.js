import React, { Component } from 'react'
import './Home.css'
// import Appbar from './Appbar';
import FeaturedCourse from './FeaturedCourse';
import Banner from './Banner';
import EnrollNow from './EnrollNow';
import Footer from './Footer';
import Carousel1 from './Carousel1';
// import Ourvision from './OurVision';

export class Home extends Component {
    constructor(props){
        // this.porps.setProgress(0);
        super(props);
        // console.log(props);
        this.props.setProgress(100);
        // console.log(this.props.home.id);
        // console.log(this.props.home.crsl1.heading)
        // console.log(this.props.home.banner.heading);
    }
    
    render() {
        // const theme =createMuiTheme({
        //     palette:{
        //         primary:{
        //             main:''
        //         },
        //         secondary:{
        //             main:'  '
        //         }
        //     }
        // })
        return (
            <div className="home">
                {/* <Appbar forChangeState={this.props.forChangeState} /> */}
                <div className="carousel_top">
                <Carousel1 carousel1= {this.props.home.crsl1} />
                </div>
                {/* <DemoCarousel /> */}
                <Banner banner = {this.props.home.banner} />
                <FeaturedCourse featured={this.props.home.featured_card} />
                <Banner banner={this.props.home.banner} />
                {/* <Ourvision /> */}
                <div className="carousel_bottom">
                {/* <Carousel1 carousel1= {this.props.home.crsl1} /> */}
                </div>
                <EnrollNow enrollnow = {this.props.home.enrollnow} />
                <Footer />
            </div>
        )
    }
}

export default Home
