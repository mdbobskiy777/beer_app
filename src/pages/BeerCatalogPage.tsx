import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { BeerCatalog } from '../components/BeerCatalog/BeerCatalog';

const BeerCatalogPage = () => {
  return (
    <Box>
      <Typography>BeerCatalog</Typography>
      <BeerCatalog />
    </Box>
  );
};

export default BeerCatalogPage;
