import { Exam } from "@/src/Asset";
import Image from "next/image";
import Link from "next/link";
import Tag from "../tag/tags";

export default function BrowseExamCard({ examData, examId }: any) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 md:gap-4 bg-white rounded-lg border shadow-lg p-1 min-w-80">
      <div>
        <Image
          src={
            examData?.banner?.data[0]?.attributes?.url ??
            "https://d2t8nh1jrhx451.cloudfront.net/portal-dev-test1/2023_SSC_Full_Form_0b58d23374.jpg"
          }
          className="h-full w-full min-w-[180px] min-h-[150px] lg:min-h-full max-h-[150px] object-fill rounded-l-lg"
          width={180}
          height={190}
          alt={examData?.exam_name}
        />
      </div>
      <div className="py-1 md:py-2 pr-1 px-2 lg:px-1 md:pr-2 flex flex-col gap-1">
        <Link href={`/exams/${examData?.exam_url}`}>
          <div className="font-semibold tracking-tight h-8 line-clamp-1">
            {examData?.exam_name}
          </div>
        </Link>
        {/* <div className="h-8 line-clamp-1">{examData?.exam_name}</div> */}
        <div className="mt-1 mb-1">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody className="text-start py-8">
              <tr className="w-auto pt-2">
                <td className="border px-4 py-2 border-slate-400 pr-1">
                  {examData?.exam_date?.start_date}
                </td>
                <td className="border px-4 py-2 border-slate-400 pr-1">
                  Indianapolis
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 border-slate-400">
                  {examData?.exam_date?.start_date}
                </td>
                <td className="border px-4 py-2 border-slate-400">
                  {examData?.exam_name.slice(0, 20)} Date 2024
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-2 leading-[12px]">
          <div className="flex gap-2 flex-wrap items-center line-clamp-1">
            {examData?.nav_items?.data
              ?.slice(0, 5)
              .map((nav: { attributes: { title: string } }, index: any) => {
                return (
                  <Link href={"/"} key={index} className="text-primary">
                    {nav?.attributes?.title} |{" "}
                  </Link>
                );
              })}
            <Link href={"/"} className="text-primary font-semibold">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
