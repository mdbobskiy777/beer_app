import Box from '@mui/material/Box';

export const Loading = () => <div>Loading...</div>;

type BeerImageBoxType = { url: string };

export const BeerImageBox = ({ url }: BeerImageBoxType) => (
  <Box>
    <img height="200px" src={url} alt="beer_icon" />
  </Box>
);
