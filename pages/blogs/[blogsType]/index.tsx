
import NewsBanner from "@/src/Components/@news/newsBanner/newsBanner";
import NewsLatest from "@/src/Components/@news/newsLatest/newsLates";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppBanner from "@/src/Components/appBanner/appBanner";
import NewsLayouts from "@/src/Layouts/NewsLayouts/Newslayouts";

export default function NewsDetail() {
    const [currentTab, setCurrentTab] = useState("overview");
    const router = useRouter();
    const blogsType = router.query.blogsType as string;
    let options = [
        { name: "Latest News", value: "latest" },
        { name: "Featured", value: "feature" },
        { name: "Colleges", value: "colleges" },
        { name: "Exams", value: "exams" },
        { name: "Study Abroad", value: "studyAbroad" },
        { name: "Policies", value: "plicies" },
        { name: "Courses", value: "courses" },
    ];
    let topeSearches = [
        { name: "JEE Advanced 2024 Results", path: "" },
        { name: "JEE Advanced 2024 Application Form", path: "" },
        { name: "JEE Main 2024 Results", path: "" },
        { name: "JEE Main 2024 Application Form", path: "" },
        { name: "JEE Advanced 2024 Results", path: "" },
    ];

    const getTabData = () => {
        switch (currentTab) {
            case "latest":
                return <NewsLatest />;
            case "feature":
                return <NewsLatest />;
            //   case "examPattern":
            //     return <ExamPattern />;
            //   case "syllabus":
            //     return <ExamSyllabus />;
            //   case "importantDates":
            //     return <ExamImportantDates />;
            //   case "registration":
            //     return <ExamRegistration />;
            //   case "prepMaterial":
            //     return <ExamPrepMaterial />;
            //   case "samplePaper":
            //     return <ExamSamplePaper />;
            //   case "tips":
            //     return <ExamTips />;
            //   case "examDiscussion":
            //     return <ExamDiscussion />;
            //   default:
            //     return <ExamOverview />;
        }
    };
    const handleTab = (value: string) => {
        setCurrentTab(value);
        router.push(
            {
                pathname: `/news/${value}`,
            },
            undefined,
            { shallow: true }
        );
    };
    useEffect(() => {
        if (blogsType) {
            setCurrentTab(blogsType);
        }
    }, [blogsType]);
    return (
        <NewsLayouts>
            <section className="my-16">
                <NewsBanner />
            </section>
            <section>
                <div>{getTabData()}</div>
            </section>
            <section className="max-w-screen-xl mx-auto">
                <AppBanner />
            </section>
        </NewsLayouts>
    );
}
