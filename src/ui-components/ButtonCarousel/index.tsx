import { makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles(() => ({
  arrow: {
    position: "absolute",
    backgroundColor: "rgba(256, 256, 256, 0.4)",
    top: 0,
    bottom: 0,
    width: 40,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowBack: {
    left: 0,
  },
  arrowForward: {
    right: 0,
  },
}));

export function ButtonCarousel({
  onClick,
  left = false,
  show,
}: {
  onClick: () => void;
  left?: boolean;
  show: boolean;
}) {
  const classes = useStyles();

  return show ? (
    <div
      role="button"
      tabIndex={left ? 0 : 1}
      onKeyDown={onClick}
      onClick={onClick}
      className={`${classes.arrow} ${
        left ? classes.arrowBack : classes.arrowForward
      }`}
    >
      {left ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </div>
  ) : null;
}
