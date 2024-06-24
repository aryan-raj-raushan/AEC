import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import ExamPrimaryCard from "../../examComponents/cards/examPrimaryCard";
import ExamSecondaryCard from "../../examComponents/cards/examSecondaryCard";
import Separator from "../../separator/separator";
import Table from "../../table/table";
import CarouselComponent from "@/src/Components/carousel/carousel";

export default function ExamPrepMaterial() {
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
					<Accordian title="JEE Advanced Preparation 2024" titlePrimary opened>
						<div className="flex flex-col gap-5">
							<div>
								{`For candidates aspiring to secure admission in undergraduate programs and integrated master's degrees in Engineering, Science, and Architecture across various Indian Institutes of Technology (IITs), cracking the JEE Advanced exam is essential. The JEE Advanced syllabus is meticulously designed to align with the high standards set by IIT, aiming to evaluate students' capabilities in reasoning, analytical thinking, and comprehension skills. Comprising three subjects—Physics, Chemistry, and Mathematics—the JEE Advanced syllabus is accessible on jeeadv.ac.in. This article provides the JEE Advanced syllabus for 2024 in PDF format. Applicants can explore the crucial topics for each subject and gain insights into the chapters outlined in the JEE Advanced exam syllabus for 2024. A comprehensive discussion of the detailed JEE Advanced 2024 syllabus below serves as a valuable resource for candidates, aiding them in formulating an effective study plan to succeed in JEE Advanced 2024. The syllabus for JEE Advanced 2024 Paper 1 and 2, covering Engineering and Architecture exams, is presented, offering a breakdown of topics for each section—Physics, Chemistry, and Mathematics.`}
							</div>

							<Table
								table={table}
								title="JEE Advanced Physics Exam Syallbus"
							></Table>
							{/* <div className="my-4 bg-primary-light py-4 px-4">
                <CarouselComponent
                  slidesDesktop={3}
                  slidesMobile={1}
                  slidesTablet={2}
                  titleColor="text-primary"
                  title="Featured Exams"
                  slides={[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                    return <ExamPrimaryCard key={item} />;
                  })}
                />
              </div> */}

							<Table
								table={table}
								title="JEE Advanced Mathematics Exam Syallbus"
							></Table>
							{/* <div className="my-4 bg-primary-light py-4 px-4 w-full">
                <CarouselComponent
                  slidesDesktop={3}
                  slidesMobile={1}
                  slidesTablet={2}
                  titleColor="text-primary"
                  title="Exams Application Form | March 2024"
                  slides={[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                    return <ExamSecondaryCard key={item} />;
                  })}
                />
              </div> */}

							<Table
								table={table}
								title="JEE Advanced Chemistry Exam Syallbus"
							></Table>

							<Table
								table={table}
								title="JEE Advanced Important Topics 2024"
							></Table>

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
