export type Pageable = {
  pageNumber: number;
  pageSize: number;
};

export type QueryParams = Record<string, string | string[] | number | number[] | boolean | boolean[] | Pageable>;
