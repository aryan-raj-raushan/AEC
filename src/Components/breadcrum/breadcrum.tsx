import React from "react";

export default function Breadcrumb({
  items,
  textColor = "text-white",
}: {
  items: any;
  textColor?: string;
}) {
  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex gap-4">
        {items.map((item: any, index: number) => (
          <li key={index} className="flex items-center gap-4">
            <a
              href={item.url}
              className={`text-xs md:block hidden font-medium ${textColor} ${
                index < items.length - 1 ? "opacity-100" : "opacity-70"
              }`}
            >
              {item.label}
            </a>
            <a
              href={item.url}
              className={`text-xs md:hidden block font-medium ${textColor} ${
                index < items.length - 1 ? "opacity-100" : "opacity-70"
              }`}
            >
              {item?.label?.length > 30
                ? `${item.label.substring(0, 20)}...`
                : item.label}
            </a>

            {index < items.length - 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
              >
                <path
                  d="M5.11834 5L0.834227 1.91828C0.745174 1.85512 0.661659 1.77116 0.599619 1.66463C0.536116 1.55559 0.498429 1.42795 0.50005 1.2914C0.501669 1.15496 0.542304 1.02864 0.607625 0.921597C0.672066 0.815997 0.757591 0.733374 0.848167 0.671684C0.938853 0.609919 1.03803 0.566626 1.13762 0.53908M5.11834 5L1.13762 0.53908M5.11834 5L0.834221 8.08172C0.745171 8.14488 0.661657 8.22884 0.599619 8.33537C0.536117 8.44441 0.498429 8.57205 0.50005 8.7086C0.501669 8.84504 0.542304 8.97136 0.607624 9.0784C0.672065 9.184 0.75759 9.26663 0.848168 9.32832C0.938853 9.39008 1.03803 9.43337 1.13762 9.46092C1.23749 9.48855 1.34099 9.50126 1.44316 9.4999C1.54532 9.49854 1.64861 9.48307 1.74796 9.45248C1.8461 9.42226 1.94365 9.37624 2.03221 9.31161L7.17066 5.61496L7.17068 5.61495C7.34569 5.48904 7.5 5.27609 7.5 5C7.5 4.72391 7.34569 4.51096 7.17068 4.38505L7.17066 4.38504L2.03216 0.68835C1.94362 0.623744 1.84608 0.577732 1.74796 0.54752C1.64861 0.51693 1.54532 0.50146 1.44316 0.500099C1.34098 0.498737 1.23749 0.511454 1.13762 0.53908M5.11834 5L1.13762 0.53908"
                  fill="white"
                  fill-opacity="0.5"
                  stroke="white"
                />
              </svg>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
