export interface WikiData {
  pageId: string;
  firstParagraph: string;
  title: string;
}

export interface WikiKeys {
  [key: string]: WikiData;
}