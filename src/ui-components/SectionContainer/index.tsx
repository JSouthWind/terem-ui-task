import { ReactElement } from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";

export function SectionContainer({
  title,
  children,
  biggerTopMargin = false,
}: {
  title: string;
  biggerTopMargin?: boolean;
  children: ReactElement;
}) {
  const useStyles = makeStyles((theme: Theme) => ({
    root: { marginTop: theme.spacing(biggerTopMargin ? 5 : 1) },
    title: { marginBottom: theme.spacing(2) },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h6'>
        {title}
      </Typography>
      {children}
    </div>
  );
}
