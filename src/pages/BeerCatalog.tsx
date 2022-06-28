import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useBeerCatalog } from '../components/useBeerCatalog';

const BeerCatalog = () => {
  const { food } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { beerList, getBeerList } = useBeerCatalog();

  useEffect(() => {
    getBeerList(food);
  }, [food]);

  const onBeerCardClick = useCallback(
    (beerName: string) => () => {
      navigate(`/beerInfo/${beerName}`);
    },
    []
  );
  return (
    <div>
      <div>BeerCatalog</div>
      {food && <div>{food}</div>}
      <div>
        {beerList.map((beer: any) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div onClick={onBeerCardClick(beer.name)} key={beer.id}>
            <span>{beer.name}</span>
            <span>{beer.tagline}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerCatalog;
