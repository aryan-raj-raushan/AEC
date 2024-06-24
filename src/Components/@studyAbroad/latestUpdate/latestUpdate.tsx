import Image from "next/image";
import Accordian from "@/src/Components/accordian/accordian";
import Table from "@/src/Components/table/table";
import {
  ListYellowBulletIcon,
  ListYellowDotIcon,
  calendarBroken,
} from "@/src/Asset";
import AppBanner from "@/src/Components/appBanner/appBanner";
import ScholarshipSideBarComponent from "../../@scholarship/scholarshipSideBar/scholarshipSideBar";
import useRecomended from "@/src/Hooks/useRecomended";
import CarouselComponent from "@/src/Components/carousel/carousel";
import CollegeCard from "../../card/collegeCard";
import TopScholarshipWorldCard from "../../card/topScholarshipWorldCard";
import GetExpertHelp from "../../@college/getExpertHelp/getExpertHelp";
import UpdateDateArticle from "../../updatedDateArticle/updatedDateArticle";

export default function StudyLatestUpdate() {
  const { RecomendedCollegeData } = useRecomended();
  const { RecomendedScholarshipsData } = useRecomended();

  return (
    <>
      <section className="mainSection px-4">
        <div className="flex gap-4 max-w-screen-xl mx-auto mb-4">
          <div className="flex-1  flex flex-col gap-4">
            <UpdateDateArticle dateTime={`Nov 17, 2023 14:25 IST`} />
            <Accordian
              title="Study in Germany Latest Update"
              titlePrimary
              opened
            >
              {/* <Image src={calendarBroken} width={20} height={20} alt="" /> */}
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                <p>
                  The online registration window for IIT JAM 2024 has concluded.
                  The Admit Card for IIT JAM 2024 can be downloaded online
                  starting from January 8, 2024. Additionally, the IIT JAM 2024
                  examination is scheduled to take place on February 11, 2024.
                  Here are some other noteworthy updates from IIT Madras.
                </p>
                {[1, 2].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        The application correction window for GATE 2024 at IISc
                        Bangalore is set to commence on November 18, 2023.
                        Applicants can make corrections to their GATE forms
                        until November 24, 2023. Moreover, the GATE 2024
                        examination is scheduled to be held on February 3, 4,
                        10, and 11, 2024.
                      </div>
                    </div>
                  );
                })}

                <div className="grid gap-x-4 gap-y-2 grid-cols-3">
                  {[1, 2, 3, 4, 5].map((item) => {
                    return (
                      <div className="max-w-md mx-auto bg-white overflow-hidden shadow-md">
                        <div className="bg-[#f5f5f7] px-4 py-2">
                          <div className="text-[18px] font-semibold text-gray-800 flex gap-4 ">
                            <div className="flex gap-1">
                              <Image
                                src={calendarBroken}
                                width={20}
                                height={20}
                                alt=""
                              />
                              October 17, 2024
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="px-4 py-6">
                          <p className="text-gray-700">
                            On the 17th of November, IIT JAM 2024 Application
                            Correction Portal to Open on...
                          </p>
                        </div>

                        {/* <!-- Card Footer --> */}
                        <div className="bg-gray-200">
                          <p className="text-gray-700">
                            <button
                              type="button"
                              className="w-full text-white bg-primary font-medium text-sm px-5 py-2.5 text-center items-center me-2"
                            >
                              Read More
                            </button>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Accordian>
            <Accordian title="Table of Contents" titlePrimary opened>
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
                        Education System in Germany
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>
            <Accordian title="Overview" titlePrimary opened>
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`The candidates should submit the applications within the Sir Edmund Hillary scholarship's last date. 
                  The candidates should visit the official website to obtain the application form. Given below is the process 
                  on how to apply for Sir Edmund Hillary scholarship:`}
                </p>
              </div>
              <div className="flex flex-col mb-4 gap-8">
                <p>{`It is Germany!`}</p>
              </div>
              <div className="flex flex-col mb-4 gap-8">
                <p>{`Germany is renowned for its top-notch universities and diversified community of international students. 
                Their research facilities, internationally recognized degrees, and educational quality are on par with those of 
                worldwide universities. Germany has numerous recognized public and private universities, providing the best educational 
                options for overseas students. However, what is the process of studying in Germany? Find out in this blog. From the 
                benefits and costs of studying in Germany to the application and visa process, we will cover everything!`}</p>
              </div>
              <div className="flex flex-col mb-4 gap-8">
                <p>{`Is it your goal to enrol in renowned bachelor's or master's programs in Germany? Wondering who can assist 
                you in simplifying the study-abroad process? Well, you got Affinity. Having achieved 4,500+ admits to the top 100 
                universities throughout 2023, and a dozen admits to the best universities in 2024 already, the premium services 
                can help you achieve your dream too.`}</p>
              </div>
              <hr className="border-b border-dashed mb-4 border-[#000000]" />
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
              <div className="flex flex-col pt-2 mb-4 gap-8">
                <h1 className="text-[20px] font-semibold">
                  Why Study in Germany?
                </h1>
                <p>{`Studying in Germany can be a fantastic option for international students due to the multitude of benefits it offers, including:`}</p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 font-[16px] cursor-pointer">
                        <div className="font-semibold	">Affordability:</div>
                        <p>
                          {`The online registration window for IIT JAM 2024 has
                            concluded. The Admit Card for IIT JAM 2024 can be downloaded
                            online starting from January 8, 2024. Additionally, the IIT
                            JAM 2024 examination is scheduled to take place on February
                            11, 2024. Here are some other noteworthy updates from IIT
                            Madras.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="pt-2">
                {`The numerous advantages outlined above make Germany a compelling option for international students seeking a
                   high-quality education, affordability, and a vibrant cultural experience.`}
              </p>
            </Accordian>
            <Accordian title="Education System in Germany" titlePrimary opened>
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`The higher education system in Germany  is well renowned and enjoys a high reputation around the globe. There are 
                  numerous top ranked universities in Germany that offer degrees which are highly valued. The three types of degrees 
                  offered in Germany are:`}
                </p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 font-[16px] cursor-pointer">
                        <div className="font-semibold	">Bachelor’s Degree:</div>
                        <p>
                          {`Bachelor's degree is pursued after finishing high school and the title is normally awarded after six to 
                          eight semesters (3-4 years).`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col pt-2 mb-4 gap-8">
                <p>{`Under the German university system there are 3 types of higher education institutions. Let us take a look at 
                  all these types below: `}</p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 font-[16px] cursor-pointer">
                        <div className="font-semibold	">
                          Academic Universities:
                        </div>
                        <p>
                          {`Research driven institutions that focus on theoretical approach rather than practical. Students can pursue 
                          all types of degrees at these institutions.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="pt-2">
                {`The numerous advantages outlined above make Germany a compelling option for international students seeking a
                   high-quality education, affordability, and a vibrant cultural experience.`}
              </p>
              <div className="pt-2">
                <hr className="border-b border-dashed mb-4 border-[#000000]" />
              </div>
              <div className="flex flex-col pt-4 mb-4 gap-4">
                <h1 className="text-[20px] font-semibold">
                  Credit System in Germany
                </h1>
                <p>{`German universities use the ECTS (European Credit Transfer System) credit system. All course modules, 
                  dissertation preparation and work placements are taken into consideration when calculating ECTS credits.`}</p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex font-[16px] cursor-pointer">
                        <p>
                          {`Students can usually earn 30 ECTS credits per semester and 60 in total for an academic year.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>

            <Accordian title="Top Scholarships" titlePrimary opened>
              <div className="infoOption bg-white flex border-b border-b-prmary-light max-w-screen-xl mx-auto "></div>
            </Accordian>

            {/* <Accordian title="Top Scholarships" titlePrimary opened>
              <div className="infoOption bg-white flex border-b border-b-prmary-light max-w-screen-xl mx-auto ">
                <div className="max-w-screen-xl mx-auto px-4">
                  <CarouselComponent
                    slidesDesktop={4}
                    slidesTablet={3}
                    title="Top Colleges In India"
                    slides={
                      RecomendedCollegeData &&
                      RecomendedCollegeData?.map((clgData: any, index: any) => {
                        return (
                          <CollegeCard
                            key={index}
                            college={clgData?.attributes}
                            id={clgData?.id}
                            college_name={""}
                            city={undefined}
                            state={undefined}
                          />
                        );
                      })
                    }
                    slideGap={undefined}
                  />
                </div>
              </div>
            </Accordian> */}
            <Accordian
              title="Admission Requirements in Germany"
              titlePrimary
              opened
            >
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`English is used as the medium of instruction for the courses, which are referred to as international study programs.
                   Therefore, students looking for English-taught courses should search under "Internationals" or the area that 
                   specifically mentions their course. Additionally, some courses offer the chance for students to complete a 
                   dissertation in German, for which they must first demonstrate their proficiency in the language. German 
                   universities have fairly strict admissions policies. They are:`}
                </p>
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 font-[16px] cursor-pointer">
                        <div className="font-semibold	">
                          For Undergraduate Courses:
                        </div>
                        <p>
                          {`Up to 90%are anticipated for undergraduate programs, in
                        addition to a bachelor's degree program in India. To
                        demonstrate your proficiency in the English language,
                        you must also submit your IELTS or TOEFL results. For
                        those wishing to study in Germany, a minimum TOEFL score
                        of 100 or an IELTS score of 6.0 is required.`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="pt-2">
                <hr className="border-b border-dashed mb-4 border-[#000000]" />
              </div>

              <div className="text-[20px] pt-2 font-semibold">
                Intakes in Germany
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-1 font-[16px] cursor-pointer">
                        <div className="font-semibold	">Winter Intake:</div>
                        <p>
                          {`This is the primary intake in Germany, with most programs starting in September/October and ending 
                          in February/March. The application deadline for the winter intake is usually in July or August`}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>
            {/* <Accordian title="Top Scholarships" titlePrimary opened>
              <CarouselComponent
                slidesDesktop={4}
                slidesTablet={3}
                title="Top Scholarships"
                slides={
                  RecomendedScholarshipsData &&
                  RecomendedScholarshipsData?.map((item: any, index: any) => {
                    return (
                      <div>
                        <TopScholarshipWorldCard
                          key={index}
                          ScholarshipData={item?.attributes}
                        />
                      </div>
                    );
                  })
                }
                slideGap={undefined}
              />
            </Accordian> */}
            <Accordian
              title="Visa Requirements to Study in Germany"
              titlePrimary
              opened
            >
              <div className="flex flex-col mb-4 gap-8">
                <p>
                  {`You will need a German student visa if you are not a citizen of countries like - EEA/EU countries, Australia, 
                  Andorra, Brazil, Canada, El Salvador, Honduras, Israel, Japan, Monaco, New Zealand, San Marino, Switzerland, 
                  the United States and South Korea.`}
                </p>
              </div>
              <div className=" font-semibold	">
                Here's the step-by-step process for applying for a student visa
                in Germany:
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        Open your blocked account. When applying for a visa, you
                        can provide evidence that you can meet your living costs
                        by opening a blocked bank account.
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="font-semibold mb-2">
                Necessary Documents to Apply for a Student Visa in Germany
              </div>
              <div className="bg-primary-extra-light p-5 flex flex-col gap-4">
                {[1, 2, 3].map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div>
                        <Image
                          src={ListYellowDotIcon}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-medium text-primary cursor-pointer">
                        Completed application form
                      </div>
                    </div>
                  );
                })}
              </div>
            </Accordian>
            <div>
              <GetExpertHelp
                heading="Will You get admission in Germany"
                description="Say Hello to Our expert and goodbye to your doubts!"
                buttonText="Get Free Expert Help"
              />
            </div>
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
          <div className="my-4 hidden md:block pt-16">
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
