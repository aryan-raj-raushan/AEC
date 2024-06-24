import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function ExamPattern() {
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
						title="JEE Advanced Exam Pattern 2024 Highlights"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								{`For candidates appearing in the JEE Advanced 2024 exam, having proper knowledge of the JEE Advanced exam pattern 2024 is very important. The JEE Advanced question paper will be divided into two papers- IIT JEE Advanced 2024 papers I and II. Attempting both papers is compulsory, and they all need to be completed within 6 hours. The detailed highlights of the JEE Advanced 2024 exam pattern are as follows.`}
							</div>

							<Table
								table={table}
								title="JEE Advanced Exam Pattern 2024 Highlights"
								showHeader={false}
							></Table>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									JEE Advanced 2024 Exam Pattern for Paper 1
								</h6>
								<Table table={table}></Table>
							</div>
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									JEE Advanced 2024 Exam Pattern for Paper 2
								</h6>
								<Table table={table}></Table>
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									JEE Advanced Exam Syllabus
								</h6>
								<div>
									IIT Madras the JEE Advanced 2024 syllabus PDF. The syllabus of
									JEE Advanced 2024 is available online at jeeadv.nic.in. JEE
									Advanced syllabus 2024 comprises the topics of the subjects
									Physics, Chemistry, and Mathematics. Candidates are advised to
									check the syllabus of JEE Advanced beforehand in order to know
									the correct topics to study for the exam. With the help of JEE
									Advanced 2024 exam pattern and syllabus, candidates can check
									important chapters and topics asked in the exam.
								</div>
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
