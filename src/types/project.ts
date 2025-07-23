
interface BaseType {
  name?: string;
  logo: string;
  title: string;
  description: string;
}

export interface projectType extends BaseType {
 
  live_link:string,
  github_link:string
}
export interface exprienceType extends BaseType {
  date: string;
}
