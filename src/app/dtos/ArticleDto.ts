import {PublicationDto} from "./PublicationDto";

export class ArticleDto extends PublicationDto {
  articleType: string;
  editionName: string | null;
  number: string | null;
  issue: string | null;
  tome: string | null;
  pageNumbers: string | null;
  url: string | null;
  scientometricDb: string | null;
  snipIndex: number | null;
  constructor() {
    super();
    this.articleType = '';
    this.editionName = null;
    this.number = null;
    this.issue = null;
    this.tome = null;
    this.pageNumbers = null;
    this.url = null;
    this.scientometricDb = null;
    this.snipIndex = null;
  }

  get isWoSOrScopus(): boolean {
    return this.articleType === 'WoSOrScopusLocal'
      || this.articleType === 'WoSOrScopusForeign';
  }
}
