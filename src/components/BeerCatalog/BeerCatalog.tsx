import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';

import { BeerCard } from './BeerCard';
import { useBeerCatalog } from '../useBeerCatalog';

import styles from './styles';

export const BeerCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const { food } = useParams();

  const { beerList, getBeerList } = useBeerCatalog();

  useEffect(() => {
    getBeerList(food, currentPage);
  }, [food, currentPage, getBeerList]);

  const onBeerCardClick = useCallback(
    (beerName: string) => () => {
      navigate(`/beerInfo/${beerName}`);
    },
    []
  );

  const paginationChange = useCallback((evt: any, value: number) => {
    evt.stopPropagation();
    setCurrentPage(value);
  }, []);

  return (
    <Box sx={styles.mainContainer}>
      {food && <Typography>{food}</Typography>}
      <Box sx={styles.listStyle}>
        {beerList?.map((beer) => (
          <BeerCard key={beer.id} onBeerCardClick={onBeerCardClick} beer={beer} />
        ))}
      </Box>
      <Pagination
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={currentPage}
        count={11}
        onChange={paginationChange}
      />
    </Box>
  );
};
