import React from "react";
import Image from "next/image";
import {
  Profile,
  ReviewIcon,
  SettingIcon,
  LogoutIcon,
  SupportIcon,
  EditIcon,
} from "@/src/Asset";
import { useRouter } from "next/router";
import { clearAuthState } from '@/src/store/authSlice';
import { useAppDispatch } from "@/src/store";

interface SideBarProps {
  selectedItem: number;
  handleItemClick: (index: number) => void;
}

const menuItems = [
  { name: "Your Profile", icon: Profile },
  { name: "Your Applications", icon: EditIcon },
  { name: "Your Reviews", icon: ReviewIcon },
  { name: "Support", icon: SupportIcon },
  { name: "Account Settings", icon: SettingIcon },
  { name: "Logout", icon: LogoutIcon },
];

const SideBar: React.FC<SideBarProps> = ({ selectedItem, handleItemClick }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onMenuClick = (index: number) => {
    if (menuItems[index].name === "Logout") {
      dispatch(clearAuthState());
      router.push("/");
    } else {
      handleItemClick(index);
    }
  };

  return (
    <div className="shadow-lg px-4 lg:px-0 lg:py-3 py-0 rounded-lg border overflow-x-auto hide-scrollbar w-full">
      <div className="flex lg:flex-col flex-row gap-2 text-xs md:text-base text-center py-2 lg:px-4 font-work-sans capitalize cursor-pointer w-full min-w-fit">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`lg:p-3 p-2 rounded-lg flex flex-row items-center gap-3 md:gap-2 justify-center lg:justify-start text-sm cursor-pointer w-44 lg:w-60 ${selectedItem === index
              ? "bg-primary text-white"
              : "bg-white hover:bg-gray-100 border lg:border-none"
              }`}
            onClick={() => onMenuClick(index)}
          >
            <Image src={item.icon} width={20} height={20} alt={item.name} className="inline-block lg:flex" />
            <h4 className="lg:text-base text-xs flex ">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
