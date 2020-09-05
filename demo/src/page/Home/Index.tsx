import React from "react";
import "./less/style.less";

interface HomeProps {}
interface optionsArrObj {
  label: string;
  value: string;
}

const Home = (props: HomeProps) => {
  const optionsArr: Array<optionsArrObj> = [
    {
      label: "Variable1",
      value: "Variable1",
    },
    {
      label: "Variable2",
      value: "Variable2",
    },
    {
      label: "Variable3",
      value: "Variable3",
    },
    {
      label: "Variable4",
      value: "Variable4",
    },
    {
      label: "Variable5",
      value: "Variable5",
    },
    {
      label: "Variable6",
      value: "Variable6",
    },
    {
      label: "Variable7",
      value: "Variable7",
    },
    {
      label: "Variable8",
      value: "Variable8",
    },
    {
      label: "Variable9",
      value: "Variable9",
    },
    {
      label: "Variable10",
      value: "Variable10",
    },
  ];

  return (
    <div className="homepage">
      <div className="main">
        <div className="selectBox">Add variable<span className="arrowDown"></span></div>
        <div className="selectContent">
          <input type="text" placeholder="Write custom variable name" />
          <div className="selectOptions">
            <p>Suggested:</p>
            <div className="selectOptionsContent">
              {optionsArr.map((item: optionsArrObj) => (
                <div className="selectOptionBox" key={item.value}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
