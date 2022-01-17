import cn from "classnames";
export default {
  menuBlockClasses: (openMenu: boolean) =>
    cn(
      "flex md:justify-center md:absolute md:top-14 md:bg-neutral-800 md:w-screen md:h-screen transition-transform duration-300 ease-in-out md:-translate-x-full md:right-0 md:mb-2 md:-right-x-10",
      {
        "md:-translate-x-0": openMenu,
      }
    ),
  menuListClasses:
    "md:flex-col md:items-center md:my-24 text-white uppercase font-semibold flex items-center space-x-4 md:space-x-0 md:space-y-4",
  menuListItemClasses:
    "hover:-rotate-3 transition duration-300 ease-linear cursor-pointer hover:text-gray-400 ",
  headerClasses: "py-3 bg-neutral-800 fixed w-full",
  containerClasses: "container mx-auto max-w-7xl px-5 flex items-center justify-between",
  headerTitleClasses:
    "text-white text-2xl hover:cursor-pointer transition-colors hover:text-gray-400 duration-300 ease-linear font-bold uppercase",
  menuButtonClasses: "hidden md:block text-white",
};
