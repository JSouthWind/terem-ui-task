import { useAppContext } from "../../providers";
import { CardItemType } from "../../types";
import { CardBase, Carousel, SectionContainer } from "../../ui-components";

export function Popular() {
  const { filteredPopular } = useAppContext();

  return (
    <SectionContainer title="Popular around you">
      <Carousel
        items={filteredPopular.map(({ img, location, title }: CardItemType) => (
          <CardBase
            key={`StyledCard-${title}-${location}`}
            location={location}
            img={img}
            title={title}
          />
        ))}
      />
    </SectionContainer>
  );
}
