import React, { useState } from "react";
import { RootLayouts } from "@/src/Layouts";
import AppBanner from "@/src/Components/appBanner/appBanner";
import SideBar from "@/src/Components/LoginComp/SideBar";
import YourProfile from "./YourInformation";
import YourApplications from "./YourApplication";
import YourReviews from "@/pages/profile/YourReviews";
import Support from "@/pages/profile/YourSupport";
import AccountSettings from "@/pages/profile/YourAccountSetting";
import { useAppSelector } from "@/src/store";
import Login from "@/src/Components/Login/Login";

const componentsNames = [
  "Your Profile",
  "Your Applications",
  "Your Reviews",
  "Support",
  "Account Settings",
  "Logout",
];

const ProfilePage = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const { authState } = useAppSelector((store: any) => store.auth);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };
  const components = [
    <YourProfile />,
    <YourApplications />,
    <YourReviews />,
    <Support />,
    <AccountSettings />,
  ];

  return (
    <RootLayouts>
      <div className="max-w-screen-xl mx-auto">
        {authState ? (<>
          <section className="navbar-landingPage-responsive">
            <h4 className="text-lg px-4 font-semibold">{componentsNames[selectedItem]}</h4>
          </section>
          <section className="mt-5 lg:flex lg:flex-row flex-col lg:gap-5 gap-1 items-start justify-center ">
            <div className="sm:w-auto w-full">
              <SideBar
                selectedItem={selectedItem}
                handleItemClick={handleItemClick} />
            </div><div className="flex w-full">{components[selectedItem]}
            </div>
          </section>
        </>) : (
          <>
            <section className="navbar-landingPage-responsive">
              <h4 className="text-xl text-center px-4 font-semibold">You are not logged in.
                <br />
                Please Login.
              </h4>
            </section>
            <Login isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
          </>
        )
        }

        <section className="max-w-screen-xl mx-auto px-4 my-12">
          <AppBanner />
        </section>
      </div>
    </RootLayouts>
  );
};

export default ProfilePage;
