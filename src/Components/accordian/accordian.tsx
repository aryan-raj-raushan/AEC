// import React, { ReactNode, useEffect, useState } from "react";
// import { FaAngleDown, FaAngleRight } from "react-icons/fa";

// interface AccordionProps {
// 	children: ReactNode;
// 	title: string;
// 	titlePrimary?: boolean;
// 	opened?: any
// }

// const Accordion: React.FC<AccordionProps> = ({
// 	children,
// 	title,
// 	titlePrimary = false,
// 	opened = false
// }) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [Open, setOpen] = useState(false);
// 	useEffect(() => {
// 		setOpen(opened);
// 		setIsOpen(opened)
// 	}, [opened]);

// 	const handleOpenAccordion = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<div className="border border-primary-text-light rounded-md">
// 			<div
// 				className={`flex justify-between items-center p-2 ${isOpen ? "border-b border-b-primary-text-light delay-700 ease-in-out" : ""
// 					}`}
// 				onClick={handleOpenAccordion}
// 			>
// 				<p
// 					className={`flex-1 ${titlePrimary
// 						? "text-primary text-[25px] font-semibold"
// 						: "text-secondary text-base"
// 						}`}
// 				>
// 					{title}
// 				</p>
// 				<div className="bg-primary-light p-1 text-primary rounded-sm delay-700 ease-in-out ">
// 					{isOpen ? <FaAngleDown /> : <FaAngleRight />}
// 				</div>
// 			</div>
// 			{isOpen && (
// 				<div className="p-5 delay-700 ease-in-out" data-testid="accordion-content">
// 					{children}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Accordion;

import React, { ReactNode, useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

interface AccordionProps {
  children: ReactNode;
  title: string;
  titlePrimary?: boolean;
  opened?: any;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  titlePrimary = false,
  opened = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (opened) {
      setIsOpen(true);
      setTimeout(() => setContentVisible(true), 100); // Delay opening content for 300ms
    }
  }, [opened]);

  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => setContentVisible(true), 100); // Delay opening content for 300ms
    } else {
      setContentVisible(false);
    }
  };

  return (
    <div className="border border-primary-text-light rounded-md">
      <div
        className={`flex justify-between items-center p-2 ${
          isOpen ? "border-b border-b-primary-text-light" : ""
        }`}
        onClick={handleOpenAccordion}
      >
        <p
          className={`flex-1 ${
            titlePrimary
              ? "text-primary text-lg md:text-2xl font-semibold"
              : "text-secondary text-base"
          }`}
        >
          {title}
        </p>
        <div
          className={`bg-primary-light p-1 text-primary rounded-sm transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <FaAngleRight />
        </div>
      </div>
      {isOpen && (
        <div
          className={`p-2 md:p-3 ${
            contentVisible ? "max-h-full opacity-100" : "max-h-0 opacity-0 "
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
