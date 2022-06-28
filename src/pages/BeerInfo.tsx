import { useParams } from 'react-router-dom';
import { useBeerCatalog } from '../components/useBeerCatalog';
import { CommonError } from '../errors/CommonError';

const BeerInfo = () => {
  const { beerName } = useParams();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { getBeerInfoByName } = useBeerCatalog();

  const beerInfo = getBeerInfoByName(beerName);

  return (
    <div>
      {beerName ? (
        <div>
          <div>Beer Info</div>
          <div>{beerName}</div>
          <div>{beerInfo?.tagline}</div>
          <div>{beerInfo?.first_brewed}</div>
          <div>{beerInfo?.description}</div>
        </div>
      ) : (
        <CommonError />
      )}
    </div>
  );
};

export default BeerInfo;
