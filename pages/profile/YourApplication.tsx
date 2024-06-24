import React from "react";
import Card from "@/src/Components/LoginComp/Application/Card";
import useUserMetaData from "@/src/Hooks/useUserMetaData";
import { ID } from "@/types/global";
import { useAppSelector } from "@/src/store";
import useUserSignup from "@/src/Hooks/useSignup";

const YourApplication: React.FC = () => {
  const { userID } = useAppSelector((store: any) => store.auth);
  const { getUserDataMetaId } = useUserSignup();
  const { getUserMetaData } = useUserMetaData();

  const userMetaId: ID = getUserDataMetaId(userID);
  const { userAllMetaData } = getUserMetaData(userMetaId);
  const AppliedCollege = userAllMetaData?.applied_colleges;

  return (
    <div className="shadow-lg p-2 rounded-lg border flex flex-col mx-2 sm:mt-0 mt-2 bg-[#428BC11A] gap-2 pb-8 w-full">
      {AppliedCollege && AppliedCollege.length > 0 ? (
        <>
          <span className="p-2 mx-2 my-2 text-3xl font-semibold">
            Your Applied Colleges:
          </span>
          <div>
            {AppliedCollege.map((college: any, index: number) => (
              <Card key={index} college={college} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[320px] font-semibold">
          College not found
        </div>
      )}
    </div>
  );
};

export default YourApplication;
