import { Language } from "./languages";
import { Character } from "./componentTypes";
export default interface Context {
  labels?: Language;
  currentLanguage?: string;
  setCurrentlanguage?: React.Dispatch<React.SetStateAction<string>>;
  handleChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => void;
  data?: Array<Character> | null;
}
