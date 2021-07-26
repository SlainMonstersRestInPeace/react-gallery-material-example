import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import FolderIcon from '@material-ui/icons/Folder'
import PersonIcon from '@material-ui/icons/Person'

import { Link } from 'react-router-dom'

import { styled } from '@material-ui/core/styles'

const StyledLink = styled(Link)({
  display: "flex",
  flexDirection: "row",
  color: "inherit",
  textDecoration: "none",
  width: "100%",
  "&:hover": {
    textDecoration: "none",
    color: "inherit"
  } 
})

const ListItemLink = ({
  to,
  handleDrawer,
  children,
}) => {
  return (
    <ListItem button >
      <StyledLink to={to} onClick={handleDrawer}>
        {children}
      </StyledLink>
    </ListItem>
  )
}

export default ({
  handleDrawer
}) => {
  return (
    <List component="nav">
      <ListItemLink button to="/" handleDrawer={handleDrawer}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      </ListItemLink>
      <ListItemLink button to="/about" handleDrawer={handleDrawer}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemLink>
    </List>
  );
}