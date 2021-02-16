import { Movie } from "./Movie.model";

export interface MovieRow {
  id: string;
  name: string;
  genres: string;
  score: number;
  imdb: string | null;
  similar: Movie[];
}
