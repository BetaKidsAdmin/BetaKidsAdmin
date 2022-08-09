import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';

export const FeaturesFullWidthWithVerticalImages = ({ descriptionHtml, heading, repeater }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{heading}</h2>
            {descriptionHtml && (
              <div className="mt-3 text-lg text-gray-500" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            )}
          </div>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {repeater.map((item) => (
              <li key={item.title}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <NextImage
                      src={getImageUrl(item.image)}
                      alt={item?.image?.description ?? ''}
                      className="w-auto mx-auto object-cover shadow-lg rounded-lg"
                      width={176}
                      height={235}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium ">
                        <h3>{item.title}</h3>
                      </div>
                      {item.description && (
                        <div className="text-lg">
                          <p className="text-gray-500">{item.description}</p>
                        </div>
                      )}
                      {item?.button?.url && item?.button?.text && (
                        <div>
                          <NextLink href={item.button.url} className="font-medium  text-red-500">
                            {item.button.text} →
                          </NextLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
