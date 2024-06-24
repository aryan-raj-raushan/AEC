
import React, { useState } from "react";
import NewsFullWidthCard from "@/src/Components/card/newsFullWidthCard";
import NewsImgBackgroundCard from "@/src/Components/card/newsImgBackgroundCard";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import Button from "@/src/Components/button/button";

export default function NewsUpdates({ pageData }: any) {
  const [filterOption, setFilterOption] = useState("All");
  const NewsData = pageData?.news?.data;

  const filteredNewsData = NewsData.filter((news: any) => {
    if (filterOption === "All") {
      return true;
    } else {
      return news.category === filterOption;
    }
  });

  return (
    <section className="mainContent">
      <ContainerBox
        title={`${pageData?.college_name} News and Articles`}
        titlePrimary
        titleBorder
      >
        <div>
          <div className="flex sm:gap-x-4 gap-2">
            <Button
              text={"All"}
              outline={filterOption !== "All"}
              outlineColor="border-primary"
              textColor={
                filterOption === "All" ? "text-white bg-blue-500" : "text-black"
              }
              hover={filterOption !== "All" ? "hover:text-black" : ""}
              rounded
              fontSize="text-lg"
              fontWeight="font-normal"
              paddingX="px-6"
              paddingY="py-1"
              onClick={() => setFilterOption("All")}
            />
            <Button
              text={"Exam"}
              outline={filterOption !== "Exam"}
              outlineColor="border-primary"
              textColor={
                filterOption === "Exam"
                  ? "text-white bg-blue-500"
                  : "text-black"
              }
              hover={filterOption !== "Exam" ? "hover:text-black" : ""}
              rounded
              fontSize="text-lg"
              fontWeight="font-normal"
              paddingX="px-4"
              paddingY="py-1"
              onClick={() => setFilterOption("Exam")}
            />
            <Button
              text={"College"}
              outline={filterOption !== "College"}
              outlineColor="border-primary"
              textColor={
                filterOption === "College"
                  ? "text-white bg-blue-500"
                  : "text-black"
              }
              hover={filterOption !== "College" ? "hover:text-black" : ""}
              rounded
              fontSize="text-lg"
              fontWeight="font-normal"
              paddingX="px-4"
              paddingY="py-1"
              onClick={() => setFilterOption("College")}
            />
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-4 py-3">
              {filteredNewsData.slice(0, 2).map((news: any, index: any) => (
                <NewsImgBackgroundCard key={index} newsData={news} showTag />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {filteredNewsData.slice(2, 5).map((news: any, index: any) => (
                <NewsImgBackgroundCard key={index} newsData={news} />
              ))}
            </div>
            <div className="flex flex-col gap-4 my-4">
              {filteredNewsData.slice(5, 7).map((news: any, index: any) => (
                <NewsFullWidthCard key={index} NewsData={news} />
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {filteredNewsData.slice(7, 10).map((news: any, index: any) => (
                <NewsImgBackgroundCard key={index} newsData={news} />
              ))}
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
}
