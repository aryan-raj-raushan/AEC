import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Button from "../../button/button";
import Dropdown from "../../dropdown/dropdown";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CoursePrepMaterial() {
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
					<div className="flex flex-col">
						<div className="bg-primary text-white font-semibold text-2xl flex items-center justify-center px-4 py-8">
							Study Materials
						</div>
						<div className="p-8 border-[0.5px] border-primary-text-light rounded flex flex-col items-center gap-10">
							<div className="w-full">
								<Dropdown
									title="Specialization"
									options={[
										{ label: "Mechanical Engineering", value: "MAE" },
										{ label: "Computer Engineering", value: "CSE" },
									]}
									onSelect={() => { }}
								/>
							</div>
							<div>
								<Button
									text={"View"}
									filled
									filledColor="bg-primary"
									textColor="text-white"
									paddingX="px-16"
								></Button>
							</div>
						</div>
					</div>
					<Accordian title="Semester 1 & 2" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<Table table={table}></Table>
						</div>
					</Accordian>
					<Accordian title="Semester 3 & 4" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<Table table={table}></Table>
						</div>
					</Accordian>
					<Accordian title="Semester 5 & 6" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<Table table={table}></Table>
						</div>
					</Accordian>
					<Accordian title="Semester 7 & 8" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<Table table={table}></Table>
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
