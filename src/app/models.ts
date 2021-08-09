export interface Game {
  page: number;
  page_size: number;
  developers: Developers[];
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Genre[];
  parent_platforms: ParentPlatforms[];
  publishers: Publishers[];
  ratings: Ratings[];
  screenshots: Screenshots[];
  trailers: Trailer[];
}

export interface APIResponse<Game> {
  results: Game[];
  next: string;
  previous: string | null;
  count: number;


}export interface Developers {
  dev: string;
}

interface  Genre {
  name: string;
}

interface ParentPlatforms {
  platform: {
    name: string,
    slug: string
  }
}

interface Publishers {
  name: string;
}

interface Ratings {
  id: number;
  count: number;
  title: string;
}

interface Screenshots {
  image: string;
}

interface Trailer {
  data: {
    max: string
  };
}
