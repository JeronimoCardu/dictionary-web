type Props = {
  data: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
    }[];
    antonyms: string[];
    synonyms: string[];
  };
};

export default function Meaning({ data }: Props) {
  return (
    <>
      <section className="tablet:gap-6 my-4 flex items-center gap-4">
        <h1 className="font-bold italic dark:text-white">
          {data.partOfSpeech}
        </h1>
        <div className="border-b-1 h-1 w-full border-gray-400"></div>
      </section>
      <section>
        <h2 className="mb-2 text-[1em] text-gray-600">Meaning</h2>
        <ul className="text-black-700 list-disc pl-6 marker:text-[#8F19E8] dark:text-white">
          {data.definitions.map((def, index) => (
            <li key={index}>{def.definition}</li>
          ))}
        </ul>
        {data.definitions.map(
          (def, index) =>
            def.example && (
              <p key={index} className="my-2 pl-6 dark:text-gray-600">
                "{def.example}"
              </p>
            ),
        )}
        {data?.synonyms.length > 0 && (
          <div className="my-4 grid grid-cols-2">
            <p className="dark:text-gray-600">Synonyms</p>
            <ul className="font-bold text-purple-500">
              {data.synonyms.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {data?.antonyms.length > 0 && (
          <div className="my-4 grid grid-cols-2">
            <p className="dark:text-gray-600">Antonyms</p>
            <ul className="font-bold text-purple-500">
              {data.antonyms.map((a, index) => (
                <li key={index}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
