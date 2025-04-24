import Input from "./Input";
import SelectFont from "./SelectFont";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="desktop:mx-[20%] transition-discrete linear relative p-[1.5em] font-bold duration-200">
      <div className="flex items-center justify-between">
        <svg // logo SVG
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g fill="none" stroke="#838383">
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div className="flex gap-3">
          <SelectFont />
          <ToggleTheme />
        </div>
      </div>
      <Input />
    </header>
  );
}
