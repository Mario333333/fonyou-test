export type Language = {
  home: string;
  search: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  type: string;
  reload: string;
};

export type Languages = {
  [key: string]: Language;
};
