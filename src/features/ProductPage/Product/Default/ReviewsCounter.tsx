import { StarIcon } from '@heroicons/react/24/solid';
import classNames from 'utils/classNames';

export const ReviewsCounter = ({ trustpilotSummary }) => {
  if (!trustpilotSummary) {
    return null;
  }
  return (
    <div className="mt-4">
      <h2 className="sr-only">Reviews</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-700">
          {trustpilotSummary.average}
          <span className="sr-only"> out of 5 stars</span>
        </p>
        <div className="ml-1 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                trustpilotSummary.average > rating ? 'text-red-400' : 'text-gray-200',
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
          <a href="#reviews" className="text-sm font-medium text-red-600 hover:text-red-500">
            See all {trustpilotSummary.total} reviews
          </a>
        </div>
      </div>
    </div>
  );
};
