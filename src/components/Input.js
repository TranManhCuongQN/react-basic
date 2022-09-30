import React, { useEffect } from "react";
import { useRef } from "react";

const Input = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    // <div class="input-div"></div>
    console.log(divRef.current);

    // <div class="input-div" style="background-color:red"></div>
    // if (divRef.current) divRef.current.style.backgroundColor = "red";

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Lưu ý: Khi component chúng ta render ra bên ngoài thì cái Ref của ta là undifined khi component chúng ta Mounted xong thì mới truy xuất đc còn trong quá trình nó mounted đó thì nó sẽ là undifined. Cho nên nên viết cái divRef.current này bên trong useEffect() hoặc bên trong 1 function nào đó bạn muốn xử lý
  // undifined
  console.log(divRef.current);

  return (
    <div className="input-div" ref={divRef}>
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border-gray-500 border-4 focus:border-blue-400"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
