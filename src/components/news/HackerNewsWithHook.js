import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import lodash from "lodash";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";

//https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  // Khi gõ vào input thì query nó thay đổi khi ta nhấn vào fetching thì lúc này query bằng query mới đó thì khi query thay đổi thì component chúng ta mới re render lại. Cho nên khi ta viết query và setQuery bên hook useHackerNewsAPI thì nó sẽ không bị re render cho nên viết query và setQuery bên HackerNewsWithHook

  const [query, setQuery] = useState("");
  const { setURL, loading, errorMessage, data } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );
  console.log("Data: ", data);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 mb-5">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-mdtransition-all   focus:border-blue-400"
          placeholder="Typing your keyword ..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          onClick={() =>
            setURL(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full  border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}

      {/* Nếu loading chạy xong rồi và có errorMessage */}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
            console.log(item.title);
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
