"use client";
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosArrowUp } from 'react-icons/io';

const Assessment = () => {

  const [expend, setExpend] = useState(false);
  return (
    <div>
         <div className="mt-10 mb-10 max-w-screen-xl mx-auto px-8 md:px-4 py-6 md:py-3 flex flex-col gap-14 md:gap-3 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-3 relative">
          <h2 className="text-[40px] leading-tight">
            What is{" "}
            <span className="font-bold">
              Affinity Education Career Assessment?
            </span>
          </h2>
          <p>
            Introducing our Affinity Education Career Assessment, meticulously
            crafted to unveil insightful revelations about your personality
            traits and capabilities. This comprehensive evaluation delves into
            various dimensions of your cognitive, emotional, and behavioral
            attributes, empowering you to attain profound insights into your
            self-awareness and interpersonal dynamics.
          </p>
          <p>
            Through the Affinity Education Career Assessment, you'll unearth
            your inherent strengths and areas for development, empowering you to
            navigate career choices, interpersonal relationships, and personal
            evolution with clarity. Whether you seek to refine your
            communication prowess, bolster leadership acumen, or deepen
            self-awareness, our assessment equips you with the discernment
            needed for holistic growth.
          </p>
          {expend && (
            <p>
              Through the Affinity Education Career Assessment, you'll unearth
              your inherent strengths and areas for development, empowering you
              to navigate career choices, interpersonal relationships, and
              personal evolution with clarity. Whether you seek to refine your
              communication prowess, bolster leadership acumen, or deepen
              self-awareness, our assessment equips you with the discernment
              needed for holistic growth.
            </p>
          )}
          <div
            onClick={() => setExpend(!expend)}
            className="absolute -bottom-8 z-10 text-blue-700 border-none flex gap-1 items-center text-lg cursor-pointer"
          >
            <span>Read {expend ? "Less" : "More"}</span>{" "}
            {expend ? <IoIosArrowUp /> : <FaAngleDown />}
          </div>
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3SsK-cxlj_w?si=QnPfCSuenc0yAGhT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[300px] sm:w-[450px] md:w-[560px] p-2"
        ></iframe>
      </div>
    </div>
  )
}

export default Assessment