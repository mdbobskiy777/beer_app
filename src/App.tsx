import { BrowserRouter as Router } from 'react-router-dom';
import { allRoutes } from './routes';
import { BeerCatalogProvider } from './components/useBeerCatalog';

const App = () => (
  <Router>
    <BeerCatalogProvider>{allRoutes}</BeerCatalogProvider>
  </Router>
);

export default App;
