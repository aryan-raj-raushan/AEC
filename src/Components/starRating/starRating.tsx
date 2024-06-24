import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { StarFilledIcon, StarOutlineIcon, StarPartialIcon } from "@/src/Asset";

const StarRating = ({
  rating = 0,
  totalStars = 5,
}: {
  rating: number;
  totalStars?: number;
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const filled = i <= Math.floor(rating); // Full stars for integer part
      const partial = i === Math.ceil(rating); // Partial star for decimal part
      stars.push(
        <span key={i} className={`text-sm cursor-default`}>
          {filled ? (
            <Image src={StarFilledIcon} alt="" />
          ) : partial ? (
            <Image src={StarPartialIcon} alt="" />
          ) : (
            <Image src={StarOutlineIcon} alt="" />
          )}
        </span>
      );
    }
    return stars;
  };

  return <div className="flex text-sm w-16">{renderStars()}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
};

export default StarRating;
