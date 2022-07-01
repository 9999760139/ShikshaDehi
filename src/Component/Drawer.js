import { Drawer,List, ListItem,ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom";

const DrawerComponent = ({openDrawer,setOpenDrawer}) => {
    return (
        <div className="drawer" onClick={ () => setOpenDrawer(false)}>
            <Drawer  anchor="left" open={openDrawer} setOpenDrawer={setOpenDrawer}>
                    <List>
                        <Link className="link" to="/home"><ListItem button onClick={ () => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItemIcon>
                        </ListItem></Link>
                        {/* <Link className="link" to="/course"><ListItem button onClick={ () => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    Courses
                                </ListItemText>
                            </ListItemIcon>
                        </ListItem></Link> */}
                        <Link className="link" to="/aboutus"><ListItem button onClick={ () => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    About Us
                                </ListItemText>
                            </ListItemIcon>
                        </ListItem></Link>
                        {/* <ListItem divider button onClick={ () => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    Contact Us
                                </ListItemText>
                            </ListItemIcon>
                        </ListItem> */}
                    </List>
            </Drawer>
        </div>
    )
}

export default DrawerComponent
