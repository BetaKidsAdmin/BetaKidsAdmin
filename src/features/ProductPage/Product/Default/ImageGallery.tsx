import { Tab } from '@headlessui/react';
import NextImage from 'components/NextImage';
import classNames from 'utils/classNames';

export const ImageGallery = ({ images }) => {
  return (
    <>
      {/* Image gallery */}
      <Tab.Group as="div" className="flex flex-col-reverse">
        {/* Image selector */}
        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-6">
            {images?.map((image) => (
              <Tab
                key={image.id}
                className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
              >
                {({ selected }) => (
                  <>
                    <span className="sr-only">{image.altText}</span>
                    <span className="absolute inset-0 rounded-md overflow-hidden">
                      <NextImage
                        src={image.url}
                        alt={image.altText}
                        className="w-full h-full object-center object-cover"
                        width={577}
                        height={577}
                      />
                    </span>
                    <span
                      className={classNames(
                        selected ? 'ring-red-500' : 'ring-transparent',
                        'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
          {images?.map((image) => (
            <Tab.Panel key={image.id}>
              <NextImage
                src={image.url}
                alt={image.altText}
                className="w-full h-full object-center object-cover sm:rounded-lg"
                width={577}
                height={577}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};
