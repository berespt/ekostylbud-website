export interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
  client_title: string;
  clients: Client[];
}

export interface Client {
  name: string;
  description: string;
}
