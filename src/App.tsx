import * as React from "react";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeProvider";
import ImagesSection from "./components/imagesSection/ImagesSection";

function App() {
  const [data, setData] = React.useState([]);
  const [Finaldata, setFinalData] = React.useState([]);

  const fetchData: any = () => {
    fetch("https://www.reddit.com/r/MostBeautiful.json?limit=8&after=1cmihmg")
      .then((response) => response.json())
      .then((d) => setData(d.data.children));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    const tempArr = [];
    for (let i = 0; i < data.length; i++) {
      const obj = data[i].data;
      tempArr.push({
        title: obj.title,
        url: obj.url,
        id: obj.id,
      });
    }
    setFinalData(tempArr);
  }, [data]);
  console.log({ Finaldata });

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
