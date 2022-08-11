import { HeaderNavigation } from '../../types';

export const TopMessage = ({ message }: Pick<HeaderNavigation, 'message'>) => {
  return (
    <p
      className="flex-1 text-center text-sm font-medium text-white lg:flex-none"
      dangerouslySetInnerHTML={{ __html: message }}
    ></p>
  );
};
