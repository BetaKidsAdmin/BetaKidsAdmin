import Wrapper from 'components/Wrapper/Content';
import { ContentBody } from 'features/Content/ContentBody';
import { ContentBodyVertorDots } from 'features/Content/ContentBodyVertorDots';
import { ContentHeader } from 'features/Content/ContentHeader';
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

      default:
        return null;
    }
  };

  return PageComponent;
}

export const PolicyPage = ({ page }: PageProps) => (
  <div className="bg-white overflow-hidden">{page?.sections?.map(pageChildToComponent())}</div>
);

export default PolicyPage;
