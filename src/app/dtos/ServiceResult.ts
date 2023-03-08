export interface ServiceResult<T> {
  container: T,
  errors: string[],
  isSuccessful: boolean
}
