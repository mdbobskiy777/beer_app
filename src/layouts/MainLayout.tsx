import { ReactElement } from 'react';

import { NavBar } from 'src/components/navBar/NavBar';

type PropsType = {
  children: ReactElement;
};

export const MainLayout = ({ children }: PropsType) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export type MainLayoutType = typeof MainLayout;
