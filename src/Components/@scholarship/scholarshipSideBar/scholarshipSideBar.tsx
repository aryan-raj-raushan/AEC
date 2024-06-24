import Image from "next/image";

import TabComponent from "@/src/Components/tab/tab";

export default function ScholarshipSideBarComponent() {
  const ImageVideoTab = [
    {
      title: "Images",
      content: `<div className="p-4">
        <div className="grid grid-cols-2 gap-4 py-4 mx-auto">
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        </div>
        <div className="my-4">
          <Link href={"/"}>
            <div className="p-[10px] bg-primary w-full text-center text-white rounded-md">
              View All
            </div>
          </Link>
        </div>
      </div>`,
    },
    {
      title: "Videos",
      content: `<div className="p-4">
        <div className="grid grid-cols-2 gap-4 py-4 mx-auto">
        
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width=120px height=80px alt="" />
        </div>
        <div className="my-4">
          <Link href={"/"}>
            <div className="p-[10px] bg-primary w-full text-center text-white rounded-md">
              View All
            </div>
          </Link>
        </div>
      </div>`,
    },
    // Add more tabs as needed
  ];
  let FeatureNews = () => {
    return (
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div
              key={item}
              className={`flex gap-2 ${
                index < 4 ? "border-b border-b-primary-text-light" : ""
              } pb-2`}
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={80}
                height={80}
                alt=""
                className="rounded-md"
              />
              <div className="text-sm leading-5">
                CLAT 2024 Registration Window Extended to Nov 10 at consortium
                ofnlus...
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const NewsTab = [
    {
      title: "Trending Articles",
      content: <FeatureNews />,
    },
    {
      title: "Recent Articles",
      content: <FeatureNews />,
    },
  ];
  return (
    <>
      <div className="w-[300px]">
        <TabComponent tabs={ImageVideoTab} classProp={""} />
        <TabComponent tabs={NewsTab} classProp={""} />
        <TabComponent tabs={NewsTab} classProp={"sticky top-40"} />
      </div>
    </>
  );
}
