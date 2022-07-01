import * as React from 'react';
import PropTypes from 'prop-types';
import './Appbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {Link} from "react-router-dom";

function HideOnScroll(props) {
    // const [state, setState] = React.useState({
    //     left: false,
    // });
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Appbar(props) {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [Open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        left: true,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handle_about_click_event = (obj) => {
        console.log("handle_about_click_event clicked");
        console.log(obj);
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/home"> <ListItem button >
                    <ListItemIcon><InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                </Link>
        
               <Link to="/aboutus">  <ListItem button onClick={handle_about_click_event} >
                    <ListItemIcon><InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                </ListItem>
                </Link>
                
                {/* <Link to="/morecourse"> <ListItem button >
                    <ListItemIcon><InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Morecourse" />
                </ListItem>
                </Link> */}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        open={Open} onClose={() => setOpen(false)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}

            <HideOnScroll {...props}>
                <AppBar sx={{ bgcolor: "#FFFFFF", color: "black", }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color='inherit'
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon className="oncolor" />
                        </IconButton>
                        <Typography variant="h6" className="oncolor" component="div" sx={{ flexGrow: 1,  }}>
                           Shiksha Dehi
                        </Typography>
                        <div className="Links">
                            <ListItem button className="oncolor" sx={{ color: "black" }} >
                                <ListItemText primary="Get Started" />
                            </ListItem>
                        </div>
                        {/* <List sx={{ display: 'flex', }}>
                            <ListItem button sx={{ bgcolor: "silver", color: "black" }} >
                                <ListItemText primary="Get Started" />
                            </ListItem>

                        </List> */}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}
