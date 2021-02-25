import { useRef, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { makeStyles, Theme } from "@material-ui/core";
import { ButtonCarousel } from "../ButtonCarousel";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  itemContainer: {
    display: "flex",
    overflowX: "auto",
    listStyle: "none",
  },
  item: {
    padding: theme.spacing(0, 1),
    "&:last-child": {
      paddingRight: theme.spacing(0),
    },
    "&:first-child": {
      paddingLeft: theme.spacing(0),
    },
  },
}));

export function Carousel({ items }: { items: any[] }) {
  const classes = useStyles();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(300);
  const container = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200, {
    leading: true,
  });

  useEffect(() => {
    checkForScrollPosition();
    if (itemRef.current?.clientWidth) {
      setScrollWidth(itemRef.current?.clientWidth);
    }
  }, []);

  function checkForScrollPosition() {
    if (container.current === null) {
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = container.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
  }

  function scrollContainerBy(distance: number) {
    if (!container.current) {
      return;
    }
    (container.current as any).scrollBy({ left: distance, behavior: "smooth" });
  }

  function handleScrollButtonClick(left: boolean) {
    return () => scrollContainerBy(left ? -scrollWidth : scrollWidth);
  }

  return (
    <div className={classes.root}>
      <ButtonCarousel
        left={true}
        show={canScrollLeft}
        onClick={handleScrollButtonClick(true)}
      />

      <div
        className={classes.itemContainer}
        onScroll={debounceCheckForScrollPosition}
        ref={container}
      >
        {items.map((Item, ind) => (
          <div className={classes.item} ref={itemRef} key={ind}>
            {Item}
          </div>
        ))}
      </div>
      <ButtonCarousel
        show={canScrollRight}
        onClick={handleScrollButtonClick(false)}
      />
    </div>
  );
}
