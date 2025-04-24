import { useLocation } from "react-router-dom";
import PlayButton from "../../components/PlayButton";
import useWord from "../../hooks/useWord";
import Meaning from "../../components/Meaning";

export default function Result() {
  const { pathname } = useLocation();
  const { data, error } = useWord(pathname.slice(1));

  if (error) {
    throw new Error();
  }

  const setAudio = (
    phonetics: { text: string; audio: string }[] | undefined,
  ) => {
    const audioLink = phonetics?.find((p) => p.audio != "" && p.audio);
    return audioLink?.audio;
  };
  return (
    <>
      <section className="flex justify-between">
        <div>
          <h1 className="text-black-700 tablet:text-[4em] text-[2em] font-bold dark:text-white">
            {data?.word}
          </h1>
          <p className="bodyM tablet:text-[1.5em] text-purple-500">
            {data?.phonetic}
          </p>
        </div>
        <PlayButton audio={setAudio(data?.phonetics)} />
      </section>
      <section>
        {data?.meanings.map((mean, index) => (
          <Meaning key={index} data={mean} />
        ))}
      </section>
      <hr className="my-6 text-gray-400" />
      <div className="tablet:flex tablet:items-center tablet:gap-4 mb-8">
        <h2 className="bodyS text-gray-600">Source</h2>
        <ul>
          {data?.sourceUrls.map((s, index) => (
            <div key={index} className="my-2 flex items-center gap-2">
              <li className="bodyS dark:text-white">{s}</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="#838383"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                />
              </svg>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
