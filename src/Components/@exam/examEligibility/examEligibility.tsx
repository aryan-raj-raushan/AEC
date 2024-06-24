import CollegeSideBarComponent from "../../@college/collegeSideBar/collegeSideBar";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";
import Accordian from "../../accordian/accordian";
import AppBanner from "../../appBanner/appBanner";
import Separator from "../../separator/separator";
import Table from "../../table/table";

export default function ExamEligibility() {
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
						title="JEE Advanced Eligibility Criteria 2024"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								{`The eligibility criteria for JEE Advanced 2024 has been published by IIT Madras on the official website, jeeadv.nic.in. These criteria include factors such as performance in JEE Main, age limitations, educational qualifications, and more. As per the IIT JEE eligibility guidelines, it is crucial for candidates to participate in and be among the top 2,50,000 qualifiers of JEE Main to qualify. Those who meet the specified eligibility conditions are eligible to take the IIT JEE Advanced exam. Successful candidates must complete the registration process for JEE Advanced. The exam itself is scheduled to take place on May 26, 2024, according to the official announcement from the authority.`}
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Criterion 1 - Performance in JEE Main 2024
								</h6>
								<div>
									Candidates have to pass in JEE Main (Paper 1). It is also
									necessary for them to be among the top 2,50,000 candidates.
									The percentage reservation for the following categories is
									given below: GEN-EWS - 10% OBC-NCL - 27% SC - 15% ST - 7.5%
									OPEN - 40.5% PwD - 5% horizontal reservation in all of the
									above.
								</div>
								<Table table={table}></Table>
							</div>
							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Criterion 2 - JEE Advanced Eligibility Criteria - Age Limit
								</h6>
								<div>
									Candidates must have been born on or after October 1, 1999, to
									meet the JEE Advanced attempt limit. There is a relaxation of
									5 years for SC, ST, and PwD candidates (born on or after
									October 1, 1994).{" "}
								</div>
							</div>

							<Separator />
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Criterion 3 - JEE Advanced Eligibility Criteria- Number of
									Attempts
								</h6>
								<div>Candidates can appear for two consecutive years. </div>
							</div>
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Criterion 4 - JEE Advanced 2024 Eligibility Criteria-
									Appearance in 12th (or equivalent) Examination
								</h6>
								<div>
									{`Candidates who took the class 10+2 exam in 2023 or 2024, including compulsory subjects like Physics, Chemistry, and Mathematics, are eligible for JEE Advanced. However, aspirants who appeared for the class 10+2 exam in 2022 or earlier are not qualified. In the case where results are announced for the academic year 2021-22 on or after September 21, 2022, candidates from that board who took their 12th standard qualifying exam in 2022 are considered eligible for JEE Advanced 2024, provided they meet other eligibility criteria. Conversely, if the class 12th examination board declared results for the academic year 2020-2021 before September 21, 2021, but a candidate's result was withheld, that candidate is not eligible for JEE Advanced 2024. The following examinations are considered equivalent to the 12th standard: 1. The final exam of the 10+2 system by a Central or State Board recognized by the Association of Indian Universities (AIU). 2. Intermediate or two-year Pre-University exam by a Board or University recognized by the AIU. 3. The final exam of the two-year course of the Joint Services Wing of the National Defence Academy. 4. Senior Secondary School Examination by the National Institute of Open Schooling with a minimum of five subjects. 5. Any Public School, Board, or University exam in India or a foreign country recognized as equivalent to the 10+2 system by the AIU. 6. H.S.C. vocational examination. 7. Diploma recognized by the All India Council for Technical Education (AICTE) or a State Board of Technical Education of at least 3 years duration. 8. General Certificate Education (GCE) exam (London, Cambridge, or Sri Lanka) at the Advanced (A) level. 9. High School Certificate Examination of the Cambridge University or International Baccalaureate Diploma of the International Baccalaureate Office, Geneva.`}{" "}
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Criterion 5 - Earlier Admissions at IIT
								</h6>
								<div>
									{`Irrespective of whether the candidate stayed enrolled in the program or confirmed an IIT seat through online reporting or at a reporting centre in the previous instances, it is imperative that the applicant has not been previously admitted to an IIT. Additionally, candidates who, at any point, had their admission to an IIT revoked for any reason and subsequently enrolled in another IIT are also ineligible to participate in JEE Advanced 2024.Candidates who were first-time enrolled on a preparatory programme at any of the exams in 2022 may sit for the JEE Advanced Exam 2024Candidates who received an IIT seat through JoSAA 2022 but 1. who I failed to appear "online" or at any "reporting centre" OR2. withdrew before the final round of seat allocation OR 3. had their seat cancelled (for any reason) prior to the final round of IIT seat allocation are eligible to take the JEE (Advanced) 2024 examBut in each of the aforementioned situations, the applicant must also meet the prerequisites listed in Criteria 1 through Criteria 4`}
								</div>
							</div>
						</div>
					</Accordian>
					<Accordian
						title="Factors that determine the cut off of JEE Advanced"
						titlePrimary
						opened
					>
						<div className="flex flex-col gap-5">
							<div>
								{`Here are various factors that determine the cut off of JEE
              Advanced: Previous year’s cutoff trends The total number of
              applicants of JEE Advanced The difficulty level of the exam
              Candidates’ performance in the JEE Advanced 2023 The number of
              seats available for admission`}
							</div>
							<div className="flex flex-col gap-4">
								<h6 className="text-primary text-[25px] font-semibold ">
									Eligibility Criteria for Cutoff of JEE Advanced 2024
								</h6>
								<div>
									Category wise cutoff marks of JEE Advanced for the top 20
									percentile are calculated based on the marks scored by the
									candidates who pass in their respective boards in the
									particular year. JEE Advanced cutoff marks for PwD candidates
									will be the same as the lowest of the cutoff marks for other
									categories. Top 20 percentile cutoff for the academic year
									2024 will be considered for those candidates who passed the
									12th standard (or equivalent) examination in the same year.
									Similarly, the cutoff of 2023 will be taken for candidates who
									qualified the exam in the academic year 2023. Candidates who
									appeared for the qualifying exam for the first time in 2023
									and wish to reappear in 2024 for the objective of qualifying
									for the top 20 percentile cutoff will have to reattempt all of
									the subjects. The top 20 percentile cutoff of 2023 will be
									considered for such candidates. In case a Board does not
									provide information about the top 20 percentile cutoff, the
									candidates will have to produce a certificate from the
									respective board stating that he/she falls within the top 20
									percentile of successful candidates.
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
