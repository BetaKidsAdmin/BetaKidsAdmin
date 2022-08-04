import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';

import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';

const features2 = [
  {
    name: 'Think Like a Kid.',
    description:
      'Parents miss work, appointments, and activities. Kids and siblings miss school, sports, parties and more. Many of these missed events require makeup work/time.',
    icon: GlobeAltIcon
  },
  {
    name: 'Be Diligent.',
    description:
      "You are heartbroken seeing your little ones suffering frequent sick days. You feel powerless in protecting your family with multiple supplements that aren't effective.",
    icon: ScaleIcon
  },
  {
    name: 'Be Generous.',
    description:
      'When one kid gets sick, it affects everybody in your family. The other kids get sick, schedules are upended, stress levels rise and peace of mind is out the door.',
    icon: LightningBoltIcon
  }
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
                  The BetaKIDS Story
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  On a mission to empower families through healthier and happier kids.
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
                  <img className="w-full" src="/images/Eating-together-pana.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Focused on Family
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              We're a health-based Christian organization sharing the good news through good health. We strongly believe
              that our team members and customers are all part of the same family. Having a standpoint full of love and
              compassion brings each of us closer to a brighter future.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Our Mission.</h3>
              <p className="mt-3 text-lg text-gray-500">
                We live in a world full of toxic and carcinogenic materials that constantly attack and hinder our bodies
                - especially the bodies of our children. You, as parents already have the ultimate responsibility of
                raising your children, and so having sickness disrupt your family should not be the norm. We strongly
                believe in our product and have a mission to deliver this to the hands of as many families as possible.
                "So whoever knows the right thing to do and fails to do it, for him it is sin." James 4:17
              </p>
            </div>

            <div className="mt-10 relative lg:mt-0" aria-hidden="true">
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
                src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/84878222-DBAA-4D84-AA65-68D7DD13379E_750x.jpg?v=1651086202"
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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Our Product.</h3>
                <p className="mt-3 text-lg text-gray-500">
                  Beta Glucan is the most studied and most effective immune support supplement currently available on
                  the market. However, since it's so new (and recently became affordable AND effective due to our 200+
                  patents), most people haven't heard of this. Imagine your child with a doubled immune response without
                  overstimulation. This allows for the immune system to recognize cells that are both self and non-self
                  more effectively. This means that their immune system would help them get less sick and sick less. The
                  immune response can be supported with beta-glucan in a safe and natural way. Keep in mind that our
                  Beta Glucan makes a person’s immune system smarter and stronger, but never causes overstimulation or
                  harm. There are no known side effects. Want to learn more? Just go to The Science Page!
                </p>

                {/* <dl className="mt-10 space-y-10">
                  {features2.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl> */}

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
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                </svg>
                <img
                  className="relative mx-auto rounded-xl shadow-xl"
                  width={490}
                  src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/yeast-gf7b5a3456_1280_750x.jpg?v=1654721028"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
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
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Family Sticks Together
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              We're here for you. You're the hero of your story AND your children's story. Let us help you by giving you
              the tools to best support your child's immune system.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Our Family Story.</h3>
              <div className="mt-3 text-lg text-gray-500 space-y-4">
                <p>
                  "Our family is big into rhythms. With 4 kids, our daily wellness rhythm is one of our most valuable in
                  terms of total family impact. Since our first child was born, we have been on a mission to find the
                  most effective - and natural as possible - products to mitigate the effects of sickness in our
                  family.&nbsp; From Vitamin C and elderberry to nasal rinses and nebulizers, we have developed a
                  regimen for each of us.
                </p>
                <p>
                  A couple of years ago a friend pointed us to an immune support product we hadn't yet heard of called
                  Beta Glucan.&nbsp; After diving into the research and reading the product reviews, we have since added
                  BetaKids Immune Support gummies to our kids' morning routine.&nbsp; They love the taste (it’s like a
                  first thing in the morning treat) and each have their own box that they sharpie their names (and a all
                  sorts of scribbles and drawings) on.
                </p>
                <p>
                  Since the kids have been taking Beta Kids daily for over 3 years now, we have noticed colds and flus
                  being less severe and the duration of the sickness is shorter. I'm sure the additional Selenium and
                  vitamin D3 help.
                </p>
                <p>
                  An even bigger apparent benefit to us than severity and duration improvements from everyone taking
                  Beta Glucan, has been in limiting the number of family members who are sick at the same time.&nbsp; In
                  the past, when one of us got sick others in the family would catch it.&nbsp; This year each time a kid
                  had a cold or flu, no one else in the family caught it or showed any symptoms.
                </p>
                <p>
                  Obviously we’re believers in the benefits of beta glucan for our immune systems.&nbsp; BetaKids make
                  it easy for us as parents and fun for them as kids to ensure their immune systems are getting an
                  additional boost to the other healthy choices we make as a family.
                </p>
                <p>Our #1 benefit of BetaKids as parents?&nbsp; Peace of mind."</p>
              </div>
            </div>

            <div className="mt-10 relative lg:mt-0" aria-hidden="true">
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
                src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/family-portrait_750x.jpg?v=1638551968"
                alt=""
              />
            </div>
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
