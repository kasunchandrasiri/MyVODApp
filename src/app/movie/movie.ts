export class Movie {
  title: string;
  description: string;
  type: string;
  publishedDate: number;
  availableDate: number;
  metadata: any[];
  contents: any[];
  credits: any[];
  parentalRatings: any[];
  images: any[];
  categories: any[];
  id: string;

  constructor(title: string,
              description: string,
              type: string,
              publishedDate: number,
              availableDate: number,
              metadata: any[],
              contents: any[],
              credits: any[],
              parentalRatings: any[],
              images: any[],
              categories: any[],
              id: string) {
  }
}
