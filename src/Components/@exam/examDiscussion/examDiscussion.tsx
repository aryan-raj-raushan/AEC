import Image from "next/image";
import {
  DiscussionBanner,
  FineEmoji,
  GoodEmoji,
  LoveEmoji,
  NeutralEmoji,
  SendIcon,
  WorstEmoji,
} from "@/src/Asset";
import PageInfo from "../../PageInfo/PageInfo";
import Button from "../../button/button";
import Filter from "../../collegeFilters/filter/filter";
import ContainerBox from "../../containerBox/containerBox";
import Dropdown from "../../dropdown/dropdown";
import DiscussionCard from "../../discussionCard/dicussionCard";
import Input from "../../input/input";
import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";

export default function ExamDiscussion() {
  return (
    <>
      <section className="PageInfo">
        <PageInfo
          title={"JEE Advanced 2024 Discussion Forum"}
          description={
            "Get the latest answers on cutoff, courses, placements, admission, fees, ranking & eligibility. All answers have been submitted by students, alumni & experts."
          }
        />
      </section>
      <section className="mainSection flex gap-4 px-4">
        <div className="flex-1">
          <ContainerBox>
            <div className="flex flex-col gap-5">
              <Dropdown
                options={[{ label: "", value: "" }]}
                onSelect={() => {}}
                placeholder="Choose Category"
              />
              <textarea
                className="resize-none border border-primary-text-light rounded-md p-2 w-full h-32 focus:outline-none "
                placeholder="Type you question"
              ></textarea>
              <div className="flex justify-end">
                <Button
                  fontSize="text-xs"
                  fontWeight="font-bold"
                  text={"Ask Now"}
                  paddingY="py-3"
                  paddingX="px-5"
                  gap="gap-1"
                  icon={<Image src={SendIcon} width={13} height={13} alt="" />}
                />
              </div>
            </div>
          </ContainerBox>
          <div>
            <div className="flex gap-[10px] my-7">
              <Button
                text="New"
                filled
                filledColor="bg-[#1682FD]"
                textColor="text-white"
                rounded
                paddingY="py-2"
                paddingX="px-3"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M6 11.5C8.76142 11.5 11 9.26142 11 6.5C11 3.73858 8.76142 1.5 6 1.5C3.23858 1.5 1 3.73858 1 6.5C1 9.26142 3.23858 11.5 6 11.5Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 3.5V6.5L8 7.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
              <Button
                text="Top"
                filled
                filledColor="bg-[#EAEAEA]"
                textColor="text-[#808080]"
                rounded
                paddingY="py-2"
                paddingX="px-3"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      d="M2.5 10L9.5 3"
                      stroke="#808080"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 3H9.5V10"
                      stroke="#808080"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
              <Button
                text="Hot"
                filled
                filledColor="bg-[#EAEAEA]"
                textColor="text-[#808080]"
                rounded
                paddingY="py-2"
                paddingX="px-3"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_7092)">
                      <path
                        d="M6.25 12.5C5.38982 12.5 4.59435 12.2832 3.86358 11.8496C3.13281 11.416 2.55619 10.8242 2.13371 10.0742C1.71124 9.32422 1.5 8.50781 1.5 7.625C1.5 7.28125 1.54948 6.9707 1.64844 6.69336C1.7474 6.41602 1.86919 6.16797 2.01382 5.94922C2.15845 5.73047 2.30308 5.49219 2.44772 5.23438C2.59235 4.97656 2.71414 4.63672 2.8131 4.21484C2.91206 3.79297 2.96154 3.30469 2.96154 2.75C2.96154 2.82812 3.0015 2.9043 3.08143 2.97852C3.16136 3.05273 3.25651 3.12695 3.36689 3.20117C3.47726 3.27539 3.59906 3.40625 3.73227 3.59375C3.86548 3.78125 3.97396 4 4.05769 4.25C4.17949 4.63281 4.3774 4.97852 4.65144 5.28711C4.92548 5.5957 5.21474 5.75 5.51923 5.75C5.91506 5.75 6.2519 5.51953 6.52975 5.05859C6.80759 4.59766 7.01312 3.97656 7.14633 3.19531C7.27955 2.41406 7.34615 1.51562 7.34615 0.5C7.46034 0.84375 7.63542 1.20312 7.87139 1.57812C8.10737 1.95312 8.35667 2.29297 8.61929 2.59766C8.88191 2.90234 9.15785 3.25 9.44712 3.64062C9.73638 4.03125 9.99329 4.41211 10.2178 4.7832C10.4424 5.1543 10.6289 5.58789 10.7773 6.08398C10.9258 6.58008 11 7.09375 11 7.625C11 8.50781 10.7888 9.32422 10.3663 10.0742C9.94381 10.8242 9.36719 11.416 8.63642 11.8496C7.90565 12.2832 7.11018 12.5 6.25 12.5ZM7.71154 5C7.32332 6.0625 6.95793 6.8125 6.61538 7.25C6.47075 7.4375 6.28996 7.60547 6.07302 7.75391C5.85607 7.90234 5.65815 8.02148 5.47927 8.11133C5.30038 8.20117 5.1272 8.30273 4.95974 8.41602C4.79227 8.5293 4.66096 8.67383 4.56581 8.84961C4.47065 9.02539 4.42308 9.24219 4.42308 9.5C4.42308 9.97656 4.60387 10.3457 4.96544 10.6074C5.32702 10.8691 5.75521 11 6.25 11C6.98077 11 7.58974 10.8027 8.07692 10.4082C8.5641 10.0137 8.80769 9.47656 8.80769 8.79688C8.80769 8.27344 8.76583 7.82227 8.68209 7.44336C8.59836 7.06445 8.50321 6.7832 8.39663 6.59961C8.29006 6.41602 8.16827 6.18164 8.03125 5.89648C7.89423 5.61133 7.78766 5.3125 7.71154 5Z"
                        fill="#808080"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_7092">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
            <DiscussionCard />
          </div>
        </div>
        <CollegeSideBarComponent />
      </section>
      <section className="">
        <Image src={DiscussionBanner} objectFit="cover" alt="" />
      </section>
    </>
  );
}
