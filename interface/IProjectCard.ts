export default interface IProjectCard {
  title: string;
  description: string[];
  links: Array<{
    title: string;
    link: string;
  }>;
}
