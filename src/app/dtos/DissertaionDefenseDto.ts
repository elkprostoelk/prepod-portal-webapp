export interface DissertationDefenseDto {
  id: number;
  type: string;
  theme: string;
  cipherAndSpecialty: string;
  defenseDate: Date | null;
  receiveDiplomaDate: Date | null;
  diplomaNumber: string;
  defenseLocationAndWhoAssignedBy: string | null;
  scientificDirector: string;
  userId: string;
}
