import React, { useState } from "react";
import "../less/select.less";

interface optionsArrObj {
  label: string;
  value: string;
  selected: boolean;
}

interface SelectComponentProps {
  data: Array<optionsArrObj>;
  setList: (value: Array<optionsArrObj>) => void;
}

const SelectComponent = (props: SelectComponentProps) => {
  const { data: arr, setList } = props;
  const [textValue, setValueText] = useState<string[] | string>("");
  const [selectData, setSelectData] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const handleData = (value: string[] | string) => {
    let list = JSON.parse(JSON.stringify(arr));
    if (typeof value === "string") {
      if (selectData.includes(value)) {
        alert(JSON.stringify("The variable already exists!"));
        return;
      }
      const obj = {
        label: value,
        value,
        selected: true,
      };
      list.unshift(obj);
      setSelectData([...selectData, value]);
    } else {
      list.forEach((item: optionsArrObj) => {
        if ((value as string[]).find((_item: string) => item.value === _item)) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
    }
    setList(list);
  };

  const handleSelect = (val: string) => () => {
    let selectDataClone = [...selectData];
    if (!selectData.includes(val)) {
      selectDataClone.push(val);
    } else {
      selectDataClone = selectDataClone.filter((item: string) => item != val);
    }
    handleData(selectDataClone);
    setSelectData(selectDataClone);
  };

  const onChange = (e: any) => {
    const value = e.target.value;
    setValueText(value);
  };

  const addVariable = () => {
    if ((textValue as string).trim()) {
      handleData(textValue as any);
    } else {
      alert(JSON.stringify("Can not be empty!"));
    }
  };

  const handleSelectBox = () => {
    setVisible(!visible);
  };

  return (
    <div className="selectContainer">
      <div className="selectBox" onClick={handleSelectBox}>
        Add variable<span className="arrowDown"></span>
      </div>
      <div
        className="selectContent"
        style={{ display: visible ? "block" : "none" }}
      >
        <div className="inputBox">
          <input
            type="text"
            placeholder="Write custom variable name"
            onChange={onChange}
          />
          <button onClick={addVariable}>确定</button>
        </div>
        <div className="selectOptions">
          <p>Suggested:</p>
          <div className="selectOptionsContent">
            {arr.map((item: optionsArrObj) => (
              <div
                className="selectOptionBox"
                key={item.value}
                onClick={handleSelect(item.value)}
              >
                <p>{item.label}</p>
                <span className={item.selected ? "tick" : ""}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="selectValueView">select values: {selectData.join(",")}</p>
    </div>
  );
};

export default SelectComponent;
