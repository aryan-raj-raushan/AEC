import { CollegeImageIcons, ScholarLottie, StatisticLottie, WalletLottie, WorkLottie } from '@/src/Asset'
import Button from '@/src/Components/button/button'
import { FormControl, FormLabel, Input, Option, Select } from '@mui/joy'
import Image from 'next/image'
import React from 'react'

const WeGotCovered = (
{
    name,
    setName,
    emailValue,
    setEmailValue,
    phone,
    setPhone,
    handleSubmit,
    StreamsSelected,
    setStreamsSelected,
    AllStreamData,
    getTuchData,
    isGetTouched,
}:any
) => {
  return (
   <>
   <section>
            <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto px-4 my-20 flex flex-col lg:flex-row text-primary-text gap-16">
              <div className="flex-1">
                <div className="relative flex w-max">
                  <h3 className="md:text-[35px] text-xl break-words font-semibold">
                    We have Got you Covered!
                  </h3>
                  <div className="absolute right-0 -bottom-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="124"
                      height="17"
                      viewBox="0 0 124 17"
                      fill="none"
                    >
                      <path
                        d="M1.79297 15.0321C11.5534 15.0321 21.2131 8.73606 30.6637 6.88702C39.2675 5.20366 48.0384 3.32012 56.8329 2.73382C78.5395 1.28671 100.483 1.9677 122.276 1.9677"
                        stroke="#428BC1"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-4">
                  Receive comprehensive support throughout your study abroad //
                  eslint-disable-next-line react/no-unescaped-entities
                  adventure, from program selection to visa requirements. We are
                  here for your success.
                </p>
                <div className="flex justify-center items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative flex justify-center items-end p-8 pb-1 bg-gradient-to-b from-yellow-200 via-yellow-200 to-transparent w-[287px] h-[191px] mt-16 shadow-md border rounded-lg">
                      <div className="absolute">
                        <Image
                          src={ScholarLottie}
                          objectFit="cover"
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">70+ Universities Abroad</p>
                      </div>
                    </div>
                    <div className="relative flex justify-center items-end p-8 pb-1 bg-gradient-to-b from-[#d19d8a] via-[#d19d8a] to-transparent w-[287px] h-[191px] mt-16 shadow-md border rounded-lg">
                      <div className="absolute">
                        <Image
                          className="rounded-lg"
                          src={WalletLottie}
                          objectFit="cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          Save 50 lakh INR on degrees in the US, UK, Germany,
                          Canada
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center items-end p-8 bg-gradient-to-b from-sky-200 via-sky-200 to-transparent w-[287px] h-[191px] mt-16 shadow-md border rounded-lg">
                      <div className="absolute -top-20">
                        <Image
                          src={StatisticLottie}
                          width={200}
                          height={200}
                          alt=""
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          Get up to 50% tuition discount
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center items-end p-8 bg-gradient-to-b from-orange-200 via-orange-200 to-transparent w-[287px] h-[191px] mt-16 shadow-md border rounded-lg">
                      <div className="absolute  -top-20">
                        <Image
                          className="rounded-lg"
                          src={WorkLottie}
                          width={300}
                          height={300}
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          Programs that qualify for post-study work visas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-5">
                <div className="flex flex-col rounded-md overflow-hidden border-[0.5px] border-primary-text-light shadow-xl">
                  <div className="bg-black text-white p-4 flex gap-4 items-center justify-center">
                    <Image src={CollegeImageIcons} objectFit="cover" alt="" />
                    <p className="font-semibold text-xl">
                      Let Us Help Find Your College
                    </p>
                  </div>
                  <div className="p-6 text-primary-text flex flex-col gap-8">
                    <input className="h-[1px]" type="range" />
                    <div className="flex flex-col gap-3">
                      <p>What Degree do you plan to pursue? *</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
                        <Button
                          text="Bacholer's"
                          fontSize="text-sm"
                          outlineColor="border-primary-text-light"
                          width="w-full"
                          align="text-center"
                          textColor="text-primary-text-light"
                          showHover={false}
                          outline
                          paddingY="py-2"
                          paddingX="px-4"
                        />
                        <Button
                          text="Master's"
                          fontSize="text-sm"
                          outlineColor="border-primary-text-light"
                          width="w-full"
                          align="text-center"
                          textColor="text-primary-text-light"
                          showHover={false}
                          outline
                          paddingY="py-2"
                          paddingX="px-4"
                        />
                        <Button
                          text="MBA"
                          fontSize="text-sm"
                          outlineColor="border-primary-text-light"
                          width="w-full"
                          align="text-center"
                          textColor="text-primary-text-light"
                          showHover={false}
                          outline
                          paddingY="py-2"
                          paddingX="px-4"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p>Where do you want to study? *</p>
                      <select className="block max-w-screen-sm md:max-w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-primary-text-light">
                        <option value="">Select country</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p>What are you planning to study? *</p>
                      <input
                        className="rounded-md border-[0.5px] border-primary-extra-light-text w-full bg-white p-2 shadow"
                        placeholder="Select Major"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p>What is your highest level of education? *</p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-8">
                        <Button
                          outline
                          textColor="text-primary-text-light"
                          outlineColor="border-primary-text-light"
                          paddingX="px-4"
                          paddingY="py-2"
                          text={"Grade 9"}
                          fontSize="text-sm"
                          width="w-full"
                          align="text-center"
                          showHover={false}
                        />
                        <Button
                          outline
                          textColor="text-primary-text-light"
                          outlineColor="border-primary-text-light"
                          paddingX="px-4"
                          paddingY="py-2"
                          text={"Grade 10"}
                          fontSize="text-sm"
                          width="w-full"
                          align="text-center"
                          showHover={false}
                        />
                        <Button
                          outline
                          textColor="text-primary-text-light"
                          outlineColor="border-primary-text-light"
                          paddingX="px-4"
                          paddingY="py-2"
                          text={"Grade 11"}
                          fontSize="text-sm"
                          width="w-full"
                          align="text-center"
                          showHover={false}
                        />
                        <Button
                          outline
                          textColor="text-primary-text-light"
                          outlineColor="border-primary-text-light"
                          paddingX="px-4"
                          paddingY="py-2"
                          text={"Grade 12"}
                          fontSize="text-sm"
                          width="w-full"
                          align="text-center"
                          showHover={false}
                        />
                      </div>
                    </div>
                    <div>
                      <button className="bg-primary text-white p-[10px] w-full rounded-md">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#F2F6F7]">
            <div className="max-w-screen-xl m-auto py-16 px-4 flex flex-col gap-12 items-center text-primary-text">
              <div className="text-xl lg:text-3xl font-semibold text-center">
                Get in Touch with our <br /> Expert Counsellors
              </div>

              <div className=" w-full">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-auto md:w-full place-content-center place-items-center">
                  {/* <div className="flex gap-2 md:flex-row flex-col w-full"> */}
                  <FormControl sx={{ mb: 2 }} className="w-full">
                    <FormLabel>Name</FormLabel>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl sx={{ mb: 2 }} className="w-full">
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                  </FormControl>
                  {/* </div> */}

                  {/* <div className="flex gap-2 md:flex-row flex-col w-full"> */}
                  <FormControl sx={{ mb: 2 }} className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormControl>

                  <FormControl sx={{ mb: 2 }} className="w-full">
                    <FormLabel>Streams</FormLabel>
                    <Select
                      value={StreamsSelected}
                      onChange={(e, newValue) => setStreamsSelected(newValue)}
                    >
                      {AllStreamData?.map((stream: any, index: any) => (
                        <Option key={index} value={stream?.id}>
                          {stream?.attributes?.stream_name}
                        </Option>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </div> */}
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={getTuchData?.length > 0 || isGetTouched}
                    className={`bg-primary text-white p-[10px] w-52 rounded-md ${getTuchData?.length > 0 || isGetTouched
                      ? "cursor-default"
                      : "cursor-pointer"
                      }`}
                      
                  >
                    {getTuchData?.length > 0 || isGetTouched
                      ? "Already Submited"
                      : "Get in Touch"}
                  </button>
                </div>
                <div>
                  <p className="md:w-96 text-center text-sm">
                    By proceeding ahead you expressly agree to the Affinity
                    Education terms of use and privacy policy
                  </p>
                </div>
              </div>
            </div>
          </section>
   </>
  )
}

export default WeGotCovered