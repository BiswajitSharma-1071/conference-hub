import { IAPIError, IAPIResponseDetails } from "../models/apiModels";

export function getApiResourceObject<T>(
  data: T = null,
  isFetching: boolean = false,
  isError: boolean = false,
  errorMessage: string = "",
  error: IAPIError = null
): IAPIResponseDetails<T> {
  return { data, isFetching, isError, errorMessage, error };
}
