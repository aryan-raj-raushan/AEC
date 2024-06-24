import { useRouter } from "next/router";
import CollegeCompareCard from "../../card/collegeCompareCard";
import CollegeCompareSeparator from "./collegeCompareSeparator";

export default function CompareTwoColleges({ college1, college2}: any) {
  const router = useRouter()

  const handleCompareNow = () => {
    sessionStorage.setItem("college1", JSON.stringify(college1));
    sessionStorage.setItem(
      "college2",
      JSON.stringify(college2)
    );
    
    router.replace({
      pathname: "/compare",
    });
  };
  return (
    <> 
    <div className="flex gap-1 bg-white p-3 rounded-[10px] shadow-lg">
      <div className="flex-1">
        <CollegeCompareCard college={college1} />
      </div>
      <CollegeCompareSeparator />
      <div className="flex-1">
        <CollegeCompareCard college={college2} />
      </div>
    </div>
    <div className="my-2 mx-auto flex items-center  justify-center">
            <button
              onClick={handleCompareNow}
              className="border px-4 py-2 bg-blue-500 text-white rounded"
            >
              Compare Now
            </button>
          </div>
    </>
  );
}
