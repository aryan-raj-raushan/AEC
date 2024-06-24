import Link from "next/link";

type Props = {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  bgcolor?: string;
  color?: string;
  outlineColor?: string;
  rounded?: boolean;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  align?: string;
  borderColor?: string;
  big?: boolean;
  last?: boolean;
};
export default function Tag({
  href,
  text,
  icon,
  bgcolor = "bg-extra-light-text",
  color = "#565959",
  rounded = false,
  fontSize = "text-base",
  fontWeight = "font-normal",
  width = "max-w-max",
  borderColor,
  big = false,
  last = false,
}: Props) {
  return (
    <>
      {/* <Link href={`${href}`}>
        <>
          
        </>
      </Link> */}
      <div className={`text-base ${color}`}>
        {/* {icon ? <div className="mr-2">{icon}</div> : <></>} */}
        <div className={`flex-1  text-sm`}>{text}</div>
      </div>
      {last ? <></> : <div className="border-r border-r-[#565959] h-4"></div>}
    </>
  );
}
