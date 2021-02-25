import { makeStyles, Theme } from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useAppContext } from "../../providers";
import { CardItemType } from "../../types";
import { SectionContainer, CardBase } from "../../ui-components";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));

export function Featured() {
  const classes = useStyles();
  const { featured } = useAppContext();

  return (
    <SectionContainer biggerTopMargin title='Featured'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 496: 2, 750: 3, 900: 4 }}
      >
        <Masonry>
          {featured.map(({ img, location, title }: CardItemType) => (
            <div
              className={classes.card}
              key={`StyledCard-${title}-${location}`}
            >
              <CardBase location={location} img={img} title={title} narrow />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </SectionContainer>
  );
}
