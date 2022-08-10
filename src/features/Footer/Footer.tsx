import NextLink from 'components/NextLink';
import { PaymentList } from 'features/Footer/PaymentList/PaymentList';

export interface FooterProps {}

export const Footer = ({ footer }) => {
  if (!footer?.info || !footer?.navigation) return null;

  const { info, navigation } = footer;

  return (
    <footer className=" bg-gradient-to-r from-orange-300 to-red-400 " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            {info?.heading && (
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{info.heading}</h3>
            )}
            {info?.descriptionHtml && (
              <div className="text-white text-base mt-4" dangerouslySetInnerHTML={{ __html: info.descriptionHtml }} />
            )}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {navigation?.sections?.[0] && (
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    {navigation.sections[0].title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.sections[0].links.map((item) => (
                      <li key={item.name}>
                        <NextLink href={item.url} className="text-base text-red-100 hover:text-red-200">
                          {item.name}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {navigation?.sections?.[1] && (
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    {navigation.sections[1].title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.sections[1].links.map((item) => (
                      <li key={item.name}>
                        <NextLink href={item.url} className="text-base text-red-100 hover:text-red-200">
                          {item.name}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 xl:mt-0  xl:col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p className="mt-4 text-base text-red-100">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-gray-900 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <PaymentList />
          <p className="mt-6 text-base text-white xl:text-center">&copy; {new Date().getFullYear()}, Beta Kids</p>
        </div>
      </div>
    </footer>
  );
};
