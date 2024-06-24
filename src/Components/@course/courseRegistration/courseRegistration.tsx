import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Button from "../../button/button";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function CourseRegistration() {
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
						title="BTech Admission Process in India 2024"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								The BTech entries are majorly done via the engineering exams
								conducted by various bodies. In addition, access to a B.Tech
								degree is also done on a merit basis and candidates can also
								take access into the second year via lateral entry. Candidates
								can check the details given below.{" "}
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									BTech Admission 2024 Via Entrance Exam
								</h6>
								<div className="flex gap-4 flex-wrap justify-start">
									To secure admission to a BTech program in India, candidates
									typically follow a process involving engineering entrance
									exams. Here are the key steps: Candidates must appear for
									recognized entrance exams. National-level exams like JEE Main
									(accepted by NITs, GFTIs) and JEE Advanced (exclusive to IITs)
									are commonly taken. State-level exams such as WBJEE, AP
									EAMCET, TS EAMCET, KEAM, and MHT CET, along with
									university-based exams like VITEEE, SRMJEEE, BITSAT, UPESEAT,
									etc., are also accepted by various colleges. These exams are
									usually conducted between April and June each year. Following
									the announcement of results, counseling takes place, where
									candidates choose their preferred college and course based on
									their rank. After selecting a college, candidates visit the
									respective campus for admission formalities.
								</div>
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									List of BTech Specializations Available in India
								</h6>
								<div>
									- B.Tech CSE with specialization in Artificial Intelligence
									and Machine Learning (association with Microsoft) - B.Tech CSE
									with specialization in Cloud Computing (association with
									Microsoft) - B.Tech Computer Science and Engineering in
									association with IBM (Cyber Security and Forensics) - B.Tech
									CSE with Specialization in Gaming Technology (association with
									IBM) - B.Tech Electronics & Communication Engineering (with
									specialization in the Internet of Things (IoT) and Artificial
									Intelligence in association with Intel) - Mechanical
									Engineering with specialization in Mechatronics - B.Tech
									Mechanical Engineering (with specialization in Smart
									Manufacturing and Automation) - B.Tech Computer Science and
									Engineering (with specialization in Artificial Engineering &
									Machine Learning) in association with Xebia - B.Tech Computer
									Science and Engineering (with specialization in Cloud, DevOps
									& Automation) in association with Xebia - B.Tech Computer
									Science and Engineering (with specialization in Cyber
									Security) in association with Quick Heal
								</div>
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									List of BTech Course for Diploma Holder
								</h6>
								<Table table={table}></Table>
							</div>
						</div>
					</Accordian>
					<Accordian title="Admission Details" titlePrimary opened>
						<div>
							The online admission procedure for the B.Tech. Engineering
							Technology program at BITS Pilani is conducted through the Online
							Application Centre. Prospective applicants must complete and
							submit the application form electronically. To do so, they should
							access the official website of the BITS Pilani Online Application
							Center and provide the necessary details online.
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
