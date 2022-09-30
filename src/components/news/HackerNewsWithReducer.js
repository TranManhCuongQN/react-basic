import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import lodash from "lodash";
import { useReducer } from "react";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      const newState = JSON.parse(JSON.stringify(state));
      // return { newState };
      // Cái ta truyền vào là 1 cái action mà action là 1 object
      // ...state lấy tất cả các giá trị ban đầu
      return { ...state, hits: action.payload };
    }

    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }

    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }

    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    case "SET_URL": {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const HackerNewWithReducer = () => {
  const handleFetchData = useRef({});
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  handleFetchData.current = async () => {
    // setLoading(true);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const response = await axios.get(state.url);
      console.log("Response:", response);
      console.log("Data:", response.data.hits);

      // setHits(response.data?.hits || []);
      // Cái ta truyền vào là 1 cái action mà action là 1 object
      dispatch({
        type: "SET_DATA",
        // payload này để cập nhật cho cái hits nằm trong initialState
        payload: response.data?.hits || [],
      });

      // setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      // setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      // setErrorMessage(`The error happend ${error}`);
      dispatch({
        type: "SET_ERROR",
        payload: `The error happend ${error}`,
      });
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 mb-5">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-mdtransition-all   focus:border-blue-400"
          placeholder="Typing your keyword ..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        />
        <button
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full  border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}

      {/* Nếu loading chạy xong rồi và có errorMessage */}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}

      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewWithReducer;
