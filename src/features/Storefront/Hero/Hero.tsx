import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import { getImageUrl } from '@takeshape/routing';
import NextImage from 'components/NextImage';
import { StorefrontChild } from 'features/Storefront/types';

type HeroProps = StorefrontChild & { __typename?: 'HeroComponent' };

const features1 = [
  {
    name: 'Proven Ingredients.',
    description: 'Synergistic ingredients proven to support the immune system.',
    icon: GlobeAltIcon
  },
  {
    name: 'Healthy, Safe and Fun!',
    description: 'No junk, sugar-free gummy that your child will love.',
    icon: ScaleIcon
  },
  {
    name: 'Happier Families.',
    description: 'Peace of mind through healthier and happier kids.',
    icon: LightningBoltIcon
  }
];

export const Hero = ({ primaryText, secondaryText, firstButton, secondButton, image }: HeroProps) => {
  return (
    // <div className="relative bg-gray-100 pb-4 lg:pb-0">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
    //     <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
    //       <div className="lg:pr-16">
    //         <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
    //           {primaryText}
    //         </h1>
    //         <p className="mt-4 text-xl text-gray-600">{secondaryText}</p>
    //         <div className="mt-6">
    //           <Button as="a" href="#" color="primary" size="large">
    //             {buttonText}
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
    //       <NextImage
    //         src={getImageUrl(image)}
    //         alt={image.description ?? ''}
    //         className="w-full h-full object-center object-cover"
    //         priority
    //       />
    //     </div>
    //   </div>
    // </div>

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
              <dl className="mt-8 space-y-8">
                {features1.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-700">{item.name}</p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                  >
                    {firstButton.text}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    {secondButton.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
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
