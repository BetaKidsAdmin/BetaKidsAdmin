import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { StorefrontChild } from 'features/Storefront/types';
import { getHeroIcon, transformIconName } from 'utils/heroIcons';

type HeroProps = StorefrontChild & { __typename?: 'HeroComponent' };

export const Hero = ({ primaryText, secondaryText, features, firstButton, secondButton, image }: HeroProps) => {
  return (
    <div className="pt-10 bg-gray-50 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">{primaryText.firstRow}</span>
                <span className="block text-red-400">{primaryText.secondRow}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{secondaryText}</p>
              {features.length > 0 && (
                <dl className="mt-8 space-y-8">
                  {features.map((item, index) => (
                    <div key={index} className="relative text-left">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white">
                          <i className="h-6 w-6" aria-hidden="true">
                            {getHeroIcon(transformIconName(item.iconName))}
                          </i>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-700">{item.title}</p>
                      </dt>
                      <dd className="mt-1 ml-16 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-5 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                {firstButton?.url && firstButton?.text && (
                  <div className="rounded-md shadow">
                    <NextLink
                      href={firstButton.url}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                    >
                      {firstButton.text}
                    </NextLink>
                  </div>
                )}
                {secondButton?.url && secondButton?.text && (
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <NextLink
                      href={secondButton.url}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                    >
                      {secondButton.text}
                    </NextLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <NextImage
                src={getImageUrl(image)}
                alt={image.description ?? ''}
                className="w-full h-full object-center object-cover lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                priority
                width={580}
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
