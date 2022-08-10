import { StarIcon } from '@heroicons/react/solid';
import classNames from 'utils/classNames';

const MOCKED_PRODUCT = {
  rating: '4.9',
  reviewCount: 1234
};

export const ReviewsCounter = () => {
  return (
    <div className="mt-4">
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {MOCKED_PRODUCT.rating}
          <span className="sr-only"> out of 5 stars</span>
        </p>
        <div className="ml-1 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                MOCKED_PRODUCT.rating > rating ? 'text-red-400' : 'text-gray-200',
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
            See all {MOCKED_PRODUCT.reviewCount} reviews
          </a>
        </div>
      </div>
    </div>
  );
};
