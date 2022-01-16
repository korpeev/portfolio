import cn from 'classnames';
export default {
  menuBlockClasses: (openMenu: boolean) =>
    cn(
      'flex md:justify-center md:items-center md:absolute  md:top-14 md:bg-neutral-800 md:w-screen md:h-1/2 transition-transform duration-300 ease-in-out md:-translate-x-full md:right-0',
      {
        'md:translate-x-0': openMenu,
      }
    ),
  menuListClasses:
    'md:flex-col md:items-center text-white uppercase font-semibold flex items-center space-x-4 md:space-x-0 md:space-y-4',
  menuListItemClasses:
    'hover:-rotate-3 transition-transform duration-300 ease-linear cursor-pointer',
  headerClasses: 'py-3 bg-neutral-800',
  containerClasses: 'container mx-auto px-5 flex items-center justify-between',
  headerTitleClasses: 'text-white text-2xl',
  menuButtonClasses: 'hidden md:block text-white',
};
