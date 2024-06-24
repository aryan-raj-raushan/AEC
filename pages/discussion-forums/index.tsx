import Image from "next/image";
import {
  DiscussionBanner,
  FineEmoji,
  FluentArrowGrowth,
  GoodEmoji,
  LoveEmoji,
  NeutralEmoji,
  SendIcon,
  WorstEmoji,
} from "@/src/Asset";
import PageInfo from "@/src/Components/PageInfo/PageInfo";
import Filter from "@/src/Components/collegeFilters/filter/filter";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import Dropdown from "@/src/Components/dropdown/dropdown";
import Button from "@/src/Components/button/button";
import DiscussionCard from "@/src/Components/discussionCard/dicussionCard";
import Input from "@/src/Components/input/input";
import RootLayouts from "@/src/Layouts/Rootlayouts/Rootlayouts";

export default function DiscussionFrom() {
  return (
    <>
      <RootLayouts>
        <div className="max-w-screen-xl px-4 mx-auto">
          <section className="PageInfo news-landingPage-responsive">
            <PageInfo
              title={
                "Questions & Answers: India’s Largest Education Discussion Forum"
              }
              description={
                "Get the latest answers on cutoff, courses, placements, admission, fees, ranking & eligibility. All answers have been submitted by students, alumni & experts."
              }
            />
          </section>
          <section className="mainSection flex gap-4 px-4">
            <div className="flex flex-col">
              <Filter
                name={"COLLEGES"}
                filters={[]}
                handleSelectFilter={undefined}
              />
              <Filter
                name={"STREAM"}
                filters={[]}
                handleSelectFilter={undefined}
              />
              <Filter
                name={"COURSES"}
                filters={[]}
                handleSelectFilter={undefined}
              />
              <Filter
                name={"EXAMS"}
                filters={[]}
                handleSelectFilter={undefined}
              />
              <Filter
                name={"SCHOLARSHIPS"}
                filters={[]}
                handleSelectFilter={undefined}
              />
            </div>
            <div className="flex-1 pt-2">
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
                      icon={
                        <Image src={SendIcon} width={13} height={13} alt="" />
                      }
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
                        <g clip-path="url(#clip0_2_7092)">
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
            <div className=" flex flex-col gap-4">
              <div className="px-5 py-6 border-[0.5px] border-primary-text-light max-w-64 flex flex-col gap-5 rounded-md">
                <div className="flex flex-col gap-4">
                  <div className="">
                    <div className=" pt-3 pb-4">
                      <div className="">
                        <div className="">
                          <table className="table-auto w-full border-none">
                            <thead>
                              <tr className="border-b-2 text-left">
                                <th className="text-semibold">#</th>
                                <th className="text-semibold text-[12px]">
                                  Trending Hastags
                                </th>
                                <th className="text-primary text-semibold text-[12px]">
                                  See more
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b-2 ">
                                <td className="font-medium py-2 text-[12px]">
                                  1
                                </td>
                                <td className="text-primary text-[12px]">
                                  <a className="inline-flex">
                                    <Image
                                      className="w-4 h-4 me-2"
                                      src={FluentArrowGrowth}
                                      width={14}
                                      height={14}
                                      alt={"FluentArrowGrowth"}
                                    />
                                    #UG
                                  </a>
                                </td>
                                <td className="text-[11px]">6974 post</td>
                              </tr>
                              <tr className="border-b-2">
                                <td className="font-medium text-[12px] py-4">
                                  2
                                </td>
                                <td className="text-primary text-[12px]">
                                  <a className="inline-flex">
                                    <Image
                                      className="w-4 h-4 me-2"
                                      src={FluentArrowGrowth}
                                      width={14}
                                      height={14}
                                      alt={"FluentArrowGrowth"}
                                    />
                                    #StudyAbroad
                                  </a>
                                </td>
                                <td className="text-[11px]">6974 post</td>
                              </tr>
                              <tr className="border-b-2">
                                <td className="font-medium text-[12px] py-4">
                                  3
                                </td>
                                <td className="text-primary text-[12px]">
                                  <a className="inline-flex">
                                    <Image
                                      className="w-4 h-4 me-2"
                                      src={FluentArrowGrowth}
                                      width={14}
                                      height={14}
                                      alt={"FluentArrowGrowth"}
                                    />
                                    #IndianStudents
                                  </a>
                                </td>
                                <td className="text-[11px]">6974 post</td>
                              </tr>
                              <tr className="border-b-2">
                                <td className="font-medium text-[12px] py-4">
                                  4
                                </td>
                                <td className="text-primary text-[12px]">
                                  <a className="inline-flex">
                                    <Image
                                      className="w-4 h-4 me-2"
                                      src={FluentArrowGrowth}
                                      width={14}
                                      height={14}
                                      alt={"FluentArrowGrowth"}
                                    />
                                    #IndianStudentsAb
                                  </a>
                                </td>
                                <td className="text-[11px]">6974 post</td>
                              </tr>
                              <tr className="">
                                <td className="font-medium text-[12px] py-4">
                                  5
                                </td>
                                <td className="text-primary text-[12px]">
                                  <a className="inline-flex">
                                    <Image
                                      className="w-4 h-4 me-2"
                                      src={FluentArrowGrowth}
                                      width={14}
                                      height={14}
                                      alt={"FluentArrowGrowth"}
                                    />
                                    #HigherEducation
                                  </a>
                                </td>
                                <td className="text-[11px]">6974 post</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6 border-[0.5px] border-primary-text-light max-w-64 rounded-md">
                <div className="flex gap-4">
                  <div>
                    <Input
                      label="Name"
                      labelColor="text-primary"
                      labelSize="text-xs"
                      textSize="text-[10px]"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <Input
                      label="Contact Number"
                      labelColor="text-primary"
                      labelSize="text-xs"
                      textSize="text-[10px]"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    label="Email Address"
                    labelColor="text-primary"
                    labelSize="text-xs"
                    textSize="text-[10px]"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-primary text-[13px] font-bold">
                    Share your experience in scaling
                  </div>
                  <div className="flex justify-between gap-1">
                    <div className="flex flex-col items-center">
                      <div>
                        <Image src={WorstEmoji} width={30} height={30} alt="" />
                      </div>
                      <div className="text-[9px] font-bold text-primary">
                        Worst
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <Image src={FineEmoji} width={30} height={30} alt="" />
                      </div>
                      <div className="text-[9px] font-bold text-primary-text-light text-wrap text-center">
                        Not Good
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <Image
                          src={NeutralEmoji}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </div>
                      <div className="text-[9px] font-bold text-primary-text-light">
                        Fine
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <Image src={GoodEmoji} width={30} height={30} alt="" />
                      </div>
                      <div className="text-[9px] font-bold text-primary-text-light text-center text-wrap">
                        Look good
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <Image src={LoveEmoji} width={30} height={30} alt="" />
                      </div>
                      <div className="text-[9px] font-bold text-primary-text-light text-center text-wrap">
                        Very Good
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      onChange={(e) => {}}
                      className="mt-1 p-2 w-full focus:outline-none "
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="resize-none text-[10px] border border-primary-text-light rounded-md p-2 w-full h-16 focus:outline-none "
                    placeholder="Add you Comment"
                  ></textarea>
                </div>
                <div>
                  <Button
                    text="SUBMIT"
                    filled
                    filledColor="bg-primary"
                    align="text-center"
                    fontSize="text-[10px]"
                    fontWeight="font-semibold"
                    paddingY="py-3"
                  />
                </div>
              </div>
              <div className="px-5 py-6 border-[0.5px] border-primary-text-light max-w-64 flex flex-col gap-5 rounded-md">
                <div className="flex flex-col gap-5">
                  <div className="border-b border-b-primary-text-extra-tlight">
                    <h6 className="flex gap-[6px] items-center font-medium text-[13px] tracking-wide">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
                          stroke="#020014"
                          strokeOpacity="0.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Quick Links
                    </h6>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2 text-[11px] tracking-wide text-primary">
                      <span>•</span>
                      <span>Community Guidelines</span>
                    </div>
                    <div className="flex gap-2 text-[11px] tracking-wide text-primary">
                      <span>•</span>
                      <span>Questions</span>
                    </div>
                    <div className="flex gap-2 text-[11px] tracking-wide text-primary">
                      <span>•</span>
                      <span>Discussions</span>
                    </div>
                    <div className="flex gap-2 text-[11px] tracking-wide text-primary">
                      <span>•</span>
                      <span>Tags</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <Image src={DiscussionBanner} objectFit="cover" alt="" />
          </section>
        </div>
      </RootLayouts>
    </>
  );
}
