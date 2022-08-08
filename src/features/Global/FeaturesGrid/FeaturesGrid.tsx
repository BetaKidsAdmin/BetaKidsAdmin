import { getHeroIcon, transformIconName } from 'utils/heroIcons';

export const FeaturesGrid = ({ heading, preheading, subheadingHtml, blocks }) => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {preheading && <p className="text-base font-semibold tracking-wider text-red-400 uppercase">{preheading}</p>}
        {heading && (
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">{heading}</h2>
        )}
        {subheadingHtml && (
          <div
            className="mt-5 max-w-prose mx-auto text-xl text-gray-500"
            dangerouslySetInnerHTML={{ __html: subheadingHtml }}
          />
        )}
        {blocks?.length > 0 && (
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blocks.map((item) => (
                <div key={item.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-8">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-400 rounded-md shadow-lg">
                          <i className="h-6 w-6 text-white" aria-hidden="true">
                            {getHeroIcon(transformIconName(item.iconName))}
                          </i>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{item.title}</h3>
                      {item?.descriptionHtml && (
                        <div
                          className="mt-5 text-base text-gray-500"
                          dangerouslySetInnerHTML={{ __html: item.descriptionHtml }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
