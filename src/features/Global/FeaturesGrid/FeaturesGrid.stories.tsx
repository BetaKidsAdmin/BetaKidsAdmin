import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeaturesGrid } from './FeaturesGrid';

const Meta: ComponentMeta<typeof FeaturesGrid> = {
  title: 'Features / Global / Components / FeaturesGrid',
  component: FeaturesGrid,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof FeaturesGrid> = (args) => <FeaturesGrid {...args} />;

export const _FeaturesGrid = Template.bind({});
_FeaturesGrid.args = {
  blocks: [
    {
      descriptionHtml:
        '<p>Parents miss work, appointments, and activities. Kids and siblings miss school, sports, parties and more. Many of these missed events require makeup work/time.</p>',
      iconName: 'globe-alt',
      title: 'Missing Important Events.'
    },
    {
      descriptionHtml:
        "<p>You are heartbroken seeing your little ones suffering frequent sick days. You feel powerless in protecting your family with multiple supplements that aren't effective.</p>",
      iconName: 'globe-alt',
      title: 'Heartbroken & Powerless.'
    },
    {
      descriptionHtml:
        '<p>When one kid gets sick, it affects everybody in your family. The other kids get sick, schedules are upended, stress levels rise and peace of mind is out the door.</p>',
      iconName: 'globe-alt',
      title: 'With A Domino Effect.'
    }
  ],
  heading: 'Sick Days Disrupt Your Family.',
  preheading: 'BETAKIDS',
  subheadingHtml:
    '<p>The problem is... multi-vitamin supplements alone don’t seem to make much difference in preventing sick days, which leaves you:</p>'
};

export default Meta;
