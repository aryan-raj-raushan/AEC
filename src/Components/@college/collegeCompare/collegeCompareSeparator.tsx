export default function CollegeCompareSeparator({ big }: { big?: boolean }) {
  return (
    <div className="flex flex-col relative mx-4">
      <div className=" border-dashed border-r border-t-4 flex-1 bg-primary-text"></div>
      <div
        className={`absolute bg-primary text-white  rounded-full top-[45%] -translate-x-1/2 ${
          big ? "text-base p-[10px]" : "text-sm p-[6px]"
        }`}
      >
        VS
      </div>
    </div>
  );
}
