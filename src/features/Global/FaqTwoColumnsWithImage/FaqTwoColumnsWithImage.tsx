import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import classNames from 'utils/classNames';

export const FaqTwoColumnsWithImage = ({ heading, subheadingHtml, faQs, image, button }) => {
  return (
    <div className="bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{heading}</h2>
          {subheadingHtml && (
            <div className="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: subheadingHtml }} />
          )}
        </div>

        <div className="mt-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {faQs.map((faq, index) => (
                  <Disclosure as="div" key={faq.question} defaultOpen={index === 0} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <div
                            className="text-base text-gray-500"
                            dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                          />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>

            <div className="mt-10  relative lg:mt-0" aria-hidden="true">
              <NextImage
                className="relative mx-auto rounded-xl shadow-xl"
                height={550}
                width={490}
                src={getImageUrl(image)}
                alt={image.description ?? ''}
              />
            </div>
          </div>
        </div>
        {button?.url && button?.text && (
          <div className="mt-8 lg:mt-12 flex justify-center">
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
  );
};
