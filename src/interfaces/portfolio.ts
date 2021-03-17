export interface PortfolioAttributes {
  places: Place[];
}

export interface Place {
  name: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  src: string;
  height: number;
  width: number;
}
