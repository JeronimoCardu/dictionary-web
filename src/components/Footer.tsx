import { Link } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="desktop:px-[20%] transition-normal dark:bg-black-800 dark:text-white linear flex w-full items-center justify-between bg-gray-100 px-[1.5em] py-4 duration-200">
      <p>
        <span className="font-bold">@{year}</span> Jeronimo Cardu
      </p>
      <a></a>
      <div className="itmes-center flex gap-3 text-xl">
        <Link target="_blank" to={"https://www.instagram.com/jeronimocardu/"}>
          <FaInstagram />
        </Link>
        <Link target="_blank" to={"https://github.com/JeronimoCardu"}>
          <FaGithub />
        </Link>
        <Link
          target="_blank"
          to={"https://www.frontendmentor.io/profile/JeronimoCardu"}
        >
          <SiFrontendmentor />
        </Link>
      </div>
    </footer>
  );
}
