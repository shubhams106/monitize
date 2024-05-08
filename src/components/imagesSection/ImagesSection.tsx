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
}

const ImagesSection = () => {
  const [Finaldata, setFinalData] = useState<ImageData[]>([]);
  const [apiAfterValue, setApiAfterValue] = useState<string>("");

  const [loadQuery, { response, loading }] = useFetch(
    `MostBeautiful.json?limit=10&after=${apiAfterValue}`,
    {
      method: "get",
    }
  );

  useEffect(() => {
    loadQuery();
  }, []);

  useEffect(() => {
    if (response) {
      if (response?.data?.after) {
        setApiAfterValue(response?.data?.after);
      }

      const child = response?.data?.children;
      const tempArr = [];
      for (let i = 0; i < child.length; i++) {
        const obj = child[i].data;
        tempArr.push({
          title: obj.title,
          url: obj.url,
        });
      }
      setFinalData(tempArr);
    }
  }, [response]);

  const paginate = () => {
    loadQuery();
  };

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
              <PaginationItem className="cursor-pointer">
                <PaginationPrevious onClick={paginate} />
              </PaginationItem>

              <PaginationItem className="cursor-pointer">
                <PaginationNext onClick={paginate} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ImagesSection;
