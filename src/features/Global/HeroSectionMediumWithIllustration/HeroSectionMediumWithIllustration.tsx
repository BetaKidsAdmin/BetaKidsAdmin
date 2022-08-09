import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';

export const HeroSectionMediumWithIllustration = ({ descriptionHtml, heading, button, image }) => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="text-red-400 mt-4 text-4xl tracking-tight font-extrabold  sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                {heading}
              </h1>
              {descriptionHtml && (
                <div
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              )}
              {button?.url && button?.text && (
                <div className="mt-5 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <NextLink
                      href={button.url}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                    >
                      {button.text}
                    </NextLink>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="px-4 py-8 sm:px-10">
              <div className="relative mx-auto w-full lg:max-w-md">
                <NextImage
                  src={getImageUrl(image)}
                  alt={image?.description ?? ''}
                  className="w-full h-full"
                  priority
                  width={580}
                  height={580}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
