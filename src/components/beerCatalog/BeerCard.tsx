import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Beer } from '../useBeerCatalog';
import { BeerImageBox } from '../common';

import styles from './styles';

type BeerCardProps = {
  onBeerCardClick: (beerName: string) => () => void;
  beer: Beer;
};
export const BeerCard = ({ onBeerCardClick, beer }: BeerCardProps) => {
  return (
    <Box onClick={onBeerCardClick(beer.name)} key={beer.id} sx={styles.listItemStyle}>
      <BeerImageBox url={beer.image_url} height="200px" />
      <Typography>{beer.name}</Typography>
      <Typography>{`abv: ${beer.abv}%`}</Typography>
    </Box>
  );
};
