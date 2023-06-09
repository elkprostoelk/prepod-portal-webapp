import {PublicationDto} from "./PublicationDto";

export class LectureThesesDto extends PublicationDto {
  editionTitle: string | null;
  number: string | null;
  issue: string | null;
  tome: string | null;
  pageNumbers: string | null;
  isbn: string | null;
  orderNumber: string | null;
  url: string | null;

  constructor() {
    super();
    this.editionTitle = null;
    this.number = null;
    this.issue = null;
    this.tome = null;
    this.pageNumbers = null;
    this.isbn = null;
    this.orderNumber = null;
    this.url = null;
  }
}
