export interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
  client_title: string;
  clients: Client[];
  steps_version: number;
  steps: Step[];
  steps_image: string;
  pricing_title: string;
  pricing_description: string;
  plans: Plan[];
  team_version: number;
  team_title: string;
  team_description: string;
  team: Team[];
  blog_version: number;
  blog_title: string;
  blog_description: string;
  posts: string[];
}

export interface Client {
  name: string;
  description: string;
}
export interface Step {
  name: string;
  description: string;
}

export interface Plan {
  name: string;
  description: string;
  price: string;
  usps: { name: string }[];
}

export interface Team {
  name: string;
  description: string;
  position: string;
  image: string;
}
