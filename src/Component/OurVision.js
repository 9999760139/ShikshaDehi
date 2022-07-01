import React, { Component } from 'react'
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { yellow } from '@mui/material/colors';
// import { red } from '@mui/material/colors';
// import HomeIcon from '@mui/icons-material/Home';
// import { green } from '@mui/material/colors';
// import Icon from '@mui/material/Icon';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import {  createTheme } from '@mui/material/styles';
// import PropTypes from 'prop-types'
import Container from '@mui/material/Container';



export class Ourvision extends Component {


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
                <Box sx={{ flexGrow: 1, }} className="our_vision">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: "1", sm: "2", md: "3", lg: "1" }} className="ourvision_text">
                        <Grid  item xs={12} md={6} lg={6} className="ourvision_text">
                            <Container>
                            <h1 >Our Vision</h1>
                            <p >Search for the keywords to learn more about each warning.
                                To ignore, add eslint-disable-next-line to the line before.
                                Search for the keywords to lline to the line before.
                            </p>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} >
                            <Grid container rowSpacing={0.5} columnSpacing={{ xs: "4", sm: "4", md: "4", lg: "4" }}>
                                <Grid item xs={6}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" alt="" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" alt="" />
                                </Grid>
                                <Grid item xs={12}>
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" height="100" width="100%" alt=""/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* </Box>
                <HomeIcon />
                <HomeIcon color="primary" />
                <HomeIcon color="secondary" />
                <HomeIcon color="success" />
                <HomeIcon color="action" />
                <HomeIcon color="disabled" />
                <HomeIcon sx={{ color: yellow[500], fontSize: 30 }} />
                <HomeIcon fontSize="large" />
                <HomeIcon sx={{ fontSize: 40 }} sx={{ color: red[500] }} />
                <Box
                    sx={{
                        '& > :not(style)': {
                            m: 2,
                        },
                    }}
                >
                    <Icon>addcircle</Icon>
                    <Icon baseClassName="material-icons-two-tone">add_circle</Icon>
                    <Icon sx={{ color: green[500] }}>addcircle</Icon>
                </Box>
                <AddCircleIcon sx={{ color: [500], fontSize: 40 }} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        height: 116,
                    }}
                >
                    <Item
                        sx={{
                            height: 64,
                        }}
                    >
                        Item 1
                    </Item>
                    <Item
                        sx={{
                            height: 64,
                            bgcolor: 'primary.main',
                        }}
                    >
                        Item 2
                    </Item>
                    <Item>Item 3</Item>
                </Box>
                <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'error.main', height: 123 }}>
                    <Item sx={{ flexGrow: 1, m: 1, bgcolor: 'primary.main', height: 12 }}>Item 1</Item>
                    <Item sx={{ alignSelf: 'flex-end', m: 1, bgcolor: 'primary.main' }}>Item 2</Item>
                    <Item sx={{ m: 1, bgcolor: 'primary.main' }}   >Item 3</Item>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '140px',
                        color: '#fff',
                        '& > .MuiBox-root > .MuiBox-root': {
                            p: 1,
                            borderRadius: 1,
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 1,
                            gridTemplateRows: 'repeat(6 ,1fr)',
                            gridTemplateAreas: `"header  . "   
                            "footer main"
                            ". Sidebar " `
                        }}
                    >
                        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
                        <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
                        <Box sx={{ gridArea: 'footer', bgcolor: 'warning.main' }}>Footer</Box>
                        <Box sx={{ gridArea: 'Sidebar', bgcolor: 'warning.main' }}>Sidebar</Box>

                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoRows: '30px',
                        gap: 1,
                    }}
                >
                    <Item sx={{ gridColumn: '1', bgcolor: "green", gridRow: '1/5' }}>span 2</Item>
                    {/* The second non-visible row has height of 40px */}
                    {/* <Item sx={{ gridColumn: '1', bgcolor: "red", gridRow: '4 / 5' }}>4 / 5</Item>
                </Box> */}
                    {/* <Box
                    sx={{
                        display: 'grid',
                        gridAutoFlow: 'row',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridTemplateRows: 'repeat(1, 50px)',
                        gap: 1,
                    }}
                >
                    <Item sx={{ gridColumn: '2', gridRow: '1/3' }}>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item sx={{ gridColumn: '5', gridRow: '1 / 3' }}>5</Item>
                </Box> */}
                </Box>
            </div >
        )
    }
}

export default Ourvision