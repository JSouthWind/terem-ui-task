import { Container, makeStyles, Theme } from "@material-ui/core";

import { Popular } from "../Popular";
import { Featured } from "../Featured";
import { Search } from "../Search";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    width: "100vw",
    overflow: "auto",
  },
  container: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    margin: theme.spacing(2, "auto"),
  },
}));

export function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Search />
        <div className={classes.container}>
          <Popular />
          <Featured />
        </div>
      </Container>
    </div>
  );
}
