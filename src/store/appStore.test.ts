jest.mock('../client/axiosClient');
import AppStore from './appStore';

describe('App Store tests', () => {
  it('should get graphql search initial state', async () => {
    const store = AppStore;
    expect(store.moviesLoading).toBe(false);
    expect(store.movies).toBe(null);
  });

  it('should get wiki search initial state', async () => {
    const store = AppStore;
    expect(store.wikiLoading).toBe(false);
    expect(store.wiki).toStrictEqual({});
    expect(store.wikiErrorMessage).toBe('');
  });

  it('should get data from wiki', async () => {
    const store = AppStore;
    const data = {
      title: 'title',
      pageId: '1',
      firstParagraph: 'firstParagraph',
    };
    await store.getWikiData(data.title);
    expect(store.wikiLoading).toBe(false);
    expect(store.wiki).toStrictEqual({
      ...store.wiki,
      [data.title]: {
        ...data,
      },
    });
    expect(store.wikiErrorMessage).toBe('');
  });
});