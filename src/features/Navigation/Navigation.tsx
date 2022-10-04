import { Fragment } from 'react';
import { NavigationMobileMenu } from './NavigationMobileMenu/NavigationMobileMenu';
import { NavigationTop } from './NavigationTop/NavigationTop';

export interface NavigationProps extends NavigationType {}

export const Navigation = ({ header, currencies }) => {
  return (
    <Fragment>
      <NavigationMobileMenu header={header} currencies={currencies} />
      <header className="relative z-10">
        <NavigationTop header={header} currencies={currencies} />
      </header>
    </Fragment>
  );
};
