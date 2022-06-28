import { ReactElement } from 'react';

import { NavBar } from 'src/components/navBar/NavBar';

import Box from '@mui/material/Box';

type PropsType = {
  children: ReactElement;
};

export const MainLayout = ({ children }: PropsType) => (
  <Box>
    <NavBar />
    {children}
  </Box>
);

export type MainLayoutType = typeof MainLayout;
