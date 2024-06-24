import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CourseColleges() {
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
					<Accordian
						title="Top BTech Engineering Colleges in India with Fee Details"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								There are various prominent government and private colleges in
								India that offer BTech courses with an average fee between INR
								25,000-3 LPA. Some of the top private BTech colleges in India
								are Chandigarh University, RKDF University, etc., whereas, top
								Govt. BTech course colleges include BVM Engineering College, Goa
								University, etc. Below listed are the top BTech colleges in
								India along with the fee breakdown:{" "}
							</div>
							<Table table={table}></Table>
							<Separator />

							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Top 10 City Wise BE Colleges in India
								</h6>
								<div>
									Below listed are location-wise BE course colleges in India
									with the average annual fees:
								</div>

								<Table table={table2}></Table>
							</div>
						</div>
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
