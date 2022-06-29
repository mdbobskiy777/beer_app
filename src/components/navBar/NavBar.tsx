import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';

import Logo from 'src/assets/icons/Logo';

import styles from './style';

const pages = [
  { title: 'All Beers', navTo: '/beerCatalog' },
  { title: 'Pizza Beers', navTo: '/beerCatalog/pizza' },
  { title: 'Steak Beers', navTo: '/beerCatalog/steak' },
];

const StyledNavLink = styled(NavLink)`
  color: whitesmoke;
  display: block;
  line-height: 80px;
  padding: 0;
  text-decoration: none;
`;

export const NavBar = () => (
  <Box>
    <Box>
      <AppBar position="static" sx={styles.appBar}>
        <Box sx={styles.appBarBox}>
          <Toolbar>
            <Box>
              <Logo />
            </Box>
            <Box sx={styles.navLinkBoxContainer}>
              {pages.map((page) => (
                <Box key={page.navTo} sx={styles.navLinkBox}>
                  <StyledNavLink end to={page.navTo} style={styles.isActiveTab}>
                    {page.title}
                  </StyledNavLink>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  </Box>
);
