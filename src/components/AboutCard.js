import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { makeStyles } from '@material-ui/core/styles'

import classnames from 'classnames'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    width: "320px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  pfp: {
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    background: "#b5b5b5"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  mb0: {
    marginBottom: "0"
  },
  mb1: {
    marginBottom: "8px"
  },
  mb2: {
    marginBottom: "16px"
  },
  mb3: {
    marginBottom: "24px"
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.mb1}>Сергей Стенянский</Typography>
          <div className={classnames(classes.pfp, classes.mb1)} />
          <Typography variant="subtitle2" className={classes.mb0}>Front-End Developer</Typography>
          <Typography variant="subtitle1" className={classes.mb1}>Javascript, HTML, CSS, React.js, Vue.js</Typography>
          <Typography variant="body2" className={classes.mb0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}