import * as React from 'react';
import './Featuredcourses.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";


export default function FeaturedCourse(props) {
  // console.log(props);
  // console.log(props.featured.description);
  return (
    <div>
      {/* <div className="what_we_do"   > 
        <h1>What we do</h1>
        <p> Lizards are a widespread group of squamate <br />
          species, ranging across all continents   </p>
      </div> */}
      <div className="featured">
        <Typography gutterBottom variant="h3" component="div">Featured Courses</Typography>
        <Grid container justify="space-between" spacing={0} columns={{ xs: 3, sm: 6, md: 12, lg: 12 }} >
          {props.featured.map((step, index) => (  

            <Grid xs={3} sm={3} md={6} lg={3}>

              <Card spacing={2} sx={{ maxWidth: "100%", m: "5px", bgcolor: "rgb(219, 219, 219)" }} >
                <CardMedia
                  component="img"
                  sx={{
                    height: '40vh',
                    display: 'block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    width: '100vw',
                  }}
                  src={step.imgpath}
                  alt={step.label}
                />
                <CardContent  >
                  <Typography gutterBottom variant="h5" component="div" sx={{ justifyContent: "center" }}>
                    {step.couser_name}
                  </Typography>
                  <Typography variant="body2" className="mdc-theme--on-primary" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
                {/* {step.More_Course.map((next) => ( */}
                <CardActions  sx={{ justifyContent: "center", }}>
                  <Link  className="link" to={"/course?id=" + step.id}> <Button color="secondary" variant="contained" className="mdc-theme--on-primary " >{step.button_text}</Button></Link>
                </CardActions>
                {/* ))} */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>

  );
}
