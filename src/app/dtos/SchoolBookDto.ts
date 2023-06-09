import {PublicationDto} from "./PublicationDto";

export class SchoolBookDto extends PublicationDto {
  schoolBookType: string;
  gryphType: string;
  isbn: string | null;
  orderNum: string;
  orderDate: Date;
  publisherTitle: string | null;

  constructor() {
    super();
    this.schoolBookType = '';
    this.gryphType = '';
    this.isbn = null;
    this.orderNum = '';
    this.orderDate = new Date();
    this.publisherTitle = null;
  }
}
