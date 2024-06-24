export default function ColoredTag({
  text,
  bgColor = "bg-primary-light",
  textColor = "text-primary-text",
  fontSize = "Text-xs",
  paddingX = "px-[10px]",
  paddingY = "py-[5px]",
  fontWeight = "text-normal",
  rounded = "rounded-full",
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingX?: string;
  paddingY?: string;
  rounded?: string;
}) {
  return (
    <>
        <span
        className={`${rounded} ${textColor} ${fontSize} ${paddingX} ${paddingY} ${fontWeight} ${bgColor} ${textColor}`}
      >
        {text}
      </span>
    </>
  );
}
