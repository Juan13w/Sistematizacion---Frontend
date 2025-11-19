/**
 * Tipos generales para la API
 */

export interface ApiError {
  message: string;
  errors?: string[];
  status?: number;
}

export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
