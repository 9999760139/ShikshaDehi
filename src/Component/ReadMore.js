import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';import './ReadMore.css';


export default function ReadMore(props) {
    // console.log(props);
    // console.log(props.readmore.what_learn_content.what_learn);
    return (
        <div className="main_readmore">
            <div className="preview_div">
                <div>
                    <h1>2022 Complete Python Bootcamp From Zero to Hero in Python</h1>
                    <h5>{props.readmore.preview_heading}</h5>
                    <p>2022 Complete Python Bootcamp From Zero to Hero in Python #</p>
                </div>
            </div>
            <div className="learn_with_course_heading">
                <div>
                    <h2 className="course_heading">
                        {props.readmore.what_we_learn_heading}
                    </h2>   
                </div>
                <Box sx={{ flexGrow: 1 }} className="what_u_learn_box">
                    <h1 className="what_learn_heading">{props.readmore.what_we_learn_box_heading}</h1>
                    <Grid container spacing={{ xs: 2, md: 2 }} >
                        {props.readmore.what_learn_content.map((step) => (
                            <Grid item xs={12} sm={6} md={6}>
                                <div className="what_u_Learn_content">
                                    <div><CheckIcon /></div>
                                    <div className="what_u_Learn_content_description"><li>{step.what_learn_description}</li></div>
                                </div>
                            </Grid>
                        ))}

                        {props.readmore.what_learn_content.map((step) => (
                            <Grid item xs={12} sm={6} md={6} >
                                <div className="what_u_Learn_content">
                                    <div><CheckIcon /></div>
                                    <div className="what_u_Learn_content_description"><li>{step.what_learn_description}</li></div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}
