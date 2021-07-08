import React, { useState } from "react";
import { CSVReader } from "react-papaparse";
import { execute, solve, output } from "../Service/expression-util";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Header from "../components/Header";

const buttonRef = React.createRef();

const Home = (props) => {
  const [resData, setresData] = useState([]);
  const [targetNumber, setTargetNumber] = useState("");

  const handleOpenDialog = (e) => {
    if (targetNumber.length !== 0) {
      if (buttonRef.current) {
        buttonRef.current.open(e);
      }
    } else {
      alert(`First, Enter Target number.`);
    }
  };

  const handleOnFileLoad = (data) => {
    let inputArray = data[0]["data"].toString().split(",").map(Number);
    const results = execute(solve, [inputArray, parseInt(targetNumber)]);
    setresData(results);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
    alert(`File Upload Error ${err}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">
      <>
        <Header />
        {output && output.length === 0 ? (
          <div>{`Please Upload CSV file & wait for file to process`}</div>
        ) : (
          ``
        )}
      </>
      <TextInput
        className="lowercase"
        text={targetNumber}
        setText={setTargetNumber}
        placeholder="Enter Target Number"
        requiredMsg="Target Number can't be blank!!"
        required={true}
        isAutoFocus={false}
      />
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
      >
        {({ file }) => (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <Button text="Browse_file" onClick={handleOpenDialog} />
            <div
              style={{
                borderWidth: 0,
                borderStyle: "solid",
                borderColor: "#ccc",
                height: 45,
                lineHeight: 2,
                marginTop: 10,
                paddingLeft: 3,
                paddingTop: 3,
                width: "60%",
                marginRight: 5,
              }}
            >
              {file ? file.name : `: no file selected `}
            </div>
          </aside>
        )}
      </CSVReader>
     {output.length === 0 ? <div>{`- List of Equations will appear here -`}</div> : <div>{`List of Equations:`}</div>} 
      <div className="overflow-x-scroll">
        {output &&
          output.map((res, index) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={index}
            >
              <p key={index}>{res}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
