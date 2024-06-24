import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import Table from "@/src/Components/table/table";
import {
	FeturedStar,
	HeartIcon,
	ListYellowBulletIcon,
	Sir_Hillary_Scholarship,
	Sir_Hillary_Scholarship_1,
} from "@/src/Asset";
import AppBanner from "@/src/Components/appBanner/appBanner";
import Link from "next/link";
import ScholarshipSideBarComponent from "../../@scholarship/scholarshipSideBar/scholarshipSideBar";
import StarRating from "../../starRating/starRating";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";

export default function StusyAbroadSholarship() {
	return (
		<>
			<section className="mainSection px-4">
				<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
					<div className="flex-1 flex flex-col gap-4">
						<UpdateDateArticle dateTime={`Nov 17, 2023 14:25 IST`} />
						<Accordian title="Top Scholarships in Germany " titlePrimary opened>
							<div className="grid gap-x-4 gap-y-2 grid-cols-3">
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
									return (
										<div className="flex flex-col items-stretch w-full bg-white rounded-lg shadow-lg">
											<div className="relative rounded-t-lg pt-2 bg-white">
												<Image
													src={Sir_Hillary_Scholarship}
													alt={"college"}
													width={150}
													height={150}
													className="w-full h-36 object-cover rounded-lg"
												/>
												<div className="absolute inset-0 px-4 py-6 flex justify-between max-h-max items-center">
													<div className="bg-white flex gap-1 items-center rounded-full px-2 py-1 text-xs">
														<Image
															src={FeturedStar}
															width={16}
															height={16}
															alt={"feature"}
														/>
														Featured
													</div>
													<div className="bg-white rounded-full p-1 text-sm cursor-pointer">
														<Image
															src={HeartIcon}
															width={14}
															height={14}
															alt={"feature"}
														/>
													</div>
												</div>
											</div>
											<div className="relative flex flex-col">
												<div className="absolute left-4 -top-7">
													<Image
														width={150}
														height={150}
														src={Sir_Hillary_Scholarship_1}
														alt={"college"}
														className="w-[55px] h-[50px] object-fit rounded"
													/>
												</div>
												<div className="stars flex justify-end mt-2 mr-2">
													<StarRating rating={3} totalStars={5} />
												</div>
												<div className="p-2 flex flex-col gap-2">
													<div className="text-[14px]">
														<p className="text-[13px] text-secondary-text">
															Conducted By : The University of Waikato
														</p>
														<h4 className="text-primary text-[18px] pt-2 font-semibold">
															UCC Ireland Meritorious Scholarship for Indian
															Students
														</h4>
														<div className="pt-2">
															<span className="text-[#02001480]">
																Eligibility
															</span>
															<br />
															<p>International Student (Yes)</p>
														</div>
														<div className="grid grid-cols-2 pt-2 gap-2">
															<div>
																<span className="text-[#02001480] text-sm">
																	Type
																</span>
																<p>Merit-Based</p>
															</div>
															<div className="absolute right-0 pr-2">
																<span className="text-[#02001480] text-sm">
																	No. of Scholarships
																</span>
																<p>150</p>
															</div>
														</div>
														<div className="pt-2">
															<span className="text-[#02001480]">Amount</span>
															<br />
															<span className="text-red-500 font-semibold">
																$28,961
															</span>
															<span>(Doctorate Degree)</span>
														</div>
													</div>
												</div>

												<div className="grid grid-cols-2 mx-1.5 pb-2 gap-4">
													<div>
														<Link href="/">
															<div className="w-full p-[10px] bg-[#4D2C5E] rounded-b-lg text-center text-white">
																Apply Now
															</div>
														</Link>
													</div>
													<div>
														<Link href="/">
															<div className="w-full p-[10px] bg-primary rounded-b-lg text-center text-white">
																Get Alert
															</div>
														</Link>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div className="text-center pt-6">
								<button
									type="button"
									className="text-white bg-primary  border-2 border-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
								>
									View All Scholarships
								</button>
							</div>
						</Accordian>
					</div>
					<div className="my-4 hidden md:block pt-16">
						<ScholarshipSideBarComponent />
					</div>
				</div>
				<div>
					<AppBanner />
				</div>
			</section>
		</>
	);
}
