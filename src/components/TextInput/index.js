import React from "react";

const TextInput = ({
  text,
  setText,
  placeholder = "",
  isAutoFocus = true,
  required = false,
  upperCase = false,
  requiredMsg = "Required",
  check = false,
}) => {
  return (
    <div className="my-2 mx-4">
      <input
        className={
          "bg-green-800  text-secoundry  rounded-lg w-64 h-8 mb-1 text-left pl-4"
        }
        autoFocus={isAutoFocus}
        type="number"
        placeholder={placeholder}
        value={text}
        onChange={({ target: { value } }) => {
          setText(value.toLowerCase());
        }}
        required={required}
      />
      {check ? (
        required && !text ? (
          <div className="text-primary mx-8"> {requiredMsg} </div>
        ) : null
      ) : null}
    </div>
  );
};
export default TextInput;
