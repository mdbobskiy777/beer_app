import { Link as RouterLink } from 'react-router-dom';

export const NavBar = () => (
  <div>
    <RouterLink to="/beerCatalog">All Beers</RouterLink>
    <RouterLink to="/beerCatalog/pizza">Pizza Beers</RouterLink>
    <RouterLink to="/beerCatalog/steak">Steak Beers </RouterLink>
  </div>
);
