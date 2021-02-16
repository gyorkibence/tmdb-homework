export interface Movie {
  id: string;
  name: string;
  score: number;
  genres: Array<{ name: string }>;
  socialMedia: { imdb?: string };
  similar: Movie[];
}

export interface MovieResult {
  searchMovies: Movie[];
}
