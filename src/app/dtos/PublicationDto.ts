import {ShortUserDto} from "./ShortUserDto";
import {Observable, of} from "rxjs";

export class PublicationDto {
  id: number;
  publicationType: string;
  title: string;
  publishedLocation: string | null;
  publishedYear: number | null;
  totalPagesCount: number;
  authorPagesCount: number;
  totalPrintedPageCount: number | null;
  printedAuthorPagesCount: number | null;
  researchWorkId: number | null;
  authors: string[];

  constructor() {
    this.id = 0;
    this.publicationType = 'Article';
    this.title = '';
    this.publishedLocation = null;
    this.publishedYear = null;
    this.totalPagesCount = 0;
    this.authorPagesCount = 0;
    this.totalPrintedPageCount = 0;
    this.printedAuthorPagesCount = 0;
    this.researchWorkId = null;
    this.authors = [];
  }
}
