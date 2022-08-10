import Seo from 'components/Seo';
import { Cart } from 'features/Cart/Cart';
import { CartProvider } from 'features/Cart/CartProvider';
import { Footer } from 'features/Footer/Footer';
import { Navigation } from 'features/Navigation/Navigation';
import { Notification } from 'features/Notification/Notification';
import { QuickAddWithData } from 'features/QuickAdd/QuickAddWithData';
import SearchModal from 'features/Search/Modal/Modal';
import { NextSeoProps } from 'next-seo';
import { PropsWithChildren } from 'react';

export interface LayoutProps {
  globalSettings: any;
  seo?: NextSeoProps;
}

export const Layout = ({ children, globalSettings, seo }: PropsWithChildren<LayoutProps>) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        <Navigation header={globalSettings?.header} currencies={globalSettings?.currencies} />

        <main id="content" className="flex flex-col grow">
          {children}
        </main>

        <Cart />
        <QuickAddWithData />
        <Notification />

        <Footer footer={globalSettings?.footer} />
      </div>
    </CartProvider>
  );
};

export default Layout;
