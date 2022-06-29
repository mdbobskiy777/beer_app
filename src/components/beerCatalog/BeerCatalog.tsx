import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import { sortArray } from '../../helpers';
import { BeerCard } from './BeerCard';
import { useBeerCatalog } from '../useBeerCatalog';
import { SortSelect } from './SortSelect';

import styles from './styles';

export const BeerCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { food } = useParams();

  const { beerList, getBeerList } = useBeerCatalog();

  const [sortedList, setSortedList] = useState(beerList);

  const [sortBy, setSortBy] = useState('');

  const handleChangeSort = useCallback((event: any) => {
    setSortBy(event.target.value);
  }, []);

  useEffect(() => {
    setSortedList(beerList);
  }, [beerList]);

  useEffect(() => {
    setSortedList(sortArray(beerList, sortBy));
  }, [sortBy]);

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
      <SortSelect sortBy={sortBy} handleChangeSort={handleChangeSort} />
      <Box sx={styles.listStyle}>
        {sortedList?.map((beer) => (
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
