import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useFetch from "../hooks/useFetch";
interface ImageData {
  title: string;
  url: string;
  id: string;
}

const ImagesSection = () => {
  const [Finaldata, setFinalData] = useState<ImageData[]>([]);

  const [loadQuery, { response, loading, error }] = useFetch(
    `MostBeautiful.json?limit=8&after=1cmihmg`,
    {
      method: "get",
    }
  );

  useEffect(() => {
    loadQuery();
  }, []);

  useEffect(() => {
    if (response) {
      const child = response?.data?.children;
      const tempArr = [];
      for (let i = 0; i < child.length; i++) {
        const obj = child[i].data;
        tempArr.push({
          title: obj.title,
          url: obj.url,
          id: obj.id,
        });
      }
      setFinalData(tempArr);
    }
  }, [response]);

  return (
    <div className="">
      <div className="h1-bold mb-32 text-center">ImagesSection</div>
      {loading && <p className="text-center">Loading....... please wait</p>}
      <div className="flex gap-8 overflow-hidden flex-wrap">
        {Finaldata &&
          Finaldata.length > 0 &&
          Finaldata.map((item) => (
            <div className="flex flex-col gap-4 max-w-[250px]" key={item.url}>
              <img src={item.url} alt="url" className="h-[300px] w-[250px]" />
              <p className="line-clamp-2 mb-3">{item?.title}</p>
            </div>
          ))}
      </div>
      {!loading && (
        <div className="mt-10">
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
      )}
    </div>
  );
};

export default ImagesSection;
