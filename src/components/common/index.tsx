import Box from '@mui/material/Box';

export const Loading = () => <div>Loading...</div>;

type BeerImageBoxType = { url: string; height: string };

export const BeerImageBox = ({ url, height }: BeerImageBoxType) => (
  <Box>
    <img height={height} src={url} alt="beer_icon" />
  </Box>
);
