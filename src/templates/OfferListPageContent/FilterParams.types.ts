export interface FilterParams {
  title: string;
  advetiserSurname: string;
  winnerName: string;
  tags: string[];
  minPrice: number;
  maxPrice: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
}
export interface FilterParamsProps {
  handleFilterChange: (filter: FilterParams) => void;
  filter: FilterParams;
}
