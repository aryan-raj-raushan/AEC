import { AppBannerImage } from "@/src/Asset";
import Image from "next/image";
export default function AppBanner() {
  return (
    <>
      <div className="w-full my-8">
        <Image src={AppBannerImage} objectFit="cover" alt="" />
      </div>
    </>
  );
}
