export interface FilterParamPageable {
  page: number;
  size: number;
}

export interface FilterParams {
  title: string;
  advetiserSurname: string;
  winnerName: string;
  tags: string[];
  minPrice: number;
  maxPrice: number;
  pageable: FilterParamPageable;
}
export interface FilterParamsProps {
  handleFilterChange: (filter: FilterParams) => void;
  filter: FilterParams;
}
