import React, { useState } from 'react'
import './App.css';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import Course from './Component/Course';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Appbar from './Component/Appbar';
// import ResponsiveDrawer from './Component/Responsivedrawer';
// import Toolbar from '@mui/material/Toolbar';
import Navbar from './Component/Navbar';
import ScrollToTop from './ScrollToTop/ScrollToTop';
// import LoadingBar from 'react-top-loading-bar';


const all_data = {
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
        id: 'Yoga',
        imgpath: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        alt: 'please add some pics',
        couser_name: 'Yoga',
        description: 'o – Oakland Bay Bridge, U',
        button_text: 'Read More',
        page: [{ id: 'yoga' }],
      },
      {
        id: 'Java',
        imgpath: 'https://www.w3schools.com/w3images/lights.jpg',
        alt: 'please add some pics',
        couser_name: 'JAVA',
        description: 'o – Oakland Bay Bridge, U',
        button_text: 'Read More',
        page: [{ id: 'java' }],
      },
      {
        id: 'Pythan',
        imgpath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        alt: 'please add some pics',
        couser_name: 'Pythan',
        description: 'o – Oakland Bay Bridge, U',
        button_text: 'Read More',
        page: [{ id: 'pythan' }],
      },
      {
        id: 'Javascript',
        imgpath: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
        alt: 'please add some pics',
        couser_name: 'Java Script',
        description: 'o – Oakland Bay Bridge, U',
        button_text: 'Read More',
        page: [{ id: 'javascript' }],
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
      heading: 'Meet Your Teachers',
      description: 'defined but never used   no-unused-varsdefined but never used   no-unused-vars',
      btn_text: 'View The Team',
      card: [
        {
          description: '',
          imgpath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
          faculty_name: 'Shekhar Sir',
          post: '',
          contact_link: '',
        },
        {
          description: '',
          imgpath:
            'https://www.w3schools.com/w3images/lights.jpg',
          faculty_name: 'Shekhar Sir',
          post: '',
          contact_link: '',
        },
        {
          description: '',
          imgpath:
            'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
          faculty_name: 'Shekhar Sir',
          post: '',
          contact_link: '',
        },
        {
          description: '',
          imgpath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
          faculty_name: 'Shekhar Sir',
          post: '',
          contact_link: '',
        },
      ],
    },

  },
  courses : {
    Yoga: {
        id: 'Yoga',
        readmore: {
            preview_heading: 'Learn Pessional Start from the basics and go all the way to creating your own applications and games',
            what_we_learn_heading: '2022 Complete Yoga From Zero to Hero in Python ',
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
            {
                main_heading: 'Course Overview',
                id: '1',
                subheading: {
                    subheading1: 'Auto-Welcome Message 1',
                    subheading2: 'Auto-Welcome Message',
                    subheading3: 'Auto-Welcome Message',
                    subheading4: 'Auto-Welcome Message',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '2',
                subheading: {
                    subheading1: 'Auto-Welcome Message second',
                    subheading2: 'Auto-Welcome Message second',
                    subheading3: 'Auto-Welcome Message second',
                    subheading4: 'Auto-Welcome Message second',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '3',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '4',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '5',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
        ],
        descritpion: [
            {
                heading: 'About Teachers',
                show: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn StrategiTitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S StartinHow to Learn Strategi Startin Name,Title,Company How to  Learn S ',
                hide: ',Title,Company How to Learn "/n "Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
                btn_text: 'Show More',
                show_btn: 'Show More',
                hide_btn: 'Show Less',
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
    Java: {
        id: 'Java',
        readmore: {
            preview_heading: 'Learn Pessional Start from the basics and go all the way to creating your own applications and games',
            what_we_learn_heading: '2022 Complete Java From Zero to Hero in Python ',
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
            {
                main_heading: 'Course Overview',
                id: '1',
                subheading: {
                    subheading1: 'Auto-Welcome Message 1',
                    subheading2: 'Auto-Welcome Message',
                    subheading3: 'Auto-Welcome Message',
                    subheading4: 'Auto-Welcome Message',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '2',
                subheading: {
                    subheading1: 'Auto-Welcome Message second',
                    subheading2: 'Auto-Welcome Message second',
                    subheading3: 'Auto-Welcome Message second',
                    subheading4: 'Auto-Welcome Message second',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '3',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '4',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '5',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
        ],
        descritpion: [
            {
                heading: 'About Teachers',
                show: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn StrategiTitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S StartinHow to Learn Strategi Startin Name,Title,Company How to  Learn S ',
                hide: ',Title,Company How to Learn "/n "Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
                btn_text: 'Show More',
                show_btn: 'Show More',
                hide_btn: 'Show Less',
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
    Pythan: {
        id: 'Pythan',
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
            {
                main_heading: 'Course Overview',
                id: '1',
                subheading: {
                    subheading1: 'Auto-Welcome Message 1',
                    subheading2: 'Auto-Welcome Message',
                    subheading3: 'Auto-Welcome Message',
                    subheading4: 'Auto-Welcome Message',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '2',
                subheading: {
                    subheading1: 'Auto-Welcome Message second',
                    subheading2: 'Auto-Welcome Message second',
                    subheading3: 'Auto-Welcome Message second',
                    subheading4: 'Auto-Welcome Message second',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '3',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '4',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '5',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
        ],
        descritpion: [
            {
                heading: 'About Teachers',
                show: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn StrategiTitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S StartinHow to Learn Strategi Startin Name,Title,Company How to  Learn S ',
                hide: ',Title,Company How to Learn "/n "Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
                btn_text: 'Show More',
                show_btn: 'Show More',
                hide_btn: 'Show Less',
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
    Javascript: {
        id: 'Javascript',
        readmore: {
            preview_heading: 'Learn Pessional Start from the basics and go all the way to creating your own applications and games',
            what_we_learn_heading: '2022 Complete Javascript From Zero to Hero in Python ',
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
            {
                main_heading: 'Course Overview',
                id: '1',
                subheading: {
                    subheading1: 'Auto-Welcome Message 1',
                    subheading2: 'Auto-Welcome Message',
                    subheading3: 'Auto-Welcome Message',
                    subheading4: 'Auto-Welcome Message',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '2',
                subheading: {
                    subheading1: 'Auto-Welcome Message second',
                    subheading2: 'Auto-Welcome Message second',
                    subheading3: 'Auto-Welcome Message second',
                    subheading4: 'Auto-Welcome Message second',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '3',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '4',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
            {
                main_heading: 'Course Overview',
                id: '5',
                subheading: {
                    subheading1: 'Auto-Welcome Message third',
                    subheading2: 'Auto-Welcome Message third',
                    subheading3: 'Auto-Welcome Message third',
                    subheading4: 'Auto-Welcome Message third',
                }
            },
        ],
        descritpion: [
            {
                heading: 'About Teachers',
                show: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn StrategiTitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S StartinHow to Learn Strategi Startin Name,Title,Company How to  Learn S ',
                hide: ',Title,Company How to Learn "/n "Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
                btn_text: 'Show More',
                show_btn: 'Show More',
                hide_btn: 'Show Less',
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
}
}
export default function App() {
  const [progress, setProgress] = useState(0)


  const setprogress =(porgress)=>{
    setProgress({progress:progress})
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     currentpage: "aboutus",
  //     id: '',
  //     all_data: {
  //       home:
  //       {
  //         id: 'home',
  //         crsl1: [
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //         ],

  //         banner: [
  //           {
  //             heading: 'What We Do',
  //             description: 'If you needto navigate from a location back to the main command prompt, this command takes you back immediately.',
  //           },
  //           // {
  //           //   heading: 'Our Vision',
  //           //   description: 'If you need to navigate from a location back to the main command prompt, this command takes you back immediately.',
  //           // },
  //         ],
  //         featured_card: [
  //           {
  //             id: 'Yoga',
  //             imgpath: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
  //             alt: 'please add some pics',
  //             couser_name: 'Yoga',
  //             description: 'o – Oakland Bay Bridge, U',
  //             button_text: 'Read More',
  //             page: [{ id: 'yoga' }],
  //           },
  //           {
  //             id: 'Java',
  //             imgpath: 'https://www.w3schools.com/w3images/lights.jpg',
  //             alt: 'please add some pics',
  //             couser_name: 'JAVA',
  //             description: 'o – Oakland Bay Bridge, U',
  //             button_text: 'Read More',
  //             page: [{ id: 'java' }],
  //           },
  //           {
  //             id: 'Pythan',
  //             imgpath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //             alt: 'please add some pics',
  //             couser_name: 'Pythan',
  //             description: 'o – Oakland Bay Bridge, U',
  //             button_text: 'Read More',
  //             page: [{ id: 'pythan' }],
  //           },
  //           {
  //             id: 'Javascript',
  //             imgpath: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
  //             alt: 'please add some pics',
  //             couser_name: 'Java Script',
  //             description: 'o – Oakland Bay Bridge, U',
  //             button_text: 'Read More',
  //             page: [{ id: 'javascript' }],
  //           },
  //         ],
  //         enrollnow:
  //         {
  //           heading: 'Enroll Now',
  //           descritpion: 'com/photo--cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //           name_lable: 'Name',
  //           contact_lable: 'Contact No.',
  //         },

  //       },
  //       aboutus: {
  //         id: 'aboutus',
  //         crsl1: [
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //           {
  //             heading: 'San Francisco – Oakland Bay Bridge, United States',
  //             description:
  //               'San Francisco – Oakland Bay Bridge, United States',
  //           },
  //         ],
  //         banner: [
  //           {
  //             heading: 'What We Do',
  //             description: 'If you needto navigate from a location back to the main command prompt, this command takes you back immediately.',
  //           },
  //           // {
  //           //   heading: 'Our Vision',
  //           //   description: 'If you need to navigate from a location back to the main command prompt, this command takes you back immediately.',
  //           // },
  //         ],
  //         teachers:
  //         {
  //           heading: 'Meet Your Teachers',
  //           description: 'defined but never used   no-unused-varsdefined but never used   no-unused-vars',
  //           btn_text: 'View The Team',
  //           card: [
  //             {
  //               description: '',
  //               imgpath:
  //                 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //               faculty_name: 'Shekhar Sir',
  //               post: '',
  //               contact_link: '',
  //             },
  //             {
  //               description: '',
  //               imgpath:
  //                 'https://www.w3schools.com/w3images/lights.jpg',
  //               faculty_name: 'Shekhar Sir',
  //               post: '',
  //               contact_link: '',
  //             },
  //             {
  //               description: '',
  //               imgpath:
  //                 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
  //               faculty_name: 'Shekhar Sir',
  //               post: '',
  //               contact_link: '',
  //             },
  //             {
  //               description: '',
  //               imgpath:
  //                 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //               faculty_name: 'Shekhar Sir',
  //               post: '',
  //               contact_link: '',
  //             },
  //           ],
  //         },

  //       },
  //       courses: {
  //         id: 'course',
  //         readmore: {
  //           preview_heading: 'Learn Pessional Start from the basics and go all the way to creating your own applications and games',
  //           what_we_learn_heading: '2022 Complete Python Bop From Zero to Hero in Python ',
  //           what_we_learn_box_heading: 'What We Learn ',

  //           what_learn_content: [
  //             {
  //               what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
  //             },
  //             {
  //               what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
  //             },
  //             {
  //               what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
  //             },
  //             {
  //               what_learn_description: 'San Francisco – Oakland Bay Bridge, United States Bay Bridge,United States Bay Bridge United States  States',
  //             },
  //           ]
  //         },
  //         coursecontent: [
  //           {
  //             main_heading: 'Course Overview',
  //             id: '1',
  //             subheading: {
  //               subheading1: 'Auto-Welcome Message 1',
  //               subheading2: 'Auto-Welcome Message',
  //               subheading3: 'Auto-Welcome Message',
  //               subheading4: 'Auto-Welcome Message',
  //             }
  //           },
  //           {
  //             main_heading: 'Course Overview',
  //             id: '2',
  //             subheading: {
  //               subheading1: 'Auto-Welcome Message second',
  //               subheading2: 'Auto-Welcome Message second',
  //               subheading3: 'Auto-Welcome Message second',
  //               subheading4: 'Auto-Welcome Message second',
  //             }
  //           },
  //           {
  //             main_heading: 'Course Overview',
  //             id: '3',
  //             subheading: {
  //               subheading1: 'Auto-Welcome Message third',
  //               subheading2: 'Auto-Welcome Message third',
  //               subheading3: 'Auto-Welcome Message third',
  //               subheading4: 'Auto-Welcome Message third',
  //             }
  //           },
  //           {
  //             main_heading: 'Course Overview',
  //             id: '4',
  //             subheading: {
  //               subheading1: 'Auto-Welcome Message third',
  //               subheading2: 'Auto-Welcome Message third',
  //               subheading3: 'Auto-Welcome Message third',
  //               subheading4: 'Auto-Welcome Message third',
  //             }
  //           },
  //           {
  //             main_heading: 'Course Overview',
  //             id: '5',
  //             subheading: {
  //               subheading1: 'Auto-Welcome Message third',
  //               subheading2: 'Auto-Welcome Message third',
  //               subheading3: 'Auto-Welcome Message third',
  //               subheading4: 'Auto-Welcome Message third',
  //             }
  //           },
  //         ],
  //         descritpion: [
  //           {
  //             heading: 'About Teachers',
  //             show: ',Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn StrategiTitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S StartinHow to Learn Strategi Startin Name,Title,Company How to  Learn S ',
  //             hide: ',Title,Company How to Learn "/n "Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn STitle,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn Strategi StartinHow to Learn Strategi Startin Name,Title,Company How to Learn S',
  //             btn_text: 'Show More',
  //             show_btn: 'Show More',
  //             hide_btn: 'Show Less',
  //           },
  //         ],
  //         enrollnow:
  //         {
  //           heading: 'Enroll Now',
  //           descritpion: 'com/photo--cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //           name_lable: 'Name',
  //           contact_lable: 'Contact No.',
  //         },

  //       },
  //     }
  //   }
  // }
  // render() {
    
    
    return (
      <Router>
        <div className="app-container" >
        <ScrollToTop />
        {/* <LoadingBar
        color='#f11946'
        progress={100}
        onLoaderFinished={() => setProgress(10)}
      /> */}
          <Navbar />

          {/* <Appbar /> */}
          <Routes >
            <Route exact path="/home" element ={ <Home setProgress={setprogress} home={all_data.home} />} />
            <Route exact path="/aboutus" element={<AboutUs setProgress={setprogress} aboutus={all_data.aboutus} />} />
            <Route exact path="/course" element={<Course setProgress={setprogress} course={all_data.courses} />} />
          </Routes>
          {/* <ResponsiveDrawer /> */}

        </div>
      </Router>

    )
  // }
}

// export default App
