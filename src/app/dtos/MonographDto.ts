import {PublicationDto} from "./PublicationDto";

export class MonographDto extends PublicationDto {
  publisherTitle: string | null;
  gryphGiven: string | null;
  monographType: string;
  isbn: string | null;

  constructor() {
    super();
    this.publisherTitle = null;
    this.gryphGiven = null;
    this.monographType = '';
    this.isbn = null;
  }
}
