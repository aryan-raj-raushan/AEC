import { NewsBannerImage } from "@/src/Asset";
import Image from "next/image";
export default function NewsBanner() {
  return (
    <div className="max-w-screen-xl mx-auto -mt-7">
      <Image src={NewsBannerImage} alt="" className="mx-auto px-2" />
    </div>
  );
}
