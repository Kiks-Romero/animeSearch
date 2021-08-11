import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function Tarjeta(props) {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    
    // <>
    // <h2>cerda</h2>
    // {console.log(props,"tarjeta")}


    // </>
    <>
      <Card className={classes.root}>
        <CardHeader
          title={props.infoTarjeta.title}
          subheader={props.infoTarjeta.airing_start}
        />
        <CardMedia
          component="img"
          className={classes.media}
          image={props.infoTarjeta.image_url}
          title={props.infoTarjeta.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.infoTarjeta.synopsis}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>puerco</Typography>
            <Typography paragraph>Cerdo</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default Tarjeta;
