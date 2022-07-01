import React, { useState } from 'react'
import './CourseContentdemo.css'
import CourseContentdemoUi from './CourseContentdemoUi'
import Grid from '@mui/material/Grid';
// import { ReactQueryCacheProvider } from "react-query";
// import { queryCache } from './reactQery';
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

export default function CourseContentdemo(props) {
    // console.log(props);
    // after map loop
    // console.log(props.course_content.main_heading);
    const [toggle, setToggle] = useState(false)

    const toggleState = () => {
        setToggle(!toggle);
    }
    const queryClient = new QueryClient()
    return (
        <div className="accordion">
            <h1 className="main_heading">Course Content</h1>
            <h1>{props.course_content.main_heading}</h1>
            <Grid className="course_content_grid" container justify="center" alignItems="center" spacing={0} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
                <Grid xs={12} sm={9} md={9} lg={9} >
                    <p>23 sections • 155lectures  • 22h 13m total length</p>
                </Grid>
                <Grid xs={5} sm={3} md={3} lg={3}>
                    <div className="expand_all_btn_div">
                        <button id="expand_btn" className="expand_all_btn" onClick={() => { toggleState(); }} >Expand all section</button>
                    </div>
                </Grid>
            </Grid>
            {/* <ReactQueryCacheProvider queryCache={queryCache}> */}
            <QueryClientProvider client={queryClient}>
                {props.course_content.map((step, index) => (
                    <CourseContentdemoUi coursecontent={step} />
                ))}
                </QueryClientProvider>
            {/* </ReactQueryCacheProvider> */}
        </div>
    )
}
