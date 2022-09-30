import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const getPhoto = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    // handle success
    console.log("response:", response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photo = () => {
  // Làm sao đưa cái images ra bên ngoài được cho nên chúng ta sẽ sử dụng state
  const [photo, setPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  // sử dụng useRef() để handle cái việc không bị dependency cảnh báo dòng 36
  const handleLoadMorePhoto = useRef({});
  handleLoadMorePhoto.current = async () => {
    console.log("nexPage", nextPage);
    const images = await getPhoto(nextPage);
    const newPhotos = [...photo, ...images];
    console.log("new photo", newPhotos);
    setPhoto(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMorePhoto.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {/* Nếu photo có độ dài lớn hơn 0 thì mới map nó */}
        {photo.length > 0 &&
          photo.map((item, index) => (
            <div className="p-3 bg-white shadow-md rounded-lg" key={item.id}>
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full object-cover rounded-lg h-[200px]"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          className="inline-block px-8 py-4 bg-purple-600 text-white"
          onClick={handleLoadMorePhoto.current}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
export default Photo;
