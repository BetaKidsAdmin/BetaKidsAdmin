import * as Heroicons from '@heroicons/react/24/outline';

export const transformIconName = (iconName: string) => {
  const arr = iconName.split('-');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('') + 'Icon';
};

export const getHeroIcon = (iconName: string) => {
  const Component = Heroicons?.[iconName] || null;
  return <Component />;
};
