import Wrapper from 'components/Wrapper/Content';
import { ContentBody } from 'features/Content/ContentBody';
import { ContentBodyVertorDots } from 'features/Content/ContentBodyVertorDots';
import { ContentHeader } from 'features/Content/ContentHeader';
import { CtaBrandPanelWithOverlappingImage } from 'features/Global/CtaBrandPanelWithOverlappingImage/CtaBrandPanelWithOverlappingImage';
import { FaqTwoColumnsWithImage } from 'features/Global/FaqTwoColumnsWithImage/FaqTwoColumnsWithImage';
import { FeaturesAlternativeSideBySideWithImages } from 'features/Global/FeaturesAlternativeSideBySideWithImages/FeaturesAlternativeSideBySideWithImages';
import { FeaturesFullWidthWithVerticalImages } from 'features/Global/FeaturesFullWidthWithVerticalImages/FeaturesFullWidthWithVerticalImages';
import { FeaturesGrid } from 'features/Global/FeaturesGrid/FeaturesGrid';
import { HeroSectionMediumWithIllustration } from 'features/Global/HeroSectionMediumWithIllustration/HeroSectionMediumWithIllustration';
import { NewsletterCenteredCardWithGraphic } from 'features/Global/NewsletterCenteredCardWithGraphic/NewsletterCenteredCardWithGraphic';
import { TestimonialWithOverlappingImage } from 'features/Global/TestimonialWithOverlappingImage/TestimonialWithOverlappingImage';
import { PageGetPageResponse } from 'types/takeshape';

export interface PageProps {
  page: PageGetPageResponse['pageList']['items'][0];
}

function pageChildToComponent() {
  const PageComponent = (component, index = 0) => {
    switch (component.__typename) {
      case 'PageSectionTitle':
        return <ContentHeader key={index} {...component} />;
      case 'PageSectionMdx':
        return (
          <Wrapper>
            <div className="relative px-4 sm:px-6 lg:px-8">
              <ContentBodyVertorDots />
              <ContentBody key={index}>
                <div dangerouslySetInnerHTML={{ __html: component.content }} />
              </ContentBody>
            </div>
          </Wrapper>
        );
      case 'CtaBrandPanelWithOverlappingImageComponent':
        return <CtaBrandPanelWithOverlappingImage key={index} {...component} />;
      case 'FaqTwoColumnsWithImageComponent':
        return <FaqTwoColumnsWithImage key={index} {...component} />;
      case 'FeaturesAlternativeSideBySideWithImagesComponent':
        return <FeaturesAlternativeSideBySideWithImages key={index} {...component} />;
      case 'FeaturesFullWidthWithVerticalImagesComponent':
        return <FeaturesFullWidthWithVerticalImages key={index} {...component} />;
      case 'FeaturesGridComponent':
        return <FeaturesGrid key={index} {...component} />;
      case 'HeroSectionMediumWithIllustrationComponent':
        return <HeroSectionMediumWithIllustration key={index} {...component} />;
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

export const Page = ({ page }: PageProps) => (
  <div className="bg-white overflow-hidden">{page?.sections?.map(pageChildToComponent())}</div>
);

export default Page;
