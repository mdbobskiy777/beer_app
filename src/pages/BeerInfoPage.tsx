import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useBeerCatalog } from '../components/useBeerCatalog';
import { CommonError } from '../errors/CommonError';

const BeerInfoPage = () => {
  const { beerName } = useParams();

  const { getBeerInfoByName } = useBeerCatalog();

  const beerInfo = getBeerInfoByName(beerName);

  return (
    <Box>
      {beerName ? (
        <Box>
          <Typography>Beer Info</Typography>
          <Typography>{beerName}</Typography>
          <Typography>{beerInfo?.tagline}</Typography>
          <Typography>{beerInfo?.first_brewed}</Typography>
          <Typography>{beerInfo?.description}</Typography>
        </Box>
      ) : (
        <CommonError />
      )}
    </Box>
  );
};

export default BeerInfoPage;
