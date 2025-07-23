export interface projectType {
  name?: string;
  logo: string;
  title: string;
  description: string;
  live_link:string,
  github_link:string
}
export interface exprienceType extends projectType {
  date: string;
}
