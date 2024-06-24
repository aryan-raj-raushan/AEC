"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FormControl, FormLabel, Input, Option, Select } from "@mui/joy";

const GetinTouch = (props: {
  AllStreamData: any;
  getTuchData: any;
  setName: any;
  name: any;
  emailValue: any;
  setEmailValue: any;
  phone: any;
  setPhone: any;
  StreamsSelected: any;
  setStreamsSelected: any;
  handelGetTuchModalOpen: any;
}) => {
  const {
    AllStreamData,
    getTuchData,
    setName,
    name,
    emailValue,
    setEmailValue,
    phone,
    setPhone,
    StreamsSelected,
    setStreamsSelected,
    handelGetTuchModalOpen,
  } = props;

  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = () => {
    if (isFormValid) {
      handelGetTuchModalOpen("Tuch", {
        name,
        emailValue,
        phone,
        StreamsSelected,
      });
    }
  };
  

  useEffect(() => {
    setIsFormValid(
      name !== "" && emailValue !== "" && phone !== "" && StreamsSelected !== ""
    );
  }, [name, emailValue, phone, StreamsSelected]);

  return (
    <section className="bg-[#F2F6F7]">
      <motion.div
        className="max-w-screen-xl m-auto py-10 md:py-24 px-4 flex flex-col gap-6 md:gap-12 items-center text-primary-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className="text-xl lg:text-3xl font-semibold text-center">
          Get in Touch with our Expert Counsellors
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-auto md:w-full place-content-center place-items-center">
          <FormControl sx={{ mb: 2 }} className="w-full">
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl sx={{ mb: 2 }} className="w-full">
            <FormLabel>Email</FormLabel>
            <Input
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </FormControl>

          <FormControl sx={{ mb: 2 }} className="w-full">
            <FormLabel>Phone</FormLabel>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormControl>

          <FormControl sx={{ mb: 2 }} className="w-full">
            <FormLabel>Streams</FormLabel>
            <Select
              value={StreamsSelected}
              onChange={(e, newValue) => setStreamsSelected(newValue)}
            >
              {AllStreamData?.map((stream: any, index: any) => (
                <Option key={index} value={stream?.id}>
                  {stream?.attributes?.stream_name}
                </Option>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div>
            <button
              onClick={() => handelGetTuchModalOpen("Tuch")}
              className={`bg-primary text-white p-[10px] w-52 rounded-md ${
                isFormValid ? "cursor-pointer" : "cursor-default"
              }`}
              disabled={!isFormValid}
            >
              {getTuchData?.length > 0
                ? "Team will Get in Touch Soon"
                : "Get in Touch"}
            </button>
          </div>
          <div className="">
            <p className="sm:w-96 text-center text-sm text-[#020014]">
              By proceeding ahead you expressly agree to the Affinity Education
              and{" "}
              <span className="text-primary underline underline-offset-2">
                {" "}
                terms of use{" "}
              </span>
              and{" "}
              <span className="text-primary underline underline-offset-2">
                privacy policy
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GetinTouch;
