import { useRouter } from "next/router";
import useBlog from "@/src/Hooks/useBlog";

export default function NewsNavbar() {
  const { NewCategoryData } = useBlog();
  const router = useRouter();

  const handleTab = (value: string) => {
    router.push(
      {
        pathname: `/news/latest/category/${value}`,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section>
      <div className="px-2 mt-24 md:mt-24">
        <div className="flex items-center justify-center">
          <div className="flex items-center lg:justify-center border rounded-md border-primary-text-light lg:w-[814px] lg:h-[66px] py-4 gap-[16px] md:gap-[32px] my-10 overflow-x-auto px-4 hide-scrollbar sm:text-lg text-xs">
            {NewCategoryData &&
              NewCategoryData.map((tab) => (
                <div
                  key={tab.attributes.category_name}
                  className={`cursor-pointer ${
                    router.pathname ===
                    `/news/latest/category/${tab.attributes.category_name}`
                      ? "bg-blue-500 text-white font-semibold"
                      : "bg-white text-black"
                  } rounded-md w-max whitespace-nowrap lg:text-[16px] font-medium`}
                  onClick={() => handleTab(tab.attributes.category_name)}
                >
                  {tab.attributes.category_name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
