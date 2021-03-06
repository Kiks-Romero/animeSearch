import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Preview(props) {
  const classes = useStyle;
  let data = {};

  if (props.datos) {
    data = props.datos;
  } else {
    data = props;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={data.image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Preview;
