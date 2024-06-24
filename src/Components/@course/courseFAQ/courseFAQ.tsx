import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import ContainerBox from "../../containerBox/containerBox";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CourseFAQ() {
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
					<ContainerBox
						title="BTech Frequently Asked Questions (FAQs)"
						titlePrimary
						titleBorder
					>
						<div className="flex flex-col gap-4">
							{[1, 2, 3, 4, 5, 6].map((item) => {
								return (
									<div
										key={item}
										className="flex flex-col gap-6 border border-primary-text-extra-light rounded-lg px-5 py-4"
									>
										<div className="font-semibold text-primary-text">
											Which courses are offered at IIT Madras for the students?
										</div>
										<Separator />
										<div>
											Lorem ipsum dolor sit amet consectetur. Aliquam donec
											tristique semper enim sit mi cursus. Dolor elementum diam
											commodo est etiam congue. Tortor ornare ipsum nisi ac in
											amet tempor nibh ut. Orci lectus mauris quisque nulla.
										</div>
									</div>
								);
							})}
						</div>
					</ContainerBox>
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
