import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    // muốn tất cả thẻ a nằm bên trong class entry-content sẽ có target là _blank
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
        perferendis, autem necessitatibus illo eaque quasi reprehenderit
        provident aliquam aspernatur unde possimus sapiente, eligendi numquam
        non quas dolorem quos quo iure.
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
        perferendis, autem necessitatibus illo eaque quasi reprehenderit
        provident aliquam aspernatur unde possimus sapiente, eligendi numquam
        non quas dolorem quos quo iure.
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
        perferendis, autem necessitatibus illo eaque quasi reprehenderit
        provident aliquam aspernatur unde possimus sapiente, eligendi numquam
        non quas dolorem quos quo iure.
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
