import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setURL] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // unmounted component ( khi nó unmounted thì nó sẽ chạy vào clearUp)
      isMounted.current = false;
    };
  }, []);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log("Response:", response);
      console.log("Data:", response.data.hits);
      setTimeout(() => {
        // Nếu isMounted.current là true thì nó chạy vào đây trong thời gian là 3s. Trong thời gian 1s mà mình đã bấm qua component khác rồi thì nó sẽ chạy vào chỗ clearUp ở trên thì lúc này mình gán lại isMounted.current bằng false thì nó không chạy vào đoạn này nữa.
        if (isMounted.current) {
          // Nếu response.data có thì ta sẽ lấy response.data.hits
          setHits(response.data?.hits || []);

          // Sau khi lấy xong hết dữ liệu thì setLoading = false
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
  };

  // Khi ta thêm state query ở ở handleFetchData() vào thì chỗ [dependencies] bị gạch chân bởi vì cái function  handleFetchData() bị phụ thuộc vào cái state bên ngoài. Khi chúng ta bị phụ thuộc bởi state bên ngoài nó sẽ ảnh hưởng đến function này và nó có sự thay đổi. Chúng ta có thể sử dụng useRef() để handle việc đó
  // Khi query thay đổi thì nó gọi handleFetchData
  // useEffect(() => {
  //   handleFetchData.current();
  // }, [query]);

  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 1000);

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

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
          hits.length > 0 &&
          hits.map((item, index) => {
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

export default HackerNews;
