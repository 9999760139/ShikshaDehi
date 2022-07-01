import React, { Component } from 'react'
import './Banner.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export class Banner extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.banner);
        // console.log(this.props.banner.description);
    }

    render() {

        // const theme = createTheme({
        //     components: {
        //         MuiIcon: {
        //             styleOverrides: {
        //                 root: {
        //                     // Match 24px = 3 * 2 + 1.125 * 16
        //                     boxSizing: 'content-box',
        //                     padding: 3,
        //                     fontSize: '1.125rem',
        //                 },
        //             },
        //         },
        //     },
        // });
        // const Item = styled(Paper)(({ theme }) => ({
        //     ...theme.typography.body1,
        //     padding: theme.spacing(1),
        //     textAlign: 'center',
        //     color: theme.palette.text.secondary,
        // }));
        return (
            <div>
                {this.props.banner.map((step,index) => (
                <Box sx={{ flexGrow: 1, }} className="our_vision">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: "1", sm: "2", md: "3", lg: "1" }} className="ourvision_text">
                        <Grid  item xs={12} md={12} lg={12} className="ourvision_text">
                            <Container>
                            <h1 >{step.heading}</h1>
                            <p >{step.description}
                            </p>
                            </Container>
                        </Grid>
                        {/* <Grid item xs={12} md={6} lg={6} >
                            <Grid container rowSpacing={0.5} columnSpacing={{ xs: "4", sm: "4", md: "4", lg: "4" }}>
                                <Grid item xs={6}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" />
                                </Grid>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Box>
                ))}
            </div >
        )
    }
}

export default Banner
