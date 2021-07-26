import React from 'react'
import { useHistory } from 'react-router'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'

import Button from '@material-ui/core/Button'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  photo: {
    width: '150px',
    height: '150px',
    marginRight: "24px"
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  list: {
    "& li": {
      padding: "0",
      marginBottom: "8px",
      "& div": {
        margin: "0"
      }
    },
  },
  actions: {
    justifyContent: "center"
  }
});

export default ({
  photo
}) => {
  const classes = useStyles();

  const history = useHistory();

  function handleBack() {
    history.push('/');
  }

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia src={photo.thumbnailUrl} component='img' className={classes.photo}/>
        <List component="ul" disablePadding className={classes.list}>
          <ListItem>
            <ListItemText>
              <strong>albumId:</strong> {photo.albumId}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>id:</strong> {photo.id}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>thumbnailUrl: </strong> {photo.thumbnailUrl}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>title:</strong> {photo.title}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <strong>url:</strong> {photo.url}
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" color="primary" onClick={handleBack}>Back</Button>
      </CardActions>
    </Card>
  )
}