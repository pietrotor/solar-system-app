export interface GenericApiResponse<T> {
  response: {
    results: T[];
    totalPages: number;
    page: number;
    limit: number;
    total: number;
  };
  error: boolean;
}

export interface ApiResponse<T> {
  response: T | null;
  error: boolean;
}
