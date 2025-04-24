import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ErrorDetail() {
  return (
    <>
      <Header />
      <section className="desktop:mx-[20%] space-y-10 px-[1.5em] text-center">
        <p className="text-7xl">😕</p>
        <h1 className="text-[1.25em] font-bold dark:text-white">
          No Definitions Found
        </h1>
        <p className="bodyM text-gray-600">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </section>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
