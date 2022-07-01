import React, { useState, useEffect, useRef } from 'react'
import './CourseContentdemo.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
// import axios from "axios";
// import { useQuery } from 'react-query';

const data = [ 
    {
        id: 'Yoga',
        main_heading: 'Course Overview',
        tname: 'Rishabh',
        duration : '5.5minutes',
    },
    {
            id: 'Yoga',
            main_heading: 'Course Overview',
            tname: 'Rishabh',
            duration : '7.5minutes',
        },
        {
                id: 'Yoga',
                tname: 'Rishabh',
                duration : '10.5minutes',
            }, 
]
// const fetchdata = () => {
//     return axios.get("data")
// }
export default function CourseContentdemoUi(props) {
    // console.log(props);
    // console.log(props.coursecontent.main_heading);
    const [toggle, setToggle] = useState(false)
    const [heightE1, setHeightE1] = useState();

    const refHeight = useRef()

    useEffect(() => {
        // console.log(refHeight);
        setHeightE1(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle);
    }
    // console.log(toggle);

    // const urlParams = new URLSearchParams(window.location.href);

    // for (const [key, value] of urlParams) {
    //     console.log(`${key}=${value}`);

    // }
    // const {isLoading,error,data} = useQuery("yoga", () => axios.get("data").then((res) => res.data) 
    // )

    // if (isLoading) return "loding..."
    // if (error) return  "an error:"
    // console.log(data);

    return (
        <div>
            {/* {isLoading ? ("Loding...") : ( */}
            <div claaName="accordion">
                <button className="showbutton" onClick={toggleState}>
                    <div className="main_heading">
                        <ExpandMoreIcon className={toggle && "activetoggle"} />
                        <h5> Course Overview</h5>
                    </div>
                    <p>5 lecture - 10min</p>
                </button>
                {data.map((step) => (
                    <div className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                        style={{ height: toggle ? `${heightE1}` : "0px" }}
                        ref={refHeight}>
                        <span>
                            <div >
                                <span>
                                    <li><PlayCircleFilledWhiteIcon /> </li>
                                    <li>{step.tname} </li>
                                    <li><ExpandMoreIcon /></li>
                                </span>
                            </div>
                            <div>
                                <span>{step.duration}</span>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
            {/* //  )} */}
        </div>
    )
}
