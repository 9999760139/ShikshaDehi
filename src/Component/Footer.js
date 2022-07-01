import * as React from 'react';
import './Footer.css';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, } from '@mui/material'


// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function Footer() {
    return (
        <div>
            {/* <Box sx={{ width: '100%', p: 3, }} className="footer_start">
                <Grid container rowSpacing={1} columnSpacing={{ xs: "1", sm: "2", md: "3", lg: "1", }} >
                    <Grid item xs={12} md={6} lg={6}  >
                        <Container>
                        <h1 >SHIKHA Dehi</h1>
                        <p >Search for the keywords to learn more about each warning.
                            To ignore, <br />add // eslint-disable-next-line to the
                        </p>
                        </Container>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={2}>
                        <h5>Products</h5>
                        <p>Product 1</p>
                        <p>Product 2</p>
                        <p>Product 3</p>
                        <p>Product 4</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={2}>
                        <h5>Sercice</h5>
                        <p>Service 1</p>
                        <p>Service 2</p>
                        <p>Service 3</p>
                        <p>Service 4</p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={2}>
                        <h5>Resources</h5>
                        <p>News</p>
                        <p>Bog</p>
                        <p>Videos</p>
                        <p>FAQs</p>
                    </Grid>
                </Grid>

            </Box> */}
            <Box sx={{ width: '100%', py: 2, px: 2, }} className="footer_end" >
                <Grid container justify="space-between" spacing={0} columns={{ xs: 12, lg: 12 }} >

                    <Grid xs={1} lg={1}  >
                        <Link className="link" to="/home"><ListItem button >
                                <ListItemIcon>
                                    <ListItemText>
                                        Home
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem></Link>
                            <Link className="link" to="/aboutus"><ListItem button >
                                <ListItemIcon >
                                    <ListItemText >
                                        About Us
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem></Link>
                        
                    </Grid>
                    <Grid xs={3} lg={3} className="link_btn">
                        {/* <div>
                            <Link className="link" to="/home"><ListItem button >
                                <ListItemIcon>
                                    <ListItemText>
                                        Home
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem></Link>
                            <Link className="link" to="/aboutus"><ListItem button >
                                <ListItemIcon >
                                    <ListItemText >
                                        About Us
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem></Link>
                        </div> */}
                    </Grid>
                    <Grid xs={8} lg={8} sx={{ display: 'flex',
            flexDirection: 'row-reverse', alignSelf: 'flex-end' }} className="terms_services">
                        <div>
                                    &copy;2021 SHIKHA Dehi. All Right.
                        {/* Terms of Service */}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
}
