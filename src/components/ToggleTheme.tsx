import { useEffect } from "react";
import useDicStore from "../hooks/store";

export default function ToggleTheme() {
  const body = document.querySelector("body");
  const theme = useDicStore((state) => state.theme);
  const setTheme = useDicStore((state) => state.setTheme);

  const toggleTheme = () => {
    if (theme == "light") setTheme("dark");
    if (theme == "dark") setTheme("light");
  };
  useEffect(() => {
    body?.setAttribute("data-theme", theme);
  }, [body, theme]);

  const styleButton =
    theme == "dark"
      ? "absolute  translate-x-[150%] top-[50%] -translate-y-[50%]"
      : "absolute translate-x-1 top-[50%] -translate-y-[50%]";

  return (
    <div
      className="tablet:gap-4 flex cursor-pointer items-center gap-2"
      onClick={() => toggleTheme()}
    >
      <div
        className={`linear relative h-[1.25em] w-[2.5em] rounded-full bg-gray-600 transition-colors duration-500 dark:bg-purple-500`}
      >
        <div
          className={`${styleButton} linear h-[0.875em] w-[0.875em] rounded-full bg-white transition-transform duration-200`}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          className="stroke-[#838383] dark:stroke-purple-500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
}
