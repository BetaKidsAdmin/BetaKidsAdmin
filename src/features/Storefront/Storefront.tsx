import { CtaBrandPanelWithOverlappingImage } from 'features/Global/CtaBrandPanelWithOverlappingImage/CtaBrandPanelWithOverlappingImage';
import { FaqTwoColumnsWithImage } from 'features/Global/FaqTwoColumnsWithImage/FaqTwoColumnsWithImage';
import { FeaturesAlternativeSideBySideWithImages } from 'features/Global/FeaturesAlternativeSideBySideWithImages/FeaturesAlternativeSideBySideWithImages';
import { FeaturesGrid } from 'features/Global/FeaturesGrid/FeaturesGrid';
import { NewsletterCenteredCardWithGraphic } from 'features/Global/NewsletterCenteredCardWithGraphic/NewsletterCenteredCardWithGraphic';
import { TestimonialWithOverlappingImage } from 'features/Global/TestimonialWithOverlappingImage/TestimonialWithOverlappingImage';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { Hero } from './Hero/Hero';
import { Sale } from './Sale/Sale';
import { Testimonials } from './Testimonials/Testimonials';
import { BackgroundImageChild, StorefrontChild } from './types';

function backgroundImageChildToComponent(component: BackgroundImageChild, index = 0) {
  switch (component.__typename) {
    case 'SaleComponent':
      return <Sale key={index} {...component} />;
    case 'TestimonialsComponent':
      return <Testimonials key={index} {...component} />;
    default:
      return null;
  }
}

function storefrontChildToComponent() {
  const StorefrontComponent = (component: StorefrontChild, index = 0) => {
    switch (component.__typename) {
      case 'CtaBrandPanelWithOverlappingImageComponent':
        return <CtaBrandPanelWithOverlappingImage key={index} {...component} />;
      case 'FaqTwoColumnsWithImageComponent':
        return <FaqTwoColumnsWithImage key={index} {...component} />;
      case 'FeaturesAlternativeSideBySideWithImagesComponent':
        return <FeaturesAlternativeSideBySideWithImages key={index} {...component} />;
      case 'FeaturesGridComponent':
        return <FeaturesGrid key={index} {...component} />;
      case 'NewsletterCenteredCardWithGraphicComponent':
        return <NewsletterCenteredCardWithGraphic key={index} {...component} />;
      case 'TestimonialWithOverlappingImageComponent':
        return <TestimonialWithOverlappingImage key={index} {...component} />;
      case 'HeroComponent':
        return <Hero key={index} {...component} />;

      default:
        return null;
    }
  };

  return StorefrontComponent;
}

export interface StorefrontProps {
  storefront: GetStorefrontQueryResponse['storefront'];
}

export const Storefront = ({ storefront }: StorefrontProps) => {
  return <div className="bg-background">{storefront?.components?.map(storefrontChildToComponent())}</div>;
};
