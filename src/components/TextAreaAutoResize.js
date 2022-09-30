import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleChange = (e) => {
    setTextareaHeight("auto");
    setText(e.target.value);
  };

  // useEffect() nó chạy lần đầu khi text thay đổi thì chạy vào side-Effect
  useEffect(() => {
    //side-effect
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className=" transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none focus:border-blue-400"
        placeholder="Please enter your content ..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;

// ta có 1 text area như trên nếu ta gõ nhiều thì nó xuất hiện thanh scroll khi xóa hết thì mất scroll. Tuy nhiên đề bài người ta muốn không xuất hiện scroll và khi mình gõ đến đâu thì text area sẽ cao đến đó chứ không phải xuất hiện scroll như này
