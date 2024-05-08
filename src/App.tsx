import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeProvider";
import ImagesSection from "./components/imagesSection/ImagesSection";

function App() {
  const a = () => {
    fetch(
      "https://www.reddit.com/r/MostBeautiful.json?limit=1&after=3tdvdb&count=2"
    )
      .then((response) => response.json())
      .then((a) => console.log(a.data.children.map((a: any) => a.title)));
  };
  a();
  return (
    <>
      <ThemeProvider>
        <main className="background-light850_dark100 relative w-full h-full">
          <Navbar />

          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 ">
            <div className="mx-auto w-full max-w-5xl text-primary-500">
              <ImagesSection />
            </div>
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
