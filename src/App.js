import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import Card2 from "./components/card/Card2";
import { ThemeProvider } from "styled-components";
import Photo from "./components/photo/Photo";
import Header from "./components/header/Header";
import HackerNews from "./components/news/HackerNews";
import HackerNewWithReducer from "./components/news/HackerNewsWithReducer";
import TimerRef from "./components/timer/TimerRef";
import Input from "./components/Input";
import TextAreaAutoResize from "./components/TextAreaAutoResize";
import DropDown from "./components/DropDown";
import Blog from "./components/Blog";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import Menu from "./components/Menu";
import { useState } from "react";
import useClickOutSide from "./hooks/useClickOutSide";

const theme = {
  colors: {
    blue: "#2979ff",
  },
};

function App() {
  const name = "Evondev";
  // const [show, setShow] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    //* YoutubeList
    // <div>
    //   <YoutubeList>
    //     {/* children: có thể là html, component, text, variable */}
    //     <h2>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
    //       amet et iusto impedit quam maiores laudantium molestiae ratione odit
    //       consequuntur, autem voluptatem error, exercitationem veritatis ut?
    //       Ullam atque id accusantium.
    //     </h2>
    //     {name}
    //   </YoutubeList>
    // </div>

    //* Toggle
    // <div>
    //   <Toggle />
    // </div>

    //* Counter
    // <div>
    //   <Counter />
    // </div>

    //* TicTacToe
    // <div>
    //   <Game />
    // </div>

    //* Button (CSS module)
    // <div>
    //   {/* <Button>Primary</Button>
    //   <Button className="button--secondary">Secondary</Button> */}
    //   <Button>Primary</Button>
    //   <Button secondary>Secondary</Button>
    // </div>

    //* Card List (styled-component)
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   <CardList>
    //     {/*C1: sử dụng styled-component theo cách khai báo từng biến 1 */}
    //     {/* <Card secondary={true} />
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Card /> */}

    //     {/*C2 */}
    //     <Card2 secondary={true} />
    //   </CardList>
    // </ThemeProvider>

    //* Photo (useEffect)
    // <div>
    //   <Photo />
    // </div>

    //* Header (useEffect)
    // <div>
    //   <Header />
    // </div>

    //* HackerNews (useEffect (có sử lý vấn đề unmounted))
    // <div>
    //   {/* <HackerNews/> */}
    //   <HackerNewWithReducer />
    // </div>

    //* Timer (useRef xử lý trong setInterval())
    // <div>
    //   <TimerRef />
    // </div>

    //* Input (useRef để truy cập vào DOM)
    // <div>
    //   <Input />
    // </div>

    //* TextAreaAutoResize (useRef)
    // <div>
    //   <TextAreaAutoResize />
    // </div>

    //* DropDown (useRef)
    // <div className="p-5">
    //   <DropDown />
    // </div>

    //* Blog (custom hook useLinkNewTab)
    // <div>
    //   <Blog />
    // </div>

    //* HackerNewsWithHook (custom hook)
    // <div>
    //   <HackerNewsWithHook />
    // </div>

    //* Dropdown (custom hook)
    // <div>
    //   <DropDown />
    // </div>

    //* SidebarMenu
    <div>
      <button
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
        onClick={() => setShow(true)}
      >
        Show Menu
      </button>
      <Menu show={show} ref={nodeRef} />
    </div>
  );
}
export default App;
