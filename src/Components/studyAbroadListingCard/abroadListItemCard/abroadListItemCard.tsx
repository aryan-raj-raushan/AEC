import Link from "next/link";
import Image from "next/image";
import { Bookmark, CallPhone, Overview1, TransBGnew } from "@/src/Asset";

export default function AbroadListItem({ CountryData, id }: any) {
  const formatDate = (dateString: string | number | Date) => {
    if (!dateString) return "";
    const options: any = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  
  const blackShade = "rgba(0, 0, 0, 0.7)"; 
  const blackShade2 = "rgba(0, 0, 0, 0.4)"; 
  const whiteShade = "rgba(255, 255, 255, 1)";
  return (
    <div className="lg:mb-10 lg:mt-5 mt-4 bg-left-top max-w-screen-xl">
      <div className=" overflow-hidden relative">
        <Image
          className="absolute inset-0 w-[60%] h-full object-cover"
          width={1200}
          height={1200}
          src={
            CountryData?.listing_banner?.data[0]?.attributes?.url || TransBGnew
          }
          alt=""
          style={{
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(to right, ${blackShade}, ${blackShade2}, ${whiteShade})`,
          }}
        ></div>
        <div className="relative grid md:grid-cols-2 md:gap-4 divide-x divide-white-500 pt-0.5 border pdCountry">
          <div>
            <div className="grid grid-cols-2 gap-4 pt-5 bg-black-500 bg-opacity-100 ml-5">
              <div className="w-96">
                <Image
                  src={CountryData?.flags?.data?.attributes?.url}
                  width={60}
                  height={36}
                  alt={CountryData?.country_name}
                />
                <Link href={`/study-abroad/${id}`}>
                  <h3 className="font-semibold text-4xl text-white pt-4">
                    {`${CountryData?.country_name}`}
                  </h3>
                </Link>

                <p className="text-white text-sm pt-8 line-clamp-6">
                  {CountryData?.short_description}
                </p>
              </div>
              <div className="grid grid-cols-3">
                <div></div>
                <div></div>
                <div>
                  {" "}
                  <Image src={Bookmark} className="size-8" alt="australia" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:pt-5 pl-5">
            <div>
              <Link href={`/study-abroad/${id}`}>
                <h3 className="font-semibold md:text-4xl text-xl text-[#050138]">
                  {`Study in ${CountryData?.country_name}`}
                </h3>
              </Link>
              <h3 className="font-semibold text-4xl text-[#050138]">
                #{CountryData?.global_rank}{" "}
                <span className="text-sm">Global Rank</span>
              </h3>
              <p className="pt-10 text-[#050138]">
                <span className="gap-4 mr-10">
                  <span className="text-sm">Colleges:</span>{" "}
                  <span className="font-bold text-sm">
                    {" "}
                    {CountryData?.colleges?.data?.length}+
                  </span>
                </span>
                <span className="text-sm">Courses:</span>{" "}
                <span className="font-bold text-sm">
                  {" "}
                  {CountryData?.courses?.data?.length}+
                </span>
              </p>
              <p className="text-[#050138]">
                <span className="text-sm">Careers:</span>{" "}
                <span className="font-bold text-sm">
                  {CountryData?.careers?.data?.length}+{" "}
                </span>
              </p>
            </div>
            <div className="flex mx-1.5 pb-2 gap-4">
              <div>
                <Link href="/">
                  <button className="p-[12px] bg-[#050138] rounded-lg text-center text-white sm:text-base text-xs">
                    Explore Now
                  </button>
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  className="text-[#050138] bg-transparent border-solid border-2 border-[#050138] rounded-lg xl:p-[10px] p-[10px] text-center inline-flex items-center me-2 mb-2 sm:text-base text-xs"
                >
                  <Image
                    className="w-4 h-4 me-2 xl:block hidden"
                    src={CallPhone}
                    width={14}
                    height={14}
                    alt={"CallPhone"}
                  />
                  Ask Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
