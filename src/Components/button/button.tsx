import Link from "next/link";

type Props = {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  filled?: Boolean;
  filledColor?: string;
  outline?: boolean;
  textColor?: string;
  outlineColor?: string;
  rounded?: boolean;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  align?: string;
  showHover?: boolean;
  paddingX?: string;
  paddingY?: string;
  gap?: string;
  filledBorderColor?: string;
  filledBorderWidth?: string;
  onClick?: () => void;
  hover?: string;
};
export default function Button({
  href,
  text,
  icon,
  filled,
  outline = false,
  filledColor = "bg-primary",
  textColor = "text-white",
  outlineColor = "border-primary",
  rounded = false,
  fontSize = "text-sm",
  fontWeight = "font-normal",
  width = "min-w-max",
  align = "text-left",
  showHover = true,
  paddingX = "px-2",
  paddingY = "py-4",
  gap = "",
  filledBorderWidth = "border-0",
  filledBorderColor = "border-transparent",
  hover = "hover: text-white",
  onClick,
}: Props) {
  let ButtonContent = (
    <>
      {outline ? (
        <>
          <div
            className={`button flex ${width} items-center ${gap} ${paddingX} ${paddingY} border ${fontSize} ${fontWeight} ${outlineColor} ${showHover ? "hover:border-primary hover:text-primary" : ""
              }  ${rounded ? "rounded-full" : "rounded-md"}`}
          >
            {icon ? <div className="">{icon}</div> : <></>}
            <div
              className={`flex-1 text-nowrap ${align} ${textColor} ${showHover
                  ? ` ${hover} ${textColor} ease-in-out`
                  : `${textColor}`
                }`}
            >
              {text}
            </div>
          </div>
        </>
      ) : (
        <>{text && (
          <div
            className={`button ${filledBorderColor} ${filledBorderWidth} flex ${width} ${gap} items-center ${paddingX} ${paddingY}  ${fontSize} ${fontWeight} ${filledColor}  ${textColor} ${rounded ? "rounded-full" : "rounded-md bg-[#428DC1]"
              }`}
          >
            {icon ? <div className="mr-2">{icon}</div> : <></>}
            <div className={`flex-1 ease-in-out text-nowrap w-full ${align}`}>
              {text}
            </div>
          </div>

        )}

        </>
      )}
    </>
  );
  return (
    <>
      {href ? (
        <Link href={`${href}`}>{ButtonContent}</Link>
      ) : (
        <button onClick={onClick} className="w-fit">
          {ButtonContent}
        </button>
      )}
    </>
  );
}
