import ProductPriceSelect from 'components/Product/ProductPriceSelect';
import { addToCartAtom, isCartOpenAtom } from 'features/Cart/store';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';

import { AdditionalDetails } from 'features/ProductPage/Product/Default/AdditionalDetails';
import { ImageGallery } from 'features/ProductPage/Product/Default/ImageGallery';
import { ReviewsCounter } from 'features/ProductPage/Product/Default/ReviewsCounter';

export const ProductDefault = ({ product }) => {
  const { name, description, otherDescriptionHtml, additionalDetails = [], images, hasStock } = product;

  const selectedVariant = product.variants[0];

  const [selectedPrice, setSelectedPrice] = useState(selectedVariant.prices[0]);

  useEffect(() => {
    setSelectedPrice(selectedVariant.prices[0]);
  }, [selectedVariant]);

  const addToCart = useSetAtom(addToCartAtom);
  const setIsCartOpen = useSetAtom(isCartOpenAtom);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();

      addToCart({
        product,
        variant: selectedVariant,
        price: selectedPrice,
        // Provided by user input, e.g., a monogram component allowing the user to enter text
        attributes: []
      });

      setIsCartOpen(true);
    },
    [addToCart, product, selectedVariant, selectedPrice, setIsCartOpen]
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <ImageGallery images={images} />

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{name}</h1>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-700 mt-2">{description}</h2>

            {/* Reviews */}
            <ReviewsCounter />

            {otherDescriptionHtml && (
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: otherDescriptionHtml }}
                />
              </div>
            )}

            <form className="mt-6">
              {hasStock && selectedVariant.prices.length > 1 && (
                <div className="mt-10 max-w-sm">
                  <ProductPriceSelect
                    value={selectedPrice}
                    onChange={setSelectedPrice}
                    options={selectedVariant.prices}
                  />
                </div>
              )}

              <button
                disabled={!hasStock}
                onClick={handleAddToCart}
                className="mt-10 max-w-xs  w-full bg-red-400 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add to cart
              </button>
            </form>

            <AdditionalDetails details={additionalDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};
