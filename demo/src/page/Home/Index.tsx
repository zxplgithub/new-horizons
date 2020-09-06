import React, { useState, useEffect } from "react";
import "./less/style.less";
import SelectComponent from "./components/SelectComponent";

interface HomeProps {}
interface optionsArrObj {
  label: string;
  value: string;
  selected: boolean;
}

const Home = (props: HomeProps) => {
  const optionsArr: Array<optionsArrObj> = [
    {
      label: "Variable1",
      value: "Variable1",
      selected: false,
    },
    {
      label: "Variable2",
      value: "Variable2",
      selected: false,
    },
    {
      label: "Variable3",
      value: "Variable3",
      selected: false,
    },
    {
      label: "Variable4",
      value: "Variable4",
      selected: false,
    },
    {
      label: "Variable5",
      value: "Variable5",
      selected: false,
    },
    {
      label: "Variable6",
      value: "Variable6",
      selected: false,
    },
    {
      label: "Variable7",
      value: "Variable7",
      selected: false,
    },
    {
      label: "Variable8",
      value: "Variable8",
      selected: false,
    },
    {
      label: "Variable9",
      value: "Variable9",
      selected: false,
    },
    {
      label: "Variable10",
      value: "Variable10",
      selected: false,
    },
  ];

  const [list, setList] = useState<Array<optionsArrObj>>([]);

  useEffect(() => {
    setList(optionsArr);
  }, []);

  return (
    <div className="homepage">
      <div className="main">
        <SelectComponent data={list} setList={setList} />
      </div>
    </div>
  );
};

export default Home;
