import { useRef } from "react";

type Props = {
  audio: string | undefined;
};

export default function PlayButton({ audio }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const handlePlay = () => {
    audioRef.current?.play();
  };
  return (
    <>
      <button className="cursor-pointer" onClick={handlePlay}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </button>
      <audio ref={audioRef} src={audio}></audio>
    </>
  );
}
