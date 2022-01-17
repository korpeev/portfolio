type ProjectLink = { [key: string]: string };
export type MenuList = {
  text: string;
  href: string;
};

export type ProjectList = {
  name: string;
  description: string;
  stackList: string[];
  path: string;
  links: ProjectLink[];
};
export type ImgSelector = {
  [key: string]: string;
};
