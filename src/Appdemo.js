import React, { Component } from 'react'
import './App.css';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import More_Course from './Component/More_Course';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appbar from './Component/Appbar';
export class Appdemo extends Component {


  constructor() {
    super();
    this.state = {
      currentpage: "aboutus",
      id: '',
      all_data: {
        home:
        {
          id: 'home',
          crsl1: [
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
          ],

          banner: [
            {
              heading: 'What We Do',
              description: 'If you needto navigate from a location back to the main command prompt, this command takes you back immediately.',
            },
            // {
            //   heading: 'Our Vision',
            //   description: 'If you need to navigate from a location back to the main command prompt, this command takes you back immediately.',
            // },
          ],
          featured_card: [
            {
              imgpath: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
              alt: 'please add some pics',
              couser_name: 'JAVA',
              description: 'o – Oakland Bay Bridge, U',
              button_text: 'Read More',
            },
            {
              imgpath: 'https://www.w3schools.com/w3images/lights.jpg',
              alt: 'please add some pics',
              couser_name: 'JAVA',
              description: 'o – Oakland Bay Bridge, U',
              button_text: 'Read More',
            },
            {
              imgpath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
              alt: 'please add some pics',
              couser_name: 'JAVA',
              description: 'o – Oakland Bay Bridge, U',
              button_text: 'Read More',
            },
          ],
          enrollnow:
          {
            heading: 'Enroll Now',
            descritpion: 'com/photo--cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
            name_lable: 'Name',
            contact_lable: 'Contact No.',
          },

        },
        aboutus: {
          id: 'aboutus',
          crsl1: [
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
            {
              heading: 'San Francisco – Oakland Bay Bridge, United States',
              description:
                'San Francisco – Oakland Bay Bridge, United States',
            },
          ],
          banner: [
            {
              heading: 'What We Do',
              description: 'If you needto navigate from a location back to the main command prompt, this command takes you back immediately.',
            },
            // {
            //   heading: 'Our Vision',
            //   description: 'If you need to navigate from a location back to the main command prompt, this command takes you back immediately.',
            // },
          ],
          teachers: 
            {
              heading : 'Meet Your Teachers',
              description : 'defined but never used   no-unused-varsdefined but never used   no-unused-vars',
              btn_text : 'View The Team',
              card : [
                {
                  description: '',
                  imgpath:
                    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                  name: '',
                  post: '',
                  contact_link: '',
                },
                {
                  description: '',
                  imgpath:
                    'https://www.w3schools.com/w3images/lights.jpg',
                  name: '',
                  post: '',
                  contact_link: '',
                },
                {
                  description: '',
                  imgpath:
                    'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
                  name: '',
                  post: '',
                  contact_link: '',
                },
                {
                  description: '',
                  imgpath:
                    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                  name: '',
                  post: '',
                  contact_link: '',
                },
              ],
            },

        },
        morecourse: {
          id: 'morecourse',
          readmore: {
             preview_heading: 'Learn Pessional Start from the basics and go all the way to creating your own applications and games',
             what_we_learn_heading: '2022 Complete Python Bop From Zero to Hero in Python ',
             what_we_learn_box_heading: 'What We Learn ',
            
              what_learn_content: [
                {
                  what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
                },
                {
                  what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
                },
                {
                  what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
                },
                {
                  what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
                },
              ]
          },
          coursecontent: [
            {},
            {},
          ],
          descritpion: [
            {
              heading : 'Description',
              show : ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
              hide: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
              btn_text: 'Show More',
              show_btn : 'Show More', 
              hide_btn : 'Show Less',
            },
          ],
        },
      }
    }
  }
  render(){
      return(
        <Router>
        <div className="app-container">
            <Appbar />
          <Routes>
            <Route exact path="/home" element={<Home home={this.state.all_data.home} />}  />
            
            <Route exact path="/aboutus" element={<AboutUs aboutus={this.state.all_data.aboutus} />}  />
            <Route path="/morecourse" element={<More_Course morecourse={this.state.all_data.morecourse} />}  />
          </Routes>
        </div>
      </Router>
  
      )
  }
}
 
export default Appdemo
