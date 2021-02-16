import { makeAutoObservable } from 'mobx';
import { MovieResult, Movie } from 'models/Movie.model';

class AppStore {
  movies: Movie[] = [];
  moviesLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMoviesData = (movies: MovieResult) => {
    this.movies = movies.searchMovies;
  };

  setMoviesLoading = (loading: boolean) => {
    this.moviesLoading = loading;
  };
};

export default new AppStore();
