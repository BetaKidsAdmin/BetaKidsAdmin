import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { Fragment } from 'react';

export const FeaturesAlternativeSideBySideWithImages = ({ heading, subheadingHtml, repeater }) => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          {heading && (
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          )}
          {subheadingHtml && (
            <div
              className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500"
              dangerouslySetInnerHTML={{ __html: subheadingHtml }}
            />
          )}
        </div>

        {repeater.map((item, index) =>
          index % 2 ? (
            <Fragment key={index}>
              <svg
                className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-red-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>

              <div className="relative mt-12 sm:mt-16 lg:mt-24">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">{item.title}</h3>
                    {item.text && (
                      <div className="mt-3 text-lg text-gray-500" dangerouslySetInnerHTML={{ __html: item.text }} />
                    )}
                    {item?.button?.text && item?.button?.url && (
                      <div className="mt-6 flex justify-start">
                        <div className="rounded-md shadow">
                          <NextLink
                            href={item.button.url}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                          >
                            {item.button.text}
                          </NextLink>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                      width={784}
                      height={404}
                      fill="none"
                      viewBox="0 0 784 404"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect x={0} y={0} width={4} height={4} className="text-red-200" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                    </svg>
                    <NextImage
                      className="relative mx-auto rounded-xl shadow-xl"
                      height={650}
                      width={490}
                      src={getImageUrl(item.image)}
                      alt={item?.image.description ?? ''}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment key={index}>
              <svg
                className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-red-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
              </svg>
              <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">{item.title}</h3>
                  {item.text && (
                    <div className="mt-3 text-lg text-gray-500" dangerouslySetInnerHTML={{ __html: item.text }} />
                  )}
                  {item?.button?.text && item?.button?.url && (
                    <div className="mt-6 flex justify-start">
                      <div className="rounded-md shadow">
                        <NextLink
                          href={item.button.url}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                        >
                          {item.button.text}
                        </NextLink>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                  <svg
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                  >
                    <defs>
                      <pattern
                        id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                  </svg>

                  <NextImage
                    className="relative mx-auto rounded-xl shadow-xl"
                    height={650}
                    width={490}
                    src={getImageUrl(item.image)}
                    alt={item?.image.description ?? ''}
                  />
                </div>
              </div>
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};
