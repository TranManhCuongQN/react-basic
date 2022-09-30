import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    // khi rời khỏi component thì cần phải clearUp nó
    return () => {
      dom.removeEventListener("mouseover", handleMouseOver);
      dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return {
    hovered: hovered,
    nodeRef: nodeRef,
  };
}
