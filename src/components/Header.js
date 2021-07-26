import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';

import { makeStyles } from '@material-ui/core/styles';
import MenuContent from './MenuContent';

const useStyles = makeStyles({
  toggler: {
    marginRight: "16px"
  },
})

export default () => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);

  function toggleDrawer() {
    setDrawer(!drawer);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.toggler} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
          Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} anchor="left" onClose={toggleDrawer} >
        <MenuContent handleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}