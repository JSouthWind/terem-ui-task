import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import { CardItemType } from "../../types";

interface CardBasePropsType extends CardItemType {
  narrow?: boolean;
}

export function CardBase({
  img,
  location,
  title,
  narrow = false,
}: CardBasePropsType) {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: narrow ? 200 : 290,
    },
    media: {
      height: 170,
    },
    content: {
      paddingTop: theme.spacing(narrow ? 2 : 1),
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      opacity: 0.6,
      marginLeft: -6,
    },
    icon: {
      height: 20,
    },
  }));
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Paper>
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent className={classes.content}>
          <Typography>{title}</Typography>
          <div className={classes.flexContainer}>
            <LocationOnIcon className={classes.icon} />
            <Typography variant="body2">{location}</Typography>
          </div>
        </CardContent>
      </Paper>
    </Card>
  );
}
