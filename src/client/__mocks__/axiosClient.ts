class mockAxiosClient {
  data = {
    title: 'title',
    pageId: '1',
    firstParagraph: 'firstParagraph',
  };

  getWikiData = () => new Promise((resolve) => {
    process.nextTick(() => resolve(this.data));
  });
};

export default new mockAxiosClient();
