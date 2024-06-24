import React from "react";

function CountryOption({ country, handleSelect }: any) {
  return (
    <div
      className="px-2 py-1 cursor-pointer hover:bg-gray-200"
      onClick={() => handleSelect(country.attributes.country_name)}
    >
      {country.attributes.country_name}
    </div>
  );
}

export default CountryOption;
