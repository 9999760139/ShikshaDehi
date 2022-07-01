import React from 'react';
import './Teacher.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Teachers(props) {
    // console.log(props);
    return (
        <div className="main">
            <div className="text">
                <h1>{props.teachers.heading}</h1>
                <p>{props.teachers.description}</p>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                    {props.teachers.card.map((step, index) => (
                        <Grid xs={12} sm={6} md={6} lg={3} >
                            <Card className="cardWrapper" spacing={2} sx={{ maxWidth: "100%", m: "5px", pt:"30px",pb:"20px",my:"8px", bgcolor: "rgb(226, 226, 226)" }} >
                                <CardMedia className="card_img"
                                    component="img"
                                    sx={{
                                        height: '30vh',
                                        overflow: 'hidden',
                                        width: '60%',
                                        borderRadius: '50%',
                                        mb:"20px",
                                    }}
                                    src={step.imgpath}
                                    alt={step.label}
                                />
                                <CardContent  >
                                    <Typography gutterBottom variant="h6" component="div" sx={{ justifyContent: "center",mt:"10px" }}>
                                        {step.faculty_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        CEO
                                    </Typography>
                                </CardContent>
                                <span className="icons">
                                    <TwitterIcon /></span>
                                <span className="icons">
                                    <LinkedInIcon /></span>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* ))} */}
            {/* <div className="btn_div">
                <input type="button" value={props.teachers.btn_text} id="btn" />
            </div> */}
        </div>
    )
}

