import React from "react";

const BrowseStream = ({
  searchQuery,
  handleSearchInputChange,
  StreamTiles,
  getTuchData,
  getTouch,
  handelGetTuchModalOpen,
  setSelectedHeading,
}: any) => {
  return (
    <>
      <section className="bg-primary-extra-light text-primary-text py-12 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="md:flex justify-between items-center gap-10">
            <h3 className="md:text-4xl text-2xl">
              Browse by <b>Stream</b>
            </h3>
            <div className="flex-1 flex gap-4">
              <input
                className="rounded-md border-[0.5px] border-primary-extra-light-text w-full bg-white p-2 shadow"
                placeholder="What Category are you looking for?"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <div>
                <button className="bg-primary text-white p-[10px] w-24 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 my-4 gap-4 justify-center items-center">
            {StreamTiles}
          </div>

          <div className="flex space-x-4 items-center p-2 mb-2 text-sm text-white bg-primary">
            <div className="flex-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M6.85645 10H4.85645V17H6.85645V10ZM12.8564 10H10.8564V17H12.8564V10ZM21.3564 19H2.35645V21H21.3564V19ZM18.8564 10H16.8564V17H18.8564V10ZM11.8564 3.26L17.0664 6H6.64645L11.8564 3.26ZM11.8564 1L2.35645 6V8H21.3564V6L11.8564 1Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="grow">
              <span className="font-medium">
                {" "}
                Find out which program aligns with your individual personality!
              </span>
            </div>
            <div className="flex-none">
              <button
                onClick={() => {
                  handelGetTuchModalOpen("Test");
                  setSelectedHeading("Take a free test");
                }}
                className="text-black bg-white px-3 py-1 font-medium underline"
                disabled={getTuchData?.length > 0 || getTouch}
              >
                {getTuchData?.length > 0 || getTouch
                  ? "Your Detail Already Submited"
                  : "  Take a free test "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseStream;
