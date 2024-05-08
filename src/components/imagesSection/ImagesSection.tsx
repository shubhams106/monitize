import { title } from "process";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const ImagesSection = () => {
  const [data, setData] = useState([]);
  const [Finaldata, setFinalData] = useState([]);

  const fetchData = () => {
    fetch("https://www.reddit.com/r/MostBeautiful.json?limit=8&after=1cmihmg")
      .then((response) => response.json())
      .then((d) => setData(d.data.children));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
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
  return (
    <div className="">
      <div className="h1-bold mb-32 text-center">ImagesSection</div>
      <div className="flex gap-8 overflow-hidden flex-wrap">
        {Finaldata &&
          Finaldata.length > 0 &&
          Finaldata.map((item) => (
            <div className="flex flex-col gap-4 max-w-[250px]">
              <img src={item.url} alt="url" className="h-[300px] w-[250px]" />
              <p className="line-clamp-2 mb-3">{item?.title}</p>
            </div>
          ))}
      </div>
      <div className="">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ImagesSection;
