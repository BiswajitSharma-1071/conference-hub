export interface IAPIError extends Error {
  status?: number;
  statusText?: string;
}

export interface IAPIErrorState {
  isError: boolean;
  errorMessage: string;
  error?: IAPIError;
}

export interface IAPIResponseDetails<T> extends IAPIErrorState {
  data: T;
  isFetching: boolean;
}