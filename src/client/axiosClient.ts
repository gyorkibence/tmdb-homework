import { wikiURL } from 'services/consts';
import * as API from 'services/api';

export interface ResultFromWiki {
  pageid: string;
  extract: string;
  title: string;
};

class Client {
  getWikiData = async (title: string) => {
    try {
      const wikiData: {
        query: {
          pages: {
            [key: string]: ResultFromWiki,
          },
        },
      } = await API.getData(`${wikiURL}/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&titles=${title}`);
      const data: ResultFromWiki = Object.values(wikiData.query.pages)[0];
      return {
        pageId: data.pageid,
        firstParagraph: data.extract,
        title: data.title,
      };
    } catch (error) {
      return error;
    }
  };
};

export default new Client();
