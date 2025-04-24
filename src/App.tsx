import { Outlet } from "react-router-dom";
import useDicStore from "./hooks/store";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const fontPage = useDicStore((state) => state.fontPage);
  return (
    <div className={`font-[${fontPage}] flex min-h-screen flex-col`}>
      <Header />
      <main className="transition-normal linear desktop:mx-[20%] flex-1 px-[1.5em] duration-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
