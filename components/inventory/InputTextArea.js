import React from "react";
import { TextareaAutosize } from "@mui/material";

export const InputArea = ({
  index,
  edit,
  val,
  sectionItems,
  setSectionItems,
}) => {
  return (
    <input
      disabled={edit ? false : true}
      value={val.name}
      onChange={(e) => {
        let ll = e.target.value;
        var pp = [...sectionItems];
        pp[index].name = e.target.value;
        setSectionItems(pp);
      }}
      style={{ border: "none" }}
    />
  );
};

function InputTextArea({ edit, val, handleOnChangeOfTextArea, index }) {
  return (
    <TextareaAutosize
      disabled={edit ? false : true}
      value={val.Description}
      minRows={4}
      onChange={(e) => handleOnChangeOfTextArea(e, index)}
      style={{
        border: "none",
        fontFamily: "Gill, Helvetica, sans-serif",
        padding: "15px",
        lineHeight: 1.4,
      }}
    />
  );
}

export default InputTextArea;
