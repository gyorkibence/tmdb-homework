import { makeAutoObservable, runInAction } from 'mobx';
import { MovieResult, Movie } from 'models/Movie.model';
import Client from 'client/axiosClient';
import { WikiData } from 'models/Wiki.model';

class AppStore {
  movies: Movie[] | null = null;
  moviesLoading: boolean = false;

  wiki: { [title: string]: WikiData; } = {};
  wikiLoading: boolean = false;
  wikiErrorMessage: string = '';
  constructor() {
    makeAutoObservable(this);
  }

  setMoviesData = (movies: MovieResult) => {
    this.movies = movies.searchMovies;
  };

  setMoviesLoading = (loading: boolean) => {
    this.moviesLoading = loading;
  };

  getWikiData = async (title: string) => {
    try {
      if (!this.wiki[title]) {
        runInAction(() => {
          this.wikiLoading = true;
        });
        const wikiData: WikiData = await Client.getWikiData(title);
        runInAction(() => {
          this.wiki = {
            ...this.wiki,
            [wikiData.title]: {
              ...wikiData,
            },
          };
          this.wikiLoading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.wikiErrorMessage = error.message;
        this.wikiLoading = false;
      });
    }
  };
};

export default new AppStore();
