import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import {
    ChevronDownIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MinusSmIcon,
    PlusSmIcon,
    ScaleIcon
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { useState } from 'react';
import classNames from 'utils/classNames';
import { formatDiscount, formatPrice, pluralizeText } from 'utils/text';

const reviews = { average: 4, totalCount: 1624 };
const product = {
  name: 'The All-Natural, Sugar-Free, Immune Boosting Gummy for Children.',
  price: '$140',
  rating: '4.9',
  reviewCount: 1234,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/products/ProductImageOldBox.png?v=1623274171',
      alt: 'Angled front view with bag zipped and handles upright.'
    },
    {
      id: 2,
      name: 'Angled view',
      src: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/products/Subscription_details_19b30a95-704e-4607-8dc6-819594483337_1445x.png?v=1630691945',
      alt: 'Angled front view with bag zipped and handles upright.'
    },
    {
      id: 3,
      name: 'Angled view',
      src: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/products/preview-gallery-betaglucan-supplement-2_1100x.jpg?v=1627570756',
      alt: 'Angled front view with bag zipped and handles upright.'
    },
    {
      id: 4,
      name: 'Angled view',
      src: 'https://cdn.shopify.com/s/files/1/0045/6517/2288/products/preview-gallery-betaglucan-supplement-1_1445x.jpg?v=1627570759',
      alt: 'Angled front view with bag zipped and handles upright.'
    }
    // More images...
  ],
  description: `
    <p>BetaKIDS® is an all-natural, science-backed gummy shown to double a child's immune response without overstimulation.</p>
  `,
  details: [
    {
      name: 'Features',
      items: ['Proven Immnune Support', 'All Natural', 'Completely Safe', 'Kids Love Them']
    },
    {
      name: 'Shipping',
      items: [
        'Free shipping on orders over $300',
        'International shipping available',
        'Expedited shipping options',
        'Signature required upon delivery'
      ]
    },
    {
      name: 'Returns',
      items: [
        'Easy return requests',
        'Pre-paid shipping label included',
        '10% restocking fee for returns',
        '60 day return window'
      ]
    }
    // More sections...
  ]
};

const options = [
  {
    amount: 3000,
    amountBeforeDiscount: 3000,
    currencyCode: 'USD',
    discountAmount: 0,
    discountType: 'PERCENTAGE',
    hasDiscount: false,
    id: 'gid://shopify/ProductVariant/40184079417444_DAY_0',
    interval: 'DAY',
    intervalCount: 0,
    merchandiseId: 'gid://shopify/ProductVariant/40184079417444',
    name: 'One-time purchase'
  },
  {
    amount: 3000,
    amountBeforeDiscount: 3000,
    currencyCode: 'USD',
    discountAmount: 90,
    discountType: 'PERCENTAGE',
    hasDiscount: true,
    id: 'gid://shopify/ProductVariant/40184079417444_DAY_0',
    interval: 'DAY',
    intervalCount: 0,
    merchandiseId: 'gid://shopify/ProductVariant/40184079417444',
    name: 'Subscribe & Save'
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

const features4 = [
  {
    name: 'The Purest Beta Glucan',
    description: (
      <p>
        The higher the purity, the more effective. Our beta glucan is at least 8x more powerful than any other in the
        market.
      </p>
    ),
    icon: GlobeAltIcon
  },
  {
    name: 'Synergistically Effective',
    description: (
      <p>
        The Vitamin D plus Selenium futher boost the overall effectiveness of our Immune Support = More protection for
        your child.
      </p>
    ),
    icon: ScaleIcon
  },
  {
    name: 'No Junk Gummy',
    description: (
      <p>
        We care about providing the best for your child. Our gummy has no preservatives, no added sugar, non-GMO and is
        main-allergen friendly
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

const faqs2 = [
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  },
  {
    question: 'Where Are All our Ingredients Sourced?',
    answer:
      'All of our ingredients are sourced and then blended together into our gummy in Norway. We only want the very best for our family :)'
  }
  // More questions...
];

const pdpTest = ({ navigation, footer }) => {
  const [selectedColor, setSelectedColor] = useState(options[0]);
  return (
    <Layout navigation={navigation} footer={footer}>
      {/* product hero */}
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img src={image.src} alt="" className="w-full h-full object-center object-cover" />
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
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                {/* <p className="text-3xl text-gray-900">{product.price}</p> */}
              </div>

              {/* Reviews */}
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-red-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                  <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500">
                      See all {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                <div className="max-w-sm">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor}>
                    <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
                    <div className="relative bg-white rounded-md -space-y-px">
                      {options.map((price, priceIdx) => (
                        <RadioGroup.Option
                          key={price.id}
                          value={price}
                          className={({ checked }) =>
                            classNames(
                              priceIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                              priceIdx === options.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                              checked ? 'bg-red-50 border-red-200 z-10' : 'border-gray-200',
                              'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-2 focus:outline-none'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <span className="flex items-center text-sm">
                                <div>
                                  <span
                                    className={classNames(
                                      checked ? 'bg-red-400 border-transparent' : 'bg-white border-gray-300',
                                      active ? 'ring-2 ring-offset-2 ring-red-300' : '',
                                      'h-4 w-4 rounded-full border flex items-center justify-center'
                                    )}
                                    aria-hidden="true"
                                  >
                                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                                  </span>
                                </div>
                                <RadioGroup.Label
                                  as="span"
                                  className={classNames(checked ? 'text-red-900' : 'text-gray-900', 'ml-3 font-medium')}
                                >
                                  {price.name} {price.hasDiscount && `(${formatDiscount(price)})`}
                                </RadioGroup.Label>
                              </span>
                              <RadioGroup.Description
                                as="span"
                                className={classNames(
                                  checked ? 'text-red-700' : 'text-gray-500',
                                  'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right flex items-center place-content-end'
                                )}
                              >
                                {formatPrice(price.currencyCode, price.amount)}
                                {price.intervalCount > 0 &&
                                  ` / ${pluralizeText(
                                    price.intervalCount,
                                    price.interval.toLowerCase(),
                                    `${price.interval.toLowerCase()}s`
                                  )}`}
                              </RadioGroup.Description>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-red-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(open ? 'text-red-600' : 'text-gray-900', 'text-sm font-medium')}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-red-400 group-hover:text-red-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
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
              {features4.map((feature) => (
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

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs2.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
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
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { globalSettings, navigation, footer } = await getLayoutData();

  return {
    props: {
      navigation,
      footer
    }
  };
};

export default pdpTest;
