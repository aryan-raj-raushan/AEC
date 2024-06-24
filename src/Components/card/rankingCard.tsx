import { IndiaToday, RankingBGImage, ScholerIcon } from "@/src/Asset";
import Image from "next/image";

export default function RankingCard() {
  return (
    <div className="relative w-[300px] bg-white rounded-2xl">
      <div className="relative rounded-t-2xl">
        <Image
          src={RankingBGImage}
          objectFit="cover"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-[45%] bg-white p-2">
          <Image src={IndiaToday} width={170} alt="" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-4 rounded-lg bg-white p-4 shadow-lg w-max">
          <div>
            <Image src={ScholerIcon} width={24} height={24} alt="" />
          </div>
          <div>1545 Colleges</div>
        </div>
      </div>

      <div className="bg-white px-6 pt-8 pb-6 text-[#42445D] rounded-b-2xl">
        <p className="text-lg font-medium">Indiatoday</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          pretium sit od
        </p>
      </div>
    </div>
  );
}
