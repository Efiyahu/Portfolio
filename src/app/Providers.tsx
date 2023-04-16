import * as React from 'react';
import StylesProvider from 'styles/Provider';
import { BrowserRouter } from 'react-router-dom';

type Props = React.PropsWithChildren;

const Providers = ({ children }: Props) => (
  <BrowserRouter>
    <StylesProvider>{children}</StylesProvider>
  </BrowserRouter>
);

export default Providers;
