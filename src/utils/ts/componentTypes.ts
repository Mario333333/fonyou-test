export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
};

export type Characters = {
  info: {
    count: number;
    pages: Number;
    next: string;
    prev: any;
  };
  results: Array<Character>;
};

export interface State {
  characters: Array<Character> | null;
}

export type DataToModal = {
  isVisible: boolean;
  data: Character | null;
};

export type NavbarProps = {
  id?: string;
  className?: string;
  children: JSX.Element | null;
};
