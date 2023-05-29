import "./Add-Link.css";
import React from "react";
import { Button } from "@mui/material";

const AddnewLink = (props) => {
  return props.trigger ? (
    <div className="popup ">
      <div className="popup-inner rounded-xl ">
        <button
          className="close-btn bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-2 py-1 "
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddnewLink;
