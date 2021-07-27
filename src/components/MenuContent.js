import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import NavMenu from './NavMenu'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  root: {
    padding: "8px",
  },
  avatar: {
    color: "white",
    background: "#FF5722",
    marginBottom: "16px"
  },
  title: {
    marginBottom: '0'
  },
  subtitle: {
    marginBottom: '8px'
  },
  divider: {
    background: "#3f3f3f",
    margin: "0 -8px"
  }
})

export default ({
  handleDrawer
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src="" className={classes.avatar} >
        C
      </Avatar>
      <Typography variant="h6" className={classes.title}>Сергей Стенянский</Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>qweartekyl@gmail.com</Typography>
      <Divider className={classes.divider}/>
      <NavMenu handleDrawer={handleDrawer} />
    </div>
  )
}