import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import classNames from 'utils/classNames';

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

const features2 = [
  {
    name: 'Missing Important Events.',
    description:
      'Parents miss work, appointments, and activities. Kids and siblings miss school, sports, parties and more. Many of these missed events require makeup work/time.',
    icon: GlobeAltIcon
  },
  {
    name: 'Heartbroken & Powerless.',
    description:
      "You are heartbroken seeing your little ones suffering frequent sick days. You feel powerless in protecting your family with multiple supplements that aren't effective.",
    icon: ScaleIcon
  },
  {
    name: 'With A Domino Effect.',
    description:
      'When one kid gets sick, it affects everybody in your family. The other kids get sick, schedules are upended, stress levels rise and peace of mind is out the door.',
    icon: LightningBoltIcon
  }
];

const features3 = [
  {
    name: 'Beta Glucan',
    description: (
      <p>
        Beta Glucan is the most researched immune support product in the world, with <strong>190,000+ studies</strong>.
        Our <strong>Glucan 300®</strong> is the{' '}
        <span style={{ textDecoration: 'underline' }}>purest, most effective beta glucan.</span>
      </p>
    ),
    icon: GlobeAltIcon
  },
  {
    name: 'Vitamin D3',
    description: (
      <p>
        Vitamin D3 helps strengthen and improve <strong>cell function</strong>, reinforces <strong>healthy</strong>{' '}
        growing bones, and has been shown to <strong>enhance</strong> you're immune system's defenses.
      </p>
    ),
    icon: ScaleIcon
  },
  {
    name: 'Selenium',
    description: (
      <p>
        Selenium helps promote a <strong>healthy immune response</strong> and acts as a powerful{' '}
        <strong>antioxidant</strong> which helps with preventing cell damage caused by free radicals.
      </p>
    ),
    icon: LightningBoltIcon
  }
];

const faqs = [
  {
    id: 1,
    question: 'Immune Support Gummies (monthly)',
    answer:
      'Our tasty, science-backed immune support gummy. Specially formulated just for kids with Beta Glucan, Selenium and Vitamin D3.',
    defaultOpen: true
  },
  {
    id: 2,
    question: 'Immune Support Gummies (monthly)',
    answer:
      'Our tasty, science-backed immune support gummy. Specially formulated just for kids with Beta Glucan, Selenium and Vitamin D3.'
  },
  {
    id: 3,
    question: 'Immune Support Gummies (monthly)',
    answer:
      'Our tasty, science-backed immune support gummy. Specially formulated just for kids with Beta Glucan, Selenium and Vitamin D3.'
  },
  {
    id: 4,
    question: 'Immune Support Gummies (monthly)',
    answer:
      'Our tasty, science-backed immune support gummy. Specially formulated just for kids with Beta Glucan, Selenium and Vitamin D3.'
  },
  {
    id: 5,
    question: 'Immune Support Gummies (monthly)',
    answer:
      'Our tasty, science-backed immune support gummy. Specially formulated just for kids with Beta Glucan, Selenium and Vitamin D3.'
  }
];

export const TestMarkup = () => {
  return (
    <>
      {/* features section */}

      {/* <div className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features1.map((feature) => (
              <div key={feature.name} className="text-center">
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500 md:py-4 md:text-lg md:px-10"
            >
              Buy BetaKIDS®
            </a>
          </div>
        </div>
      </div> */}
      {/* Feature section with grid */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-red-400 uppercase">BetaKIDS</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Sick Days Disrupt Your Family.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            The problem is... multi-vitamin supplements alone don’t seem to make much difference in preventing sick
            days, which leaves you:
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
                  Our Secret Weapon
                </h2>
                <p className="text-lg text-white">
                  The BetaKIDS® Immune Support gummy. <strong>Powered by Beta Glucan.</strong>{' '}
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
      {/* Feature section with grid */}
      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Clinically-Proven Ingredients
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            <strong>BetaKIDS®</strong> is an all-natural,{' '}
            <a href="#" title="BetaKIDS Immune Support Science">
              science-backed
            </a>{' '}
            gummy that has been shown to <strong>double a child's immune response</strong> without overstimulation.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features3.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-8">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r bg-red-400 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <div className="mt-5 text-base text-gray-500">{feature.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial section */}
      <div className="pb-16 bg-gradient-to-r from-orange-300 to-red-400 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    “Children who consumed Beta Glucan had Fewer Days Missed of Day Care due to Illness”
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Journal of the American Academy of Pediatrics</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* faq */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">The Subscription Box</h2>
            <div className="mt-4 text-gray-500">
              <p>
                We're making immune health <strong>fun, educational</strong> and <strong>engaging</strong> for kids and
                families.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} defaultOpen={faq?.defaultOpen} className="pt-6">
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
                            <p className="text-base text-gray-500">{faq.answer}</p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
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
                  src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/BK_Unboxing-1andstop_1500x.gif?v=1637768157"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-12 flex justify-center">
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
              Healthier Kids. Happier Families.
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
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                A huge hit with the kiddos!
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                "These chewable gummies have been a huge hit for the kiddos! I definitely notice that they are
                maintaining and supporting their immune response, which is super important these days. I love how they
                are made with all natural ingredients, with no artificial coloring or flavoring, no GMO's, gluten and
                lactose free... AND they are yummy! On top of that, it comes with a super fun set of daily calendar
                reminder, stickers and markers so they can record their progress too! Thank you so much BetaKids!"
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
                src="https://cdn.shopify.com/s/files/1/0045/6517/2288/files/84878222-DBAA-4D84-AA65-68D7DD13379E_1500x.jpg?v=1651086202"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-red-400 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-red-300 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-red-500 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <p className="text-base font-semibold uppercase tracking-wider text-red-100 "> FREE 56-page eBook!</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  How to Stay Healthy as a Family
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-red-100">
                  Join to get our 56-page Healthy Family e-book (plus deals, Healthy Habit emails and more)
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500 sm:px-10"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
