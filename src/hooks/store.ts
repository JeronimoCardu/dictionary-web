import { create } from "zustand";

type DicProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
  fontSelected: string;
  setFontSelected: (font: string) => void;
  fontPage: string;
  setFontPage: (newFont: string) => void;
};

const useDicStore = create<DicProps>((set) => ({
  theme: "light",
  fontSelected: "Sans Serif",
  fontPage: "Inter",
  setTheme: (newTheme: string) => set({ theme: newTheme }),
  setFontSelected: (font: string) => set({ fontSelected: font }),
  setFontPage: (newFont: string) => set({ fontPage: newFont }),
}));

export default useDicStore;
