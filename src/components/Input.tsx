import { useNavigate } from "react-router-dom";
import useDicStore from "../hooks/store";
import { useState } from "react";

export default function Input() {
  const navigate = useNavigate();
  const setWordSearched = useDicStore((state) => state.setWordSearched);
  const wordSearched = useDicStore((state) => state.wordSearched);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const searchWord = (word: string) => {
    const query = word.trim().toLowerCase();
    if (query) {
      setIsEmpty(false);
      navigate(`/${query}`);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <>
      <div
        className={`${isEmpty && "!border-2 !border-red-500"} dark:bg-black-800 relative my-5 flex w-full cursor-pointer items-center justify-between rounded-[1em] bg-gray-200 px-5 py-3 hover:border-2 hover:border-purple-500 dark:text-white`}
      >
        <input
          onKeyDown={(e) => {
            if (e.key == "Enter" && !isEmpty) {
              searchWord(wordSearched);
            }
          }}
          onChange={(e) => {
            setIsEmpty(false);
            setWordSearched(e.currentTarget.value);
          }}
          type="text"
          placeholder="Search for any word..."
          className="w-full outline-0"
        />
        <svg
          onClick={() => {
            searchWord(wordSearched);
          }}
          className="absolute right-5"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </div>
      {isEmpty && <p className="bodyM text-red-500">Whoops, can't be empty</p>}
    </>
  );
}
