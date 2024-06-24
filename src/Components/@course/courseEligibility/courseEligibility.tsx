import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CourseEligibility() {
	const table = [
		{
			"Exam Details": "Exam Name",
			Particulars: "Joing Entrance Exam (JEE) Advanced 2024",
		},
		{ "Exam Details": "Conducting Body", Particulars: "IIT Madras" },
		{ "Exam Details": "Exam Level", Particulars: "National" },
		{ "Exam Details": "Exam Frequency", Particulars: "Once a year" },
		{ "Exam Details": "Mode of Exam", Particulars: "Computer-based test" },
		{
			"Exam Details": "Courses Offered through Entrance Exam",
			Particulars:
				"Bachelors: B.Tech, BS, BArch Dual Degree - BTech, MTech, BS, MS Integrated Masters: MTech, MSc",
		},
	];
	return (
		<section className="mainSection px-4">
			<div className=" max-w-screen-xl mx-auto">
				<UpdateDateArticle dateTime="Nov 17, 2023 14:25 IST" />
			</div>
			<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
				<div className="flex-1 flex flex-col gap-4">
					<Accordian
						title="BTech Eligibility Criteria 2024"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								{`Candidates aspiring to enroll in a BTech program in India should have completed their 10+2 education with Physics, Chemistry, and Mathematics. A minimum aggregate of 60% marks is typically required, and admission is often based on national or state-level entrance exams such as JEE Main or BITSAT. Some programs may consider lateral entry for working professionals with a relevant diploma and two years of experience. Aspiring engineers should review specific institution requirements, which may include age criteria and counseling sessions.`}
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									BTech Required Skill set
								</h6>
								<div>
									To thrive as an accomplished engineer, one needs to exhibit
									innovation and possess outstanding communication abilities.
									The BTech Engineer must acquire diverse skill sets to excel in
									their specific field. The following table outlines some of the
									essential skills needed for success in the BTech course.
								</div>
								<Table
									title="Skills Set Required for the Course"
									showHeader={false}
									table={table}
								></Table>
							</div>
						</div>
					</Accordian>
					<div className="border border-primary-text-light rounded-md">
						<div className="flex justify-between px-5 py-4 border-b border-b-primary-text-light items-center">
							<p className={"text-primary text-[25px] font-semibold"}>
								FAQs about IIT Madras Placement
							</p>
						</div>
						<div className="p-6 flex flex-col gap-4 text-sm">
							<Accordian title="Which courses are offered at IIT Madras for the students?">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s, when an unknown printAccordian galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</Accordian>
							<Accordian title="Which courses are offered at IIT Madras for the students?">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</Accordian>
							<Accordian title="Which courses are offered at IIT Madras for the students?">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</Accordian>
							<Accordian title="Which courses are offered at IIT Madras for the students?">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</Accordian>
							<Accordian title="Which courses are offered at IIT Madras for the students?">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</Accordian>
						</div>
					</div>
				</div>
				<div className="hidden md:block">
					<CollegeSideBarComponent />
				</div>
			</div>
			<div>
				<AppBanner />
			</div>
		</section>
	);
}
