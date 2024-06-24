// "use client";
// import { useState } from "react";
// import Filter from "./filter/filter";
// import useCommonApi from "@/src/Hooks/useCommonApi";
// import { CollegeProps } from "@/src/types/Collage";

// export default function CollegeFilters({ AllCollegesData }: any) {
//   const [SelectedFilter, setSelectedFilter] = useState<string[]>([]);
//   const { AllStreamData } = useCommonApi();

//   const streams = [
//     { name: "Management", count: 7430 },
//     { name: "Science", count: 6235 },
//     { name: "Engineering", count: 0 },
//     { name: "Arts", count: 100 },
//     { name: "Commerce", count: 10 },
//     { name: "Computer Applications", count: 3344 },
//     { name: "Education", count: 653 },
//     { name: "Medical", count: 233 },
//     { name: "Pharmacy", count: 4566 },
//     { name: "Paramedical", count: 1234 },
//     { name: "Mass Communication", count: 193 },
//   ];
//   const states = [
//     { name: "Maharashtra", count: 3444 },
//     { name: "Haryana", count: 12 },
//     { name: "Uttar Pradesh", count: 45 },
//     { name: "Tamil Nadu", count: 554 },
//     { name: "Karnataka", count: 1232 },
//     { name: "Delhi NCR", count: 55 },
//     { name: "Kerala", count: 66 },
//     { name: "Delhi", count: 76 },
//     { name: "Gujarat", count: 33 },
//   ];

//   const [open, setOpen] = useState(true);
//   const handleOpen = () => setOpen(open ? false : true);

//   const handleSelectFilter = (name: string) => {
//     if (SelectedFilter.includes(name)) {
//       handleUnselectFilter(name);
//     } else {
//       let filter = [...SelectedFilter, name];
//       setSelectedFilter(filter);
//       console.log(SelectedFilter);
//     }
//   };

//   const handleUnselectFilter = (name: string) => {
//     let filter = SelectedFilter.filter((item) => item !== name);
//     setSelectedFilter(filter);
//   };

//   return (
//     <>
//       <div className="pt-6">
//         <h3 className="py-2 text-primary-text">
//           Showing {AllCollegesData?.length} Colleges
//         </h3>
//         <Filter
//           name="Stream"
//           filters={AllStreamData}
//           handleSelectFilter={handleSelectFilter}
//         />
//         <Filter
//           name="State"
//           filters={states}
//           handleSelectFilter={handleSelectFilter}
//         />
//       </div>
//     </>
//   );
// }
