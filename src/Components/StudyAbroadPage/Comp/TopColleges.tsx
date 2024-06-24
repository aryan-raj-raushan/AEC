import CollegeCardNoImage from '@/src/Components/card/collegeCardNoImage';
import Link from 'next/link';
import React from 'react';

interface SevenProps {
  isToCollegeData?: any[];
}

const TopColleges: React.FC<SevenProps> = ({ isToCollegeData = [] }) => {
  if (!Array.isArray(isToCollegeData)) {
    return null; // or you can render some fallback UI
  }

  return (
    <section className="bg-[#FFF]">
      <div className="max-w-screen-xl px-4 mx-auto pt-2 globePadding">
        <div className="flex justify-between">
          <div className="text-3xl">
            Explore <b>Top Colleges</b>
          </div>
          <div>
            <Link
              href={"/colleges"}
              className="flex text-lg text-nowrap gap-1 md:gap-2 text-[#1268F5] items-center"
            >
              <span className="sm:text-xl text-sm">View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={25}
                width={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M17.6453 19.0736L24.2188 12.5002L17.6453 5.92676L16.5404 7.03164L21.2278 11.719H0.818556V13.2815H21.2277L16.5404 17.9688L17.6453 19.0736Z"
                  fill="#1268F5"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 my-4 gap-4 justify-center items-center">
          {isToCollegeData.map((college, index) => (
            <CollegeCardNoImage
              key={index}
              collegeData={college?.attributes}
              collegId={college.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopColleges;
