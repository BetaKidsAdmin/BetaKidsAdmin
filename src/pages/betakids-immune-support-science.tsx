import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';

const features2 = [
  {
    name: '190,000+ Studies',
    description:
      'Parents miss work, appointments, and activities. Kids and siblings miss school, sports, parties and more. Many of these missed events require makeup work/time.',
    icon: GlobeAltIcon
  },
  {
    name: '5+ Pediatric Studies',
    description:
      "You are heartbroken seeing your little ones suffering frequent sick days. You feel powerless in protecting your family with multiple supplements that aren't effective.",
    icon: ScaleIcon
  },
  {
    name: '200+ Patents',
    description:
      'When one kid gets sick, it affects everybody in your family. The other kids get sick, schedules are upended, stress levels rise and peace of mind is out the door.',
    icon: LightningBoltIcon
  }
];

const people = [
  {
    name: 'Formula Consumption in 3- to 4-Year-Olds and Respiratory Infections',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-academy-pediatrics.jpg?v=1648235095',
    bio: '"Children who took beta glucan had fewer missed days of day care due to illness. Daily consumption also showed antiinflammatory mechanisms."'
  },
  {
    name: 'Glucan #300 in Children with Chronic Respiratory Problems: Antibody Production',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-journal-immunology.jpg?v=1648227554',
    bio: `"Properly functioning immune system is crucial to defend against all invading pathogens, including
      common cold viruses. Glucans were confirmed to have beneficial effects against common cold and respiratory symptoms and against allergy symptoms via decreasing proinflammatory cytokines"`
  },
  {
    name: 'Formula Consumption in 3- to 4-Year-Olds and Respiratory Infections',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-academy-pediatrics.jpg?v=1648235095',
    bio: '"Children who took beta glucan had fewer missed days of day care due to illness. Daily consumption also showed antiinflammatory mechanisms."'
  },
  {
    name: 'Glucan #300 in Children with Chronic Respiratory Problems: Antibody Production',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-journal-immunology.jpg?v=1648227554',
    bio: `"Properly functioning immune system is crucial to defend against all invading pathogens, including
      common cold viruses. Glucans were confirmed to have beneficial effects against common cold and respiratory symptoms and against allergy symptoms via decreasing proinflammatory cytokines"`
  },
  {
    name: 'Formula Consumption in 3- to 4-Year-Olds and Respiratory Infections',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-academy-pediatrics.jpg?v=1648235095',
    bio: '"Children who took beta glucan had fewer missed days of day care due to illness. Daily consumption also showed antiinflammatory mechanisms."'
  },
  {
    name: 'Glucan #300 in Children with Chronic Respiratory Problems: Antibody Production',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/files/american-journal-immunology.jpg?v=1648227554',
    bio: `"Properly functioning immune system is crucial to defend against all invading pathogens, including
      common cold viruses. Glucans were confirmed to have beneficial effects against common cold and respiratory symptoms and against allergy symptoms via decreasing proinflammatory cytokines"`
  }
  // More people...
];

const TheSciencePage = ({ navigation, footer }) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <main className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="text-red-400 mt-4 text-4xl tracking-tight font-extrabold  sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  BetaKIDS Science
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Revolutionary Immune Support for Kids.
                </p>
                <div className="mt-5 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                    >
                      Buy BetaKIDS®
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="px-4 py-8 sm:px-10">
                <div className="relative mx-auto w-full lg:max-w-md">
                  <img className="w-full" src="/images/Researchers-pana.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature section with grid */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-red-400 uppercase">BetaKIDS</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">The Most Researched</p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Beta Glucan is the most researched immune support supplement in the world. BetaKIDS® contains the purest,
            most effective Beta Glucan you can buy.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features2.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-8">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-400 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative py-16 bg-white">
        <div className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
        <div className="max-w-7xl mx-auto bg-red-400 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 bg-white  rounded-3xl shadow-2xl">
                  <img
                    className="object-contain object-center"
                    src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/betakids-secret-beta-glucan_ee877747-71f0-46cd-8a7f-bc6ed3f3fe10_550x.png?v=1654177678"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-red-400 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
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
                      <rect x={0} y={0} width={4} height={4} className="text-red-300" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
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
                      <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                  A Smarter Immune System
                </h2>
                <p className="text-lg text-white">
                  Beta Glucan activates your immune cells in such a way that enables them to better detect, identify,
                  and mark pathogens. This means that your immune system can more quickly react and learn about any
                  pathogen inside your body.
                </p>
                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-red-500 hover:bg-gray-50 sm:inline-block sm:w-auto"
                  href="#"
                >
                  Buy BetaKIDS®
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* other section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
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

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Beta Glucan
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
              in, accusamus quisquam.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Peace of mind for this family!
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                "My kids are really loving the immune gummies! They love the taste plus the packaging is great,
                especially since it comes with so many goodies. It's really nice to have the extra immune support from
                the beta glucan and vitamin D - especially during the cold season. 🤗"
              </p>
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
              <img
                className="relative mx-auto rounded-xl shadow-xl"
                width={490}
                src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/Image_from_iOS_1500x.jpg?v=1647884051"
                alt=""
              />
            </div>
          </div>

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
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  They were reminding ME to take their gummies!
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  "My kids liked the chart and stickers and everything that came with the vitamins. They were reminding
                  ME to take their vitamins. They said they loved the way it tasted! I like the ingredients (or lack
                  thereof I should say) Overall, I’d say it’s been a success with them. At first, I didn’t think my kids
                  would like the texture of them, but they actually didn’t mind. Plus, I can smoosh it up into some
                  juice pretty easily if I needed to lol"
                </p>
                <div className="mt-6 flex justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
                    >
                      Buy BetaKIDS®
                    </a>
                  </div>
                </div>
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
                <img
                  className="relative mx-auto rounded-xl shadow-xl"
                  width={490}
                  src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/F5CC8544-7508-4507-BC07-8F278490CAF8_1500x.jpg?v=1651088832"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full width with vertical images */}
      <div width with vertical imagesiv className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pediatric Research</h2>
              <p className="mt-3 text-lg text-gray-500">
                The proof is in the pudding. Here are the clinical trials backing our claims--and why we are so excited
                about Beta Glucan!
              </p>
            </div>

            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium ">
                          <h3>{person.name}</h3>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                        <div>
                          <a href="http://" className="font-medium  text-red-500">
                            Learn More →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();

  return {
    props: {
      navigation,
      footer
    }
  };
};

export default TheSciencePage;
