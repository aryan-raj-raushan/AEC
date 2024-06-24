import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import Table from "@/src/Components/table/table";
import { ListYellowBulletIcon } from "@/src/Asset";
import AppBanner from "@/src/Components/appBanner/appBanner";
import ScholarshipUpdateDateArticle from "../scholarshipUpdateDateArticle/scholarshipUpdateDateArticle";
import ScholarshipSideBarComponent from "../scholarshipSideBar/scholarshipSideBar";
import CollegeAcceptingAdmissions from "../collegeAcceptingAdmissions/collegeAcceptingAdmissions";


export default function TableOfContent() {
  const table = [
    {
      "Exams and Events": "Last Date to Apply for the Scholarship",
      Date: "January",
    },
    {
      "Exams and Events": "Interview Dates",
      Date: "Between April and June",
    },
    {
      "Exams and Events": "Declaration of Selection Results",
      Date: " June",
    },
    {
      "Exams and Events": "Commencement of the Doctoral Programme",
      Date: "In the month of September/October",
    },
  ];

  return (
    <>
      {/* <section>
        <div>
          <CollegeAcceptingAdmissions />
        </div>
      </section> */}
      <section className="mainSection px-4">
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1 flex flex-col gap-4">
            <ScholarshipUpdateDateArticle dateTime="Nov 17, 2023 14:25 IST" />
            <Accordian title="Table of Content" titlePrimary opened>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowBulletIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        About the Scholarship
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>

            <Accordian
              title="About Sir Edmund Hillary Scholarship"
              titlePrimary
              opened
            >
              <div className="flex flex-col gap-8">
                <p>
                  {`If you aspire to pursue higher studies in the UK, the University of Cambridge is surely the 
                  best place you can opt for and St. John’s College is amongst the largest colleges. Ever since 
                  its inception in the year 1511, the college has produced numerous laureates including Scientists, 
                  Artists, Nobel Prize Winners, Prime Minister and more. Today, the college is host to over 150 fellows 
                  who research and teach. Adding to this, the college also offers opportunities for study to over 900 students 
                  at undergraduate and postgraduate level.`}
                </p>
              </div>
            </Accordian>

            <Accordian
              title="Sir Edmund Hillary Scholarship Eligibility Criteria"
              titlePrimary
              opened
            >
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`The candidates applying for the Sir Edmund Hillary Singh scholarship should fulfil the requirements. 
                    They should submit the applications within the deadline. Listed below are Sir Edmund Hillary scholarship 
                    eligibility criteria:`}
                </p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowBulletIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        The applicant should be an Indian National currently
                        based in India and having a valid Indian passport.
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>

            <Accordian
              title="How to Apply for Sir Edmund Hillary Scholarship?"
              titlePrimary
              opened
            >
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`The candidates should submit the applications within the Sir Edmund Hillary scholarship's last date. 
                  The candidates should visit the official website to obtain the application form. Given below is the process 
                  on how to apply for Sir Edmund Hillary scholarship:`}
                </p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowBulletIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        The candidates should visit the official website by
                        clicking here.
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>

            <Accordian
              title="Sir Edmund Hillary Scholarship Selection Process"
              titlePrimary
              opened
            >
              <div className="flex flex-col gap-8">
                <p>
                  {`The University adopts a strict selection procedure to shortlist candidates for Sir Edmund Hillary Scholarship. 
                  The initial shortlisting of all the applications received is done by the Selection Committee, after which a personal
                   interview is conducted for the shortlisted students through Skype. After the interviews are over, the selection 
                   committee is responsible for identifying the number of candidates for the scholarship award. The final results
                    will be communicated to students within one month of the interview. After selection, it is the responsibility of 
                    St. John’s College to coordinate briefings about pre-departure, travel arrangements and UK visa to the selected 
                    students.`}
                </p>
              </div>
            </Accordian>

            <Accordian
              title="Sir Edmund Hillary Scholarship Key Dates"
              titlePrimary
              opened
            >
              <div className="flex flex-col gap-5">
                <div>
                  {`The dates mentioned below are tentative and applicable for this academic session. It may vary every year on 
                  the discretion of the scholarship provider.`}
                </div>
                <h1 className="text-primary text-[20px] font-semibold">
                  Important Dates
                </h1>
                <div>
                  <Table table={table}></Table>
                </div>
              </div>
            </Accordian>

            <div>
              <div className="border border-primary-text-light rounded-md">
                <div className="flex justify-between px-5 py-4 border-b border-b-primary-text-light items-center">
                  <p className={"text-primary text-[25px] font-semibold"}>
                    FAQs about Sir Edmund Hillary Placement
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-4 text-sm">
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                  <Accordian title="Which courses are offered at IIT Madras for the students?">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Accordian>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 hidden md:block">
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
