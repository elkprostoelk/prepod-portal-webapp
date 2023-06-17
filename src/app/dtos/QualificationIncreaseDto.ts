export class QualificationIncreaseDto {
  id: number;
  type: string;
  orderNumber: string;
  internshipTheme: string;
  organization: string;
  startDate: Date | null;
  endDate: Date | null;
  userId: string;

  constructor() {
    this.id = 0;
    this.type = '';
    this.orderNumber = '';
    this.internshipTheme = '';
    this.organization = '';
    this.startDate = null;
    this.endDate = null;
    this.userId = '';
  }
}
