import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function PageInfoScholarShip({
    SelectedState,
    SelectedStream,
    GetSelectedSteamData,
    List,
    SelectedCountry,
}: any) {
    const [isTruncated, setIsTruncated] = useState(true);

    const aboutCollege =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet interdum accumsan. Nulla tincidunt sem luctus libero porttitor, nec porta lectus blandit. Nam augue leo, tristique at tempor feugiat, tincidunt ac ante. Suspendisse fermentum efficitur massa, vitae elementum neque condimentum a. Nam et eros sed nisl imperdiet vulputate. Aenean tempus, diam nec fermentum laoreet, ipsum magna pulvinar turpis, in ornare nisl augue in sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent gravida purus nunc.";

    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };

    const { attributes = {} } =
        GetSelectedSteamData && GetSelectedSteamData.length > 0
            ? GetSelectedSteamData[0]
            : {};

    // Function to slice text while preserving HTML tags
    const sliceText = (text: any, maxLength: number) => {
        let slicedText = text.slice(0, maxLength);
        const lastSpaceIndex = slicedText.lastIndexOf(" ");

        // Ensure the sliced text does not break HTML tags
        if (lastSpaceIndex !== -1) {
            slicedText = slicedText.slice(0, lastSpaceIndex);
        }

        return slicedText;
    };
    useEffect(() => {
        console.log(attributes.content_for_colleges);
    }, [attributes]);

    return (
        <>
            <div className="relative m-4 p-8 bg-primary-extra-light border border-[#426680] flex flex-col items-center rounded shadow-lg">
                <div>
                    <h1 className="text-3xl font-bold mb-3 text-center text-[#080165]">
                        Scholarships to Study Abroad
                    </h1>
                </div>

                <p className="font-md text-lg mb-3 text-primary-text">
                    {/* {
            SelectedStream && (
              <>Found {`${attributes?.college_names?.data?.length || 0}`} {SelectedStream} colleges in {SelectedState}</>
            )
          } */}
                    <>
                        Found 3495 Scholarships in India
                    </>
                </p>

                {!SelectedStream ? (
                    <>
                        {isTruncated ? (
                            <>
                                <p
                                    className={`${isTruncated ? "text-center" : "text-left"
                                        } text-primary-text text-md`}
                                >
                                    {aboutCollege.slice(0, 400)}...
                                </p>
                                <div className="flex">
                                    <button
                                        onClick={toggleTruncate}
                                        className="text-primary my-4 text-md font-semibold"
                                    >
                                        Read more
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>{aboutCollege}</p>
                                <div className="flex justify-end">
                                    <button
                                        onClick={toggleTruncate}
                                        className="text-primary ml-2 text-sm font-semibold"
                                    >
                                        Read less
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        {isTruncated ? (
                            <>
                                <div
                                    className={`${isTruncated ? "text-center" : "text-justified"
                                        } text-primary-text text-md w-full `}
                                >
                                    {/* {parse(attributes?.content_for_colleges)} */}
                                    {typeof attributes?.content_for_colleges === 'string' && attributes?.content_for_colleges.trim() !== '' && (
                                        <div
                                            className={`${isTruncated ? "text-center" : "text-justified"
                                                } text-primary-text text-md w-full `}
                                        >
                                            {parse(attributes?.content_for_colleges)}
                                        </div>
                                    )}

                                </div>

                                <div className="flex">
                                    <button
                                        onClick={toggleTruncate}
                                        className="text-primary my-4 text-md font-semibold"
                                    >
                                        Read more
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full text-justify">
                                    {parse(attributes?.content_for_colleges)}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={toggleTruncate}
                                        className="text-primary ml-2 text-sm font-semibold"
                                    >
                                        Read less
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
