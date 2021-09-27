import { Character } from "./componentTypes";

export type SetCharacter = {
  (data: Array<Character>): { type: string; data: Array<Character> };
};

export type AxiosType = <T>(
  url: string,
  params: { [key: string]: string } | null
) => { data: T | null; error: boolean };
