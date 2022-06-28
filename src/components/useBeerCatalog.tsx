import { createContext, ReactElement, useContext, useMemo, useState } from 'react';

import { getBeers } from '../utils/axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const BeerCatalogContext = createContext();

type PropsType = {
  children: ReactElement;
};

export const BeerCatalogProvider = ({ children }: PropsType) => {
  const [beerList, setBeerList] = useState([]);

  const getBeerList = async (food: string) => {
    const updateRequest = food ? `&food=${food}` : '';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = await getBeers(1, 10, updateRequest).then((res) => res.data);
    setBeerList(data);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getBeerInfoByName = (beerName: string) => beerList.find((beer) => beer.name === beerName);

  const value = useMemo(
    () => ({
      beerList,
      getBeerList,
      getBeerInfoByName,
    }),
    [beerList, getBeerList, getBeerInfoByName]
  );
  return <BeerCatalogContext.Provider value={value}>{children}</BeerCatalogContext.Provider>;
};

export const useBeerCatalog = () => {
  const context = useContext(BeerCatalogContext);
  if (!context) {
    throw new Error('useBeerCatalog must be used within a BeerCatalogProvider');
  }
  return context;
};
