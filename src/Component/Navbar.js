import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import {
    ListItem, ListItemIcon, ListItemText, List,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    // Button, Menu,
    // MenuItem,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Box } from '@mui/system';
import DrawerComponent from './Drawer';


const Navbar = ({ history }) => {
    // const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = React.useState();


    // const openMenu = Boolean(anchorEl);


    // const getColor=(curr) =>
    // {
    //     if (history.location.pathname===curr)
    //     {
    //         return "#1B98F5"
    //     }
    // }
    const acivetab= () =>{
        document.getElementById("links").className="links"
    }

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    // console.log(theme.breakpoints.down("sm"));
    // console.log(matches);


    // const handleClose = () => {
    //     setAnchorEl(null);
    // }
    // const handleClick = (e) => {
    //     setAnchorEl(e.currentTarget)
    // }
    return (
        <div className="appbar">
            <AppBar elevation={0} sx={{ bgcolor: "rgba(,0,0,0)", color: "black" }}>
                <Toolbar >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                        component='div'>
                        <Box>
                            {matches ?
                                (<Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}><IconButton onClick={() => setOpenDrawer(true)}>
                                            <MenuIcon /></IconButton>
                                        <Typography>Shiksha Dehi</Typography>
                                    </Box>
                                </Box>) : "Shiksha Dehi"
                            }
                        </Box>

                        {matches ? (<DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />) : (<Box sx={{ display: "flex", alignItems: "center" }}>
                            {/* <Typography sx={{ marginRight: "20px", cursor: "pointer", }}
                                aria-controls='basic-menu'
                                aria-haspopup='true'
                                aria-expanded={openMenu ? "true" : undefined}
                                onClick={handleClick}
                            >Courses</Typography>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Pythan</MenuItem>
                                <MenuItem onClick={handleClose}>Java </MenuItem>
                            </Menu> */}
                            <List className="link" sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                {/* <Link className="link" to="/course"><ListItem button >
                            <ListItemIcon>
                                <ListItemText>
                                    Courses
                                </ListItemText>
                            </ListItemIcon>
                        </ListItem></Link> */}
                                {/* <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered="true"> */}
                                {/* <Tab> */}
                                <NavLink exact={true} className=" link" to="/home" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <ListItemText>
                                                Home
                                            </ListItemText>
                                        </ListItemIcon>
                                    </ListItem>
                                </NavLink>
                                {/* </Tab> */}
                                {/* <Tab> */}
                                <Link exact className="link" to="/aboutus" >
                                    <ListItem button>
                                        <ListItemIcon>
                                            <ListItemText>
                                                About Us
                                            </ListItemText>
                                        </ListItemIcon>
                                    </ListItem>
                                </Link>
                                {/* </Tab> */}
                                {/* </Tabs> */}
                            </List>
                            {/* <Button color="secondary" variant="contained">Get Started</Button> */}
                        </Box>)}
                        {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button variant="contained">Get Started</Button>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <ShoppingCartIcon />
                                </Badge>    
                            </IconButton>
                        </Box> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;