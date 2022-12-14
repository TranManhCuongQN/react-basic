import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const DropDown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        Selected
      </div>
      {show && (
        <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">NextJS</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">VueJS</div>
          <div className="p-5 cursor-pointer">Angular</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
