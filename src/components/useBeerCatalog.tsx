import { createContext, ReactElement, useCallback, useContext, useMemo, useState } from 'react';

import { getBeers } from '../utils/axios';

type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: Array<{
      temp: {
        value: number;
        unit: string;
      };
      duration: number;
    }>;
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: any;
  };
  ingredients: {
    malt: Array<{
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }>;
    hops: Array<{
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: number;
    }>;
    yeast: string;
  };
  food_pairing: Array<string>;
  brewers_tips: string;
  contributed_by: string;
};

export type BeerCatalog = Beer[];

type GetBeerList = (food: string | undefined) => Promise<void>;

type GetBeerInfoByName = (beerName: string | undefined) => Beer | undefined;
type BeerContextType = {
  beerList: BeerCatalog | [];
  getBeerList: GetBeerList;
  getBeerInfoByName: GetBeerInfoByName;
};

const BeerCatalogContext = createContext<BeerContextType | null>(null);

type PropsType = {
  children: ReactElement;
};

export const BeerCatalogProvider = ({ children }: PropsType) => {
  const [beerList, setBeerList] = useState<BeerCatalog | []>([]);

  const getBeerList: GetBeerList = useCallback(async (food) => {
    const updateRequest = food ? `&food=${food}` : '';

    const data = await getBeers(1, 10, updateRequest).then((res) => res.data);
    setBeerList(data);
  }, []);

  const getBeerInfoByName: GetBeerInfoByName = useCallback(
    (beerName) => beerList.find((beer) => beer.name === beerName),
    [beerList]
  );

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
