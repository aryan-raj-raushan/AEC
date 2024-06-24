import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CourseCareerProspact() {
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
	const table2 = [
		{
			"Exam Details": "Exam Name",
			Particulars: "Joing Entrance Exam (JEE) Advanced 2024",
			Category: "Computer",
		},
		{
			"Exam Details": "Conducting Body",
			Particulars: "IIT Madras",
			Category: "Computer",
		},
		{
			"Exam Details": "Exam Level",
			Particulars: "National",
			Category: "Computer",
		},
		{
			"Exam Details": "Exam Frequency",
			Particulars: "Once a year",
			Category: "Computer",
		},
		{
			"Exam Details": "Mode of Exam",
			Particulars: "Computer-based test",
			Category: "Computer",
		},
		{
			"Exam Details": "Courses Offered through Entrance Exam",
			Particulars:
				"Bachelors: B.Tech, BS, BArch Dual Degree - BTech, MTech, BS, MS Integrated Masters: MTech, MSc",
			Category: "Computer",
		},
	];

	return (
		<section className="mainSection px-4">
			<div className=" max-w-screen-xl mx-auto">
				<UpdateDateArticle dateTime="Nov 17, 2023 14:25 IST" />
			</div>
			<div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
				<div className="flex-1 flex flex-col gap-4">
					<Accordian title="BTech Graduates Career Options" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<div>
								The BTech degree stands out as a highly sought-after
								qualification in India, providing ample career opportunities due
								to the substantial demand for engineering graduates. BTech
								graduates find diverse employment opportunities both within
								India and overseas. Common roles for BTech professionals include
								Computer Science Engineer, Automobile Engineer, Electrical
								Engineer, Robotics Engineer, and more. Explore some of the
								popular career paths available to BTech graduates below.{" "}
							</div>

							<Table table={table}></Table>
							<Separator />
							<div></div>
						</div>
					</Accordian>
					<Accordian title="JEE Advanced Dates 2024" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<div>
								{`The authority has announced the JEE Advanced 2024 exam date. Aspirants preparing for the IIT JEE Advanced exam 2024 must be updated with the JEE Advanced schedule for all the necessary events. Missing events will be a great loss, so candidates must check the JEE Advanced 2024 date and be mindful of the deadlines. This page has been updated with the JEE Advanced 2024 important dates. Candidates can check the table below for the updated JEE Advanced exam schedule 2024.`}
							</div>

							<Table table={table}></Table>
						</div>
					</Accordian>
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
						</div>
					</Accordian>

					<Accordian title="JEE Advanced Sample Paper" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<Table table={table}></Table>
						</div>
					</Accordian>

					<Accordian title="JEE Advanced CutOff 2024" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<div>
								{`The JEE Advanced Cut off for 2024 will be disclosed simultaneously with the release of the IIT JEE results. In the preceding year, the JEE Advanced Cut off for Common Rank List (CRL) stood at 23.89% in aggregate and 6.83% in each subject. Meanwhile, the JEE Advanced Cut off for Other Backward Classes (OBC) was 21.50% in aggregate and 6.15% in each subject. JoSAA will announce the IIT JEE Cut off ranks on the official website – josaa.admissions.nic.in, coinciding with the JEE Advanced qualifying percentiles. These cut off ranks specify the minimum ranks required by candidates for securing admission to the IITs. Attaining a score of 80 or more is considered commendable in JEE Advanced 2024. However, aspiring for an All India Rank (AIR) 1 necessitates aiming for a score exceeding 320 marks in IIT JEE. In the previous year (2023), the JEE Advanced Cut off for IIT Bombay was 67 for Computer Science and Engineering (CSE), 481 for Electrical Engineering, 1736 for Mechanical Engineering, and 4371 for Civil Engineering. Based on the data from the previous year, students aiming for a rank below 1000 should target a score of 170 marks or higher.`}
							</div>

							<div>
								<h6 className="text-primary text-[25px] font-semibold">
									JEE Advanced 2024 Qualifying Marks
								</h6>
							</div>
							<Table table={table2}></Table>
							<div>
								<h6 className="text-primary text-[25px] font-semibold">
									JEE Advanced 2024 Qualifying Marks
								</h6>
							</div>
							<div>
								{
									"Candidates who wish to get a seat in JoSAA 2023 counselling must secure both the JEE Advanced qualifying cut off and inclusion in the rank list to be considered for IIT admission. Candidates can find the JEE advanced cut off 2023 for inclusion in the rank list."
								}
							</div>
							<Table table={table2}></Table>
						</div>
					</Accordian>
					<Accordian
						title="JEE Advanced Preparation Tips 2024 by Experts"
						titlePrimary
						opened
					>
						{`Effective JEE Advanced preparation does not necessitate spending 14-18 hours daily; the emphasis should be on the quality and quantity of the syllabus covered rather than the hours invested. The goal is to attain a clear understanding of all subjects instead of rote memorization. Mere aspirations without action are futile; focus on the need for achievement and the necessary steps to attain success. Here are systematic tips on clearing JEE Advanced: Self-Study Pursue dreams with dedication, patience, and persistence. Self-study demands the ability to grasp concepts independently. It is crucial for JEE Advanced candidates to stay resilient when faced with challenges. Differentiate between tuition and self-study time. Set a Calendar and Gather Proper Study Materials Create a timetable and events calendar. Focus on the NCERT syllabus, and use top-quality books for JEE exams (HC Verma for Physics Theory, Arihant, DC Pandey, MS Chauhan for Chemistry). Avoid experimenting with multiple references; complete one book before exploring others. Secure Quality Paper Analysis and Conceptual Test Series Mock tests, especially those resembling previous years' questions, are invaluable. Analyze marking patterns, question types, and exam patterns. Concentrate on areas crucial for paper analysis and address weak points. Give High Priority to Chemistry For organic chemistry, understand the mechanisms of chemical reactions. Cover each topic in inorganic chemistry, and take notes from NCERT books. Create formulas side by side with notes. Solve Lots of Mathematics Constant practice and comprehensive revision of all chapters are essential. Solve multiple questions from previous years' papers and refer to JEE Exemplars and books like Arihant. Take as many mock tests as possible. Pay More Importance to Physics Formulae Practice derivations and formulas for physics. Take test series and mock trials, and solve previous years' questions. Allocate more time to physics, as the approach differs from chemistry and biology. Examine the Previous Year's Paper Analysis Refer to exam analysis to understand subject areas highlighted more. Physics and Mathematics may be slightly tougher, so allocate more time for these sections. Chemistry questions often align with the NCERT syllabus. Create a Self-Made Timetable Break your daily routine into flexible segments. Assign specific times for physics, chemistry, and mathematics to cover all subjects in a day and facilitate revision.`}
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
									typesetting industry. Lorem Ipsum has been the standard dummy
									text ever since the 1500s, when an unknown printAccordian
									galley of type and scrambled it to make a type specimen book.
									Accordianhas survived not only five centuries, but also the
									leap into electronic typesetting, remaining essentially
									unchanged.
								</Accordian>
								<Accordian title="Which courses are offered at IIT Madras for the students?">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the standard dummy
									text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged.
								</Accordian>
								<Accordian title="Which courses are offered at IIT Madras for the students?">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the standard dummy
									text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged.
								</Accordian>
								<Accordian title="Which courses are offered at IIT Madras for the students?">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the standard dummy
									text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged.
								</Accordian>
								<Accordian title="Which courses are offered at IIT Madras for the students?">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the standard dummy
									text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged.
								</Accordian>
							</div>
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
