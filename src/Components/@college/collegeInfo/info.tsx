import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import CollegeCard from "@/src/Components/card/collegeCard";
import Tab from "@/src/Components/tab/tab";
import Table from "@/src/Components/table/table";
import CarouselComponent from "@/src/Components/carousel/carousel";
import {
	AppBannerImage,
	ClockIcon,
	ListYellowBulletIcon,
	YoutubeImage,
} from "@/src/Asset";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import CollegeSideBarComponent from "../collegeSideBar/collegeSideBar";
import AppBanner from "@/src/Components/appBanner/appBanner";
import YouTubeVideo from "@/src/Components/youtubeVideo/youtubeVideo";
import GetExpertHelp from "../getExpertHelp/getExpertHelp";
import ContainerBox from "@/src/Components/containerBox/containerBox";
import Separator from "@/src/Components/separator/separator";
import CollegeDepartmentCard from "@/src/Components/card/collegeDepartmentCard";
import {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	PromiseLikeOfReactNode,
	Key,
} from "react";

export default function CollegeInfo({ CollegeData }: any) {
	const tableOfConetent = [
		{ name: "IIT Madras Latest Update" },
		{ name: "IIT Madras Highlights" },
		{ name: "IIT Madras Scholarships" },
		{ name: "IIT Madras Courses and Fees 2024" },
		{ name: "FAQs about IIT Madras" },
	];

	const table = [
		{
			parameter: "Affiliated University",
			details:
				"Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal",
		},
		{ parameter: "Year of affiliation", details: "2008" },
		{ parameter: "Institute Type", details: "Local Body" },
		{ parameter: "Autonomous", details: "No" },
		{
			parameter: "Establishment year | Ownership type",
			details: "1959 | Public",
		},
		{ parameter: "Campus Size", details: "617 acre" },
		{ parameter: "Total Faculty", details: "591" },
		{ parameter: "Student Faculty ratio", details: "16" },
	];

	const placementPoints = [
		"The highest Cost to Company (CTC) recorded was INR 1.89 Crore Per Annum (CPA).",
		"The average Cost to Company (CTC) stood at INR 22.7 Lakhs Per Annum (LPA).",
	];

	const company = [
		{ name: "McKinsey & Company" },
		{ name: "Dalberg" },
		{ name: "Google" },
		{ name: "Goldman Sachs" },
		{ name: "Deloitte" },
		{ name: "Microsoft" },
		{ name: "JPMorganChase" },
		{ name: "Miebach" },
		{ name: "ICICI Bank" },
	];

	return (
		<>
			<section className="mainSection px-4">
				<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
					<div className="flex-1 flex flex-col gap-4">
						<UpdateDateArticle dateTime="Nov 17, 2023 14:25 IST" />
						<Accordian title="Table of Content" titlePrimary opened>
							<div className="bg-primary-extra-light p-5 flex flex-col gap-4">
								{CollegeData?.page_data?.map(
									(
										table: {
											heading:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| Iterable<ReactNode>
											| ReactPortal
											| PromiseLikeOfReactNode
											| null
											| undefined;
										},
										index: Key | null | undefined
									) => {
										return (
											<div key={index}>
												<div className="flex gap-4">
													<div>
														<Image
															src={ListYellowBulletIcon}
															width={20}
															height={20}
															alt=""
														/>
													</div>
													<div className="font-medium text-primary cursor-pointer">
														{table?.heading}
													</div>
												</div>
											</div>
										);
									}
								)}
							</div>
						</Accordian>

						{CollegeData?.page_data
							.filter(
								(item: any) =>
									item?.CommonSection?.data?.attributes?.title === "Info"
							)
							.map((filteredItem: any, index: number) => {

								return (
									<div key={index}>
										<Accordian title={filteredItem?.heading} titlePrimary opened>
											<div className="flex flex-col gap-5">
												<div>
													{`Established in 1959, the Indian Institute of Technology Madras
                (IIT Madras or IITM) holds the prestigious designation of an
                'Institute of Eminence.' It is the third IIT established by the
                Government of India and operates as an autonomous public
                technical and research university. Situated in Chennai, Tamil
                Nadu, the IIT Madras campus is noteworthy for being home to
                India's inaugural university-based research park, IITMR. IIT
                Madras has consistently secured the top position in the NIRF
                Rankings for 2023, marking the fourth consecutive year.
                Internationally, it holds the 285th position in the QS World
                University Rankings for 2024 and the 250th position in the QS
                World University Rankings for 2023. The institute, with its 16
                departments, four national, and ten institute research centers,
                offers a diverse array of over 100 full-time, part-time, and
                online courses at the undergraduate, postgraduate, and doctoral
                levels. These courses span the disciplines of Engineering,
                Science, Humanities, and Management. Notably, IIT Madras
                recently introduced the country's first online BSc Program in
                Programming in Data Science. IITM is renowned for its Quality
                Improvement Programme (QIP), sponsored by the AICTE. The
                institute continues to be a leader in education and research,
                exemplifying excellence in various fields.`}
												</div>
												<div className="border-dashed border-b border-b-primary-text-light"></div>
												<div>
													<Table table={table}></Table>
												</div>
												<div className="border-dashed border-b border-b-primary-text-light"></div>
												<p>
													Take a look at the IIT Madras review featured in the
													video below:
												</p>
												<div>
													<YouTubeVideo
														videoId="5ZKLM5pNoGQ"
														width="w-full"
														height="h-96"
													/>
												</div>
											</div>
										</Accordian>
									</div>
								)
							})}

						{/* <Accordian title="IIT Madras Scholarship 2024" titlePrimary opened>
              <div className="flex flex-col gap-5">
                <div>
                  {`IIT Madras offers over 25 scholarships, considering students' financial situations or academic performances. Eligible students can access and download the application forms from the official IIT Madras website and submit them to the academic section. The table below highlights some of the prominent scholarships provided by IIT Madras:`}
                </div>
                <div>
                  <Table table={table}></Table>
                </div>
              </div>
            </Accordian>
            <div className="max-w-screen-lg overflow-hidden">
              <div className="pt-4 pb-6 px-6 bg-primary-light rounded w-full">
                <CarouselComponent
                  slidesDesktop={3}
                  slidesTablet={2}
                  titleColor="text-primary"
                  showPagination={false}
                  title="Recommended Colleges"
                  slides={[
                    <CollegeCard key={1} />,
                    <CollegeCard key={2} />,
                    <CollegeCard key={3} />,
                    <CollegeCard key={4} />,
                    <CollegeCard key={5} />,
                  ]}
                />
              </div>
            </div>

            <Accordian title="IIT Madras Admission" titlePrimary opened>
              <div className="flex flex-col gap-8">
                <p>
                  {`IIT Madras empowers its students to thrive in today's highly
                  competitive and rapidly evolving landscape. In the 2021–2022
                  placement phase one, there were 1316 bids, with 1500 students
                  registering for placements. A total of 1316 offers were
                  extended by 226 participating recruiters, comprising 45
                  overseas offers from 14 recruiters and 186 offers from 62
                  start-ups.`}
                </p>
                <div className="bg-primary p-5 flex flex-col gap-4 bg-opacity-20 my-4">
                  {placementPoints.map((table) => {
                    return (
                      <>
                        <div className="flex gap-4 items-center">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <circle cx="5" cy="5" r="5" fill="#F2A742" />
                            </svg>
                          </div>
                          <div className=" ">{table}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <Separator />
                <div className="flex flex-col gap-7">
                  <h6 className="text-primary font-semibold text-2xl">
                    IIT Madras Top Recruiters
                  </h6>
                  <div>
                    IIT Madras Placements 2022 is in progress. Day 1 of the
                    placement drive witnessed a participation of 226 recruiters.
                    Major recruiters include
                  </div>
                  <div>
                    <div className="grid grid-flow-row grid-cols-3">
                      {company.map((item) => {
                        return (
                          <div
                            key={item.name}
                            className="flex items-center justify-center p-4 border border-primary-text"
                          >
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Accordian>
            <Accordian title="IIT Madras Department" titlePrimary>
              <div className="flex gap-4">
                <div className="min-w-56 w-1/2">
                  <CollegeDepartmentCard />
                </div>
                <div className="min-w-56 w-1/2">
                  <CollegeDepartmentCard />
                </div>
              </div>
            </Accordian>
            <div>
              <GetExpertHelp />
            </div>
            <Accordian title="IIT MAdras Gallery" titlePrimary opened>
              <div className="flex flex-col gap-5">
                <h6>IIT Images - International Meet</h6>
                <div className="images grid grid-flow-row grid-cols-3 gap-4 ">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <div key={item} className="">
                        image {item}
                      </div>
                    );
                  })}
                </div>
                <Separator />
                <div className="">
                  <h6>IIT Madras Videos</h6>
                  <div className="images flex flex-wrap gap-7">
                    {[1, 2, 3, 4, 5].map((item) => {
                      return (
                        <div key={item} className="">
                          <YouTubeVideo videoId="AXsJMQ4uaJE" width="w-56" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Accordian>
            <Accordian title="IIT MAdras Campus Tour" titlePrimary opened>
              <YouTubeVideo
                videoId="AXsJMQ4uaJE"
                width="w-full"
                height="h-80"
              />
            </Accordian>
            <div>
              <div className="border border-primary-text-light rounded-md">
                <div className="flex justify-between px-5 py-4 border-b border-b-primary-text-light items-center">
                  <p className={"text-primary text-[25px] font-semibold"}>
                    FAQs about IIT Madras Placement
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-sm">
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                </div>
              </div>
            </div> */}
					</div>
					<div className="my-4 hidden md:block">
						<CollegeSideBarComponent />
					</div>
				</div>
				<div>
					<AppBanner />
				</div>
			</section>
		</>
	);
}
