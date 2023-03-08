export interface ServiceResult {
   errors: string[],
   isSuccessful: boolean
}

export interface ServiceTypedResult<T> extends ServiceResult{
  container: T
}
