import React, { Component } from 'react'
// import Appbar from './Appbar'
import CourseContentdemo from './CourseContentdemo'
import Description from './Description'
import EnrollNow from './EnrollNow'
import Footer from './Footer'
import Navbar from './Navbar'
import ReadMore from './ReadMore'
import Requirments from './Requirments'


// let key = Object.keys(courses); 
// let value = Object.values(courses);
// console.log(key);
// console.log(value);

export class Course extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    //     console.log(this.props.course.coursecontent);
    }


     getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        // console.log(query);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        // console.log('Query variable %s not found', variable);
    }

    render() {
       let id = this.getQueryVariable("id");
       let course  = this.props.course[id];
        return (
            <div>

                        {/* <Appbar /> */}
                        <Navbar />
                        <ReadMore readmore={course.readmore} />
                        {/* <h1>{this.props.course.coursecontent.main_heading}</h1> */}
                        <CourseContentdemo course_content={course.coursecontent} />
                        <Description description={course.descritpion} />
                        <Requirments />
                        <EnrollNow enrollnow={course.enrollnow} />
                        <Footer />

            </div>
        )
    }
}
export default Course