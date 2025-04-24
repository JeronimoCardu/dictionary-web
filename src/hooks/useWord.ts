import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Word = {
  word: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: {
    partOfSpeech: string;
    antonyms: string[];
    synonyms: string[];
    definitions: {
      definition: string;
      example: string;
    }[];
  }[];
  sourceUrls: string[];
};

const queryWord = (wordInput: string): Promise<Word> => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
  return axios.get(url).then((response) => {
    if (response.status >= 300) {
      throw new Error("ERROR");
    } else {
      return response.data[0];
    }
  });
};

export default function useWord(wordInput: string) {
  return useQuery({
    queryKey: ["word", wordInput],
    queryFn: () => queryWord(wordInput),
    retry: 1,
  });
}
