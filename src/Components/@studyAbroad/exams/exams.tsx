import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import { ExamLogo, ListYellowDotIcon, Ucc_scholarships_1 } from "@/src/Asset";
import AppBanner from "@/src/Components/appBanner/appBanner";
import Button from "../../button/button";
import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import Tag from "../../tag/tags";
import StarRating from "../../starRating/starRating";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";

export default function StudyAbroadExam() {
	return (
		<>
			<section className="mainSection px-4">
				<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
					<div className="flex-1 flex flex-col gap-4">
						<UpdateDateArticle dateTime={`Nov 17, 2023 14:25 IST`} />
						<Accordian title="Top Exams in Germany" titlePrimary opened>
							<div className="w-full overflow-hidden">
								{[1, 2, 3, 4, 5].map((item, index) => {
									return (
										<div>
											<div className="py-4 border-b-2 border-[#DDDDDD]">
												<div className="px-4 flex item-center gap-4 shadow-sm rounded border flex-col md:flex-row">
													<div className="flex items-center">
														<Image
															src={ExamLogo}
															alt={"college"}
															width={150}
															height={150}
															className=" object-cover rounded-lg"
														/>
													</div>
													<div className="my-4 flex flex-1 flex-col gap-2 border-r border-r-primary-light ">
														<div>
															<h2 className="text-xl font-semibold text-primary">
																JEE ADVANCED 2024
															</h2>
														</div>
														<div className="flex flex-col gap-3 items-stretch">
															<p className="text-secondary-text font-light">
																Application Date:{" "}
																<span className="text-primary-text font-semibold">
																	{"02 Feb, 2024 - 02 Mar, 2024"}
																</span>
															</p>
															<p className="text-secondary-text font-light">
																Exam Date:{" "}
																<span className="text-primary-text font-semibold">
																	{"02 Jun, 2024 - 02 Mar, 2025"}
																</span>
															</p>
															<p className="text-secondary-text font-light">
																Result Date:{" "}
																<span className="text-primary-text font-semibold">
																	{"12 Jun, 2024 - 02 Mar, 2025"}
																</span>
															</p>
															<p className="text-secondary-text font-light">
																Level:{" "}
																<span className="text-primary-text font-semibold">
																	{"National"}
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

														<div className="flex flex-wrap me-2 items-center gap-1">
															<Tag text="Overview" color="text-primary" />
															<Tag text="Eligibility" color="text-primary" />
															<Tag
																text=" Exam Pattern & Syllabus "
																color="text-primary"
															/>
															<Tag text=" Sample Papers" color="text-primary" />
															<Tag
																text="Application Process"
																color="text-primary"
															/>
															<Tag
																text="Preparation Materials"
																color="text-primary"
															/>
															<Tag
																text="Discussion Forum"
																color="text-primary"
															/>
															<Tag
																text=" College Predicto"
																color="text-primary"
															/>
															<Tag text="Cut-off" color="text-primary" last />
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
								{/* </div> */}
								<div className="text-center pt-6">
									<button
										type="button"
										className="text-white bg-primary  border-2 border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
									>
										View All Exams
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
