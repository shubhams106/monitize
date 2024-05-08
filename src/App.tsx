import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeProvider";
import ImagesSection from "./components/imagesSection/ImagesSection";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <main className="background-light850_dark100 relative w-full h-full bg-blue-300">
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
