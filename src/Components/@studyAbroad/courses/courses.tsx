import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import { ListYellowDotIcon, Ucc_scholarships_1 } from "@/src/Asset";
import AppBanner from "@/src/Components/appBanner/appBanner";
import Button from "../../button/button";
import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";

export default function StudyAbroadCourse() {
	return (
		<>
			<section className="mainSection px-4">
				<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
					<div className="flex-1 flex flex-col gap-4">
						<UpdateDateArticle dateTime={`Nov 17, 2023 14:25 IST`} />
						<Accordian title="Top Courses in Germany" titlePrimary opened>
							<div className="flex flex-col mb-4 gap-8">
								<p>
									{`Germany is a popular destination for international students due to its high-quality education system, affordable 
                  tuition fees, and strong job market. Here are some of the top courses to study in Germany:`}
								</p>
							</div>
							<div className="bg-primary-extra-light p-5 flex flex-col gap-4">
								{[1, 2, 3].map((item) => {
									return (
										<div className="flex gap-4">
											<div>
												<Image
													src={ListYellowDotIcon}
													width={20}
													height={20}
													alt=""
												/>
											</div>
											<div className="font-medium text-primary cursor-pointer">
												<div className="font-semibold"> Engineering:</div>
												<p>
													This is the most popular and highly recommended
													education in Germany, with a majority of engineering
													courses leading to an MSc. After completing a
													12th-grade science or maths course, students choose to
													specialise in mechanical, automotive, electrical, or
													biomedical engineering, among other engineering
													fields.
												</p>
											</div>
										</div>
									);
								})}
							</div>
							<hr className="border-b border-dashed mb-4 border-[#000000]" />
							<div className="flex">
								The most popular programs that students opt to study in Germany
								are:
							</div>
							<div className="w-full overflow-hidden">
								{[1, 2, 3].map((item, index) => {
									return (
										<div>
											<div className="py-4 border-b-2 border-[#DDDDDD]">
												<div className="px-4 flex item-center gap-4 shadow-sm rounded border flex-col md:flex-row">
													<div className="flex items-center">
														<Image
															src={Ucc_scholarships_1}
															alt={"college"}
															width={150}
															height={150}
															className=" object-cover rounded-lg"
														/>
													</div>
													<div className="my-4 flex flex-1 flex-col gap-2 border-r border-r-primary-light ">
														<div>
															<h2 className="text-xl font-semibold text-primary">
																IIT Madras - Indian Institute of Technology -
																[IITM], Chennai
															</h2>
														</div>
														<div className="flex flex-col gap-3 items-stretch">
															<p className="text-secondary-text font-light">
																Average Duration:{" "}
																<span className="text-primary-text font-medium">
																	{"4 Years"}
																</span>
															</p>
															<p className="text-secondary-text text-[13px] font-normal">
																Offered by:{" "}
																<span className="text-primary-text bg-red-300 border py-1 px-2 rounded-full mx-2">
																	IIT Madras
																</span>
															</p>
														</div>

														<div className="flex flex-col items-stretch">
															<div className="pr-4 mr-4 border-r border-extra-light-text flex gap-2 items-center">
																<p className="text-[#B12704] font-semibold text-lg">
																	₹ {12679}
																</p>
																<p className="text-xs text-secondary-text font-light">
																	Total Fees
																</p>
															</div>
														</div>
													</div>

													<div className="flex flex-row gap-1 flex-wrap justify-center md:flex-col md:gap-4 md:my-4 items-center">
														<Button
															href={`/college/${"college.id"}`}
															text="Apply Now"
															filled
															fontSize="text-sm"
															width="w-40"
															align="text-center"
															filledColor="bg-secondary"
														/>
														<Button
															href={`/college/${"college.id"}`}
															text="Download Brochure"
															fontSize="text-sm"
															width="w-40"
															align="text-center"
															filledColor="bg-primary"
														/>
														<Button
															href={`/college/${"college.id"}`}
															text="Compare"
															outline
															fontSize="text-sm"
															width="w-40"
															textColor="text-[#428BC1]"
															align="text-center"
														/>
													</div>
												</div>
											</div>
										</div>
									);
								})}
								<div className="text-center pt-6">
									<button
										type="button"
										className="text-white bg-primary  border-2 border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
									>
										View All Courses
									</button>
								</div>
							</div>
						</Accordian>
					</div>
					<div className="my-4 hidden md:block pt-16">
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
