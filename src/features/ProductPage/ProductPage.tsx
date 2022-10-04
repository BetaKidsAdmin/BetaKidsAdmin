import Wrapper from 'components/Wrapper/Content';
import { CtaBrandPanelWithOverlappingImage } from 'features/Global/CtaBrandPanelWithOverlappingImage/CtaBrandPanelWithOverlappingImage';
import { FaqOneColumn } from 'features/Global/FaqOneColumn/FaqOneColumn';
import { FaqTwoColumnsWithImage } from 'features/Global/FaqTwoColumnsWithImage/FaqTwoColumnsWithImage';
import { FeaturesAlternativeSideBySideWithImages } from 'features/Global/FeaturesAlternativeSideBySideWithImages/FeaturesAlternativeSideBySideWithImages';
import { FeaturesFullWidthWithVerticalImages } from 'features/Global/FeaturesFullWidthWithVerticalImages/FeaturesFullWidthWithVerticalImages';
import { FeaturesGrid } from 'features/Global/FeaturesGrid/FeaturesGrid';
import { NewsletterCenteredCardWithGraphic } from 'features/Global/NewsletterCenteredCardWithGraphic/NewsletterCenteredCardWithGraphic';
import { TestimonialWithOverlappingImage } from 'features/Global/TestimonialWithOverlappingImage/TestimonialWithOverlappingImage';
import { TrustpilotWithData } from 'features/ProductPage/Trustpilot/TrustpilotWIthData';
import { Details } from './Details/Details';
import { Policies } from './Policies/Policies';
import { Product, ProductProps } from './Product/Product';
import { RelatedProductsWithData } from './RelatedProducts/RelatedProductsWithData';
import { ProductPageOptions } from './types';

export type ProductPageProps = Omit<ProductProps, 'showFeaturedReviews' | 'showBreadcrumbs' | 'showReviewsLink'> & {
  reviewsPerPage?: number;
  reviewList: ReviewList | null;
  trustpilotReviewList: ReviewList | null;
  options: Omit<ProductPageOptions, 'component'>;
  details: ProductPageDetails | null;
  policies: ProductPagePolicies | null;
};

function pageChildToComponent() {
  const PageComponent = (component, index = 0) => {
    switch (component.__typename) {
      case 'CtaBrandPanelWithOverlappingImageComponent':
        return <CtaBrandPanelWithOverlappingImage key={index} {...component} />;
      case 'FaqOneColumnComponent':
        return <FaqOneColumn key={index} {...component} />;
      case 'FaqTwoColumnsWithImageComponent':
        return <FaqTwoColumnsWithImage key={index} {...component} />;
      case 'FeaturesAlternativeSideBySideWithImagesComponent':
        return <FeaturesAlternativeSideBySideWithImages key={index} {...component} />;
      case 'FeaturesFullWidthWithVerticalImagesComponent':
        return <FeaturesFullWidthWithVerticalImages key={index} {...component} />;
      case 'FeaturesGridComponent':
        return <FeaturesGrid key={index} {...component} />;
      case 'NewsletterCenteredCardWithGraphicComponent':
        return <NewsletterCenteredCardWithGraphic key={index} {...component} />;
      case 'TestimonialWithOverlappingImageComponent':
        return <TestimonialWithOverlappingImage key={index} {...component} />;

      default:
        return null;
    }
  };

  return PageComponent;
}

export const ProductPage = ({
  product,
  reviewHighlights,
  component,
  options,
  details,
  policies,
  reviewList,
  trustpilotReviewList,
  trustpilotSummary,
  breadcrumbs,
  reviewsPerPage,
  sections
}: ProductPageProps) => {
  const { showDetails, showPolicies, showReviewsIo, showTrustpilot, showRelatedProducts, showBreadcrumbs } = options;

  return (
    <>
      <div className="bg-background">
        <Product
          component={component}
          product={product}
          reviewHighlights={reviewHighlights}
          showFeaturedReviews={!showReviewsIo}
          breadcrumbs={breadcrumbs}
          showBreadcrumbs={showBreadcrumbs}
          showReviewsLink={showReviewsIo}
          trustpilotSummary={trustpilotSummary}
        />
      </div>
      <div className="bg-background overflow-hidden">
        {sections?.map(pageChildToComponent())}
        {(showDetails || showPolicies) && (
          <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {details && showDetails && <Details details={details} />}
            {policies && showPolicies && <Policies policies={policies} />}
          </div>
        )}
      </div>
      <div className="bg-background">
        <Wrapper>
          {showTrustpilot && trustpilotReviewList && (
            <TrustpilotWithData sku={'BK-31-2,BK-30'} reviewList={trustpilotReviewList} />
          )}
          {showRelatedProducts && <RelatedProductsWithData limit={4} productId={product.id} />}
        </Wrapper>
      </div>
    </>
  );
};
