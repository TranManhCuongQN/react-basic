import React from "react";
import { forwardRef } from "react";

const Menu = forwardRef((props, ref) => {
  // Nhưng ở đây có vấn đề khi ta sử dụng ref nó không phải là props. Props là những cái ta truyền vào còn ref là những cái đặc biệt cho nên ref nó hoạt động khác prop cho nên ta không thể truyền vào ref={props.ref} được. Cho nên để giải quyết vấn đề này ta sử dụng forwardRef
  return (
    <div
      className={`w-[300px] bg-gray-300 shadow-md fixed top-0 left-0 bottom-0 z-10 transition-all ${
        props.show ? "" : "-translate-x-full"
      }`}
      ref={ref}
    ></div>
  );
});

export default Menu;
