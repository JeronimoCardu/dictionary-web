import { create } from "zustand";

type DicProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
  fontSelected: string;
  setFontSelected: (font: string) => void;
  fontPage: string;
  setFontPage: (newFont: string) => void;
  wordSearched: string;
  setWordSearched: (word: string) => void;
};

const useDicStore = create<DicProps>((set) => ({
  theme: "light",
  fontSelected: "Sans Serif",
  fontPage: "Inter",
  wordSearched: "",
  setTheme: (newTheme: string) => set({ theme: newTheme }),
  setFontSelected: (font: string) => set({ fontSelected: font }),
  setFontPage: (newFont: string) => set({ fontPage: newFont }),
  setWordSearched: (word: string) => set({ wordSearched: word }),
}));

export default useDicStore;
