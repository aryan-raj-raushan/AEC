import React from "react";

const Input = ({
  label,
  labelColor,
  labelSize = "text-sm",
  textSize = "text-base",
  placeholder,
  value,
  onChange = () => {},
}: {
  label?: string;
  labelColor?: string;
  labelSize?: string;
  placeholder?: string;
  textSize?: string;
  value?: string;
  onChange?: Function;
}) => {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <label className={`block ${labelSize} font-semibold ${labelColor}`}>
        {label}
      </label>
      <input
        type="text"
        className={`mt-1 p-2 border
        border-primary-text-light 
        rounded-md 
        w-full 
        focus:outline-none 
        focus:ring 
        focus:border-blue-500 ${textSize}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
