import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Beer } from '../useBeerCatalog';
import { BeerImageBox } from '../common';

import styles from './styles';

type BeerInfoProps = {
  beerInfo: Beer;
};
export const BeerInfo = ({ beerInfo }: BeerInfoProps) => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.imgBox}>
        <BeerImageBox url={beerInfo.image_url} height="400px" />
      </Box>
      <Box sx={styles.beerInfoBox}>
        <Box>
          <Typography sx={styles.beerName}>{beerInfo.name}</Typography>
          <Typography sx={styles.beerTagline}>{beerInfo?.tagline}</Typography>
          <Typography sx={styles.beerAbv}>{`abv: ${beerInfo?.abv}%`}</Typography>
        </Box>
        <Box sx={styles.beerDescBox}>
          <Typography sx={styles.beerDescTitle}>Description:</Typography>
          <Typography>{beerInfo?.description}</Typography>
          <Typography sx={styles.beerDescTitle}>Good with:</Typography>
          <Typography>{beerInfo?.food_pairing}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
