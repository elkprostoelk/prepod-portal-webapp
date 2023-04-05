import {ScientometricDbProfileDto} from "./ScientometricDbProfileDto";
import {ShortAcademicDegreeDto} from "./ShortAcademicDegreeDto";
import {ShortEducationDto} from "./ShortEducationDto";

export interface UserMainInfoDto {
  town: string | null;
  homeTown: string | null;
  gender: string;
  birthDate: Date | null;
  academicTitle: string | null;
  scienceDegree: string | null;
  workplaceLocation: string | null;
  workplacePosition: string | null;
  department: string;
  scientometricDbProfiles: ScientometricDbProfileDto[],
  academicDegrees: ShortAcademicDegreeDto[],
  educations: ShortEducationDto[]
}
