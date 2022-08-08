import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hero } from './Hero';

const Meta: ComponentMeta<typeof Hero> = {
  title: 'Features / Storefront / Components / Hero',
  component: Hero,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const _Hero = Template.bind({});
_Hero.args = {
  features: [
    {
      description: 'Synergistic ingredients proven to support the immune system.',
      iconName: 'globe-alt',
      title: 'Proven Ingredients.'
    },
    {
      description: 'No junk, sugar-free gummy that your child will love.',
      iconName: 'globe-alt',
      title: 'Healthy, Safe and Fun!'
    },
    {
      description: 'Peace of mind through healthier and happier kids.',
      iconName: 'globe-alt',
      title: 'Happier Families.'
    }
  ],
  firstButton: {
    text: 'Buy BetaKIDS®',
    url: '/products/beta-kids-immune-support-gummies'
  },
  primaryText: {
    firstRow: 'The Immune Gummy',
    secondRow: 'Created for Kids.'
  },
  secondButton: {
    text: 'The Science',
    url: '/pages/betakids-immune-support-science'
  },
  secondaryText:
    "BetaKIDS® is an all-natural, science-backed gummy shown to double a child's immune response without overstimulation."
};

export default Meta;
