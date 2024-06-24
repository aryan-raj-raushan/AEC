import { Slider } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import Image from "next/image";
import { Profile } from "@/src/Asset";
import Link from "next/link";

const Card = ({ college }: any) => {
  const valueText = (value: number) => {
    switch (value) {
      case 0:
        return "Ordered";
      case 1:
        return "Shipped";
      case 2:
        return "Delivered";
      default:
        return "";
    }
  };

  const styles = {
    root: {
      color: "blue",
      height: 4,
    },
    thumb: {
      display: "none",
    },
    track: {
      height: 4,
    },
  };

  const paymentStatus = [
    {
      value: 0,
      label: "Student Details",
    },
    {
      value: 1,
      label: "Qualification",
    },
    {
      value: 2,
      label: "Payment Status",
    },
    {
      value: 3,
      label: "Done",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [paymentValue, setPaymentValue] = useState(2); // Initial payment value

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePaymentChange = (event: any, newValue: number | number[]) => {
    setPaymentValue(newValue as number);
  };

  const formatDate = (dateString: any) => {
    if (!dateString) return "";
    return new Date(dateString).toISOString().split("T")[0];
  };

  const city =
    college?.college?.data?.attributes?.city?.data?.attributes?.city_name;

  const state =
    college?.college?.data?.attributes?.state?.data?.attributes?.state_name;

  return (
    <>
      <div className="shadow-lg p-2 rounded-lg border flex flex-col my-2 mx-2 bg-white">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between px-2">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-start justify-start">
              <Image
                src={
                  college?.college?.data?.attributes?.banner?.data?.[0]
                    ?.attributes?.url
                }
                width={isMobile ? 20 : 50}
                height={isMobile ? 20 : 50}
                alt="profile"
                className="object-fill h-20 min-w-20 max-w-20 rounded-lg"
              />
              {/* <span className="text-sm sm:text-normal">College</span> */}
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <Link
                href={`colleges/${college?.college?.data?.attributes?.college_url}`}
                className="sm:text-3xl text-xl"
              >
                {college?.college?.data?.attributes?.college_name}
              </Link>
              <span className="text-normal font-light">{`${city}, ${state}`}</span>
            </div>
          </div>

          <div className="flex md:flex-col flex-row items-center md:gap-2 gap-6 md:items-end md:mt-2">
            <span className="sm:text-3xl text-base md:order-1 order-2">
              {formatDate(college?.college?.data?.attributes?.createdAt)}
            </span>

            <span className="text-sm font-light md:order-2">Applied Date</span>
            <button className="bg-primary md:block hidden text-white rounded text-sm px-2 py-1 md:order-3">
              Open Application
            </button>
          </div>
        </div>

        <hr className="w-full mt-5 md:block hidden" />

        <div className="flex md:flex-col flex-row md:justify-start justify-between gap-2 my-2">
          <div className="flex flex-row items-center gap-2 sm:text-base text-[12px]">
            <span>Status:</span>
            <MdDone className="bg-green-600 text-white rounded-full p-[2px]" />
            <h1 className="sm:text-base text-[12px]">
              {college?.current_step?.data?.attributes?.step_name}
            </h1>
            {/* <div className="ml-5 mt-2 w-[70%] relative md:block hidden">
            <Slider
              aria-label="Payment status"
              value={paymentValue}
              getAriaValueText={valueText}
              step={1}
              marks={paymentStatus}
              valueLabelDisplay="off"
              min={0}
              max={3}
              sx={styles}
              color="primary"
              onChange={handlePaymentChange}
            />
            <p className="absolute top-1 -right-3 text-black bg-white border rounded-full px-3 py-1 z-30">
              &gt;
            </p>
          </div> */}
          </div>
          {/* <div className="flex flex-row items-center gap-3 sm:text-base text-[12px]">
          <span>Offer Letter:</span>
          <span className="text-green-600 font-semibold">Received</span>
        </div> */}
        </div>
        <div className="md:hidden flex justify-end">
          <button className="bg-primary text-white rounded text-sm px-2 py-1">
            Open Application
          </button>
        </div>
        <hr className="w-full mt-5 block md:hidden" />
        <div className="md:hidden grid grid-cols-2 gap-6 mt-4">
          <div className="text-xs flex flex-col justify-start">
            <input type="range" />
            <label htmlFor="">Personal Student Details</label>
          </div>
          <div className="text-xs flex flex-col justify-start">
            <input type="range" />
            <label htmlFor="">Academic Qualification Details</label>
          </div>
          <div className="text-xs flex flex-col justify-start">
            <input type="range" />
            <label htmlFor="">Student Details</label>
          </div>
          <div className="text-xs flex flex-col justify-start">
            <input type="range" />
            <label htmlFor="">Payment Details</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
