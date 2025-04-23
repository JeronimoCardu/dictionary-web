import { useState } from "react";
import useDicStore from "../hooks/store";

export default function SelectFont() {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const fontSelected = useDicStore((state) => state.fontSelected);
  const theme = useDicStore((state) => state.theme);
  const setFontSelected = useDicStore((state) => state.setFontSelected);

  const fontToClass =
    fontSelected == "Sans Serif"
      ? "Inter"
      : fontSelected == "Serif"
        ? "Lora"
        : "Inconsolata";

  return (
    <>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="boxOptions border-r-1 flex cursor-pointer items-center gap-3 border-gray-400 px-3"
      >
        <p
          className={`text-black-700 font-bold dark:text-white font-[${fontToClass}]`}
        >
          {fontSelected}
        </p>
        <svg
          className={`${showOptions && "linear rotate-180 transition-transform duration-500"} rotate-0 transition-transform duration-500`}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-width="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>
      {showOptions && (
        <div
          className={`${theme == "dark" ? "shadowOptionsDark" : "shadowOptions"}  text-black-700 dark:bg-black-800 right-30 top-18 absolute space-y-2 rounded-[1em] bg-white p-5 px-8 font-bold  dark:text-white`}
        >
          <p
            onClick={(e) => {
              setShowOptions(false);
              setFontSelected(String(e.currentTarget.textContent));
            }}
            className="cursor-pointer font-[Inter] hover:text-purple-500"
          >
            Sans Serif
          </p>
          <p
            onClick={(e) => {
              setShowOptions(false);
              setFontSelected(String(e.currentTarget.textContent));
            }}
            className="bold cursor-pointer font-[Lora] hover:text-purple-500"
          >
            Serif
          </p>
          <p
            onClick={(e) => {
              setShowOptions(false);
              setFontSelected(String(e.currentTarget.textContent));
            }}
            className="bold cursor-pointer font-[Inconsolata] hover:text-purple-500"
          >
            Mono
          </p>
        </div>
      )}
    </>
  );
}
