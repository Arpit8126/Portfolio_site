interface BaseType {
  name?: string;
  logo: string;
  title: string;
  description: string;
  live_link: string;
}

export interface projectType extends BaseType {
  github_link: string;
  stack_image: string[];
}
export interface exprienceType extends BaseType {
  date: string;
}
