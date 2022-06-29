import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { useBeerCatalog } from '../components/useBeerCatalog';
import { CommonError } from '../errors/CommonError';
import { BeerInfo } from '../components/beerInfo/BeerInfo';

const BeerInfoPage = () => {
  const { beerName } = useParams();

  const { getBeerInfoByName } = useBeerCatalog();

  const beerInfo = getBeerInfoByName(beerName);

  return <Box>{beerInfo ? <BeerInfo beerInfo={beerInfo} /> : <CommonError />}</Box>;
};

export default BeerInfoPage;
