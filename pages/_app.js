import "../styles/globals.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [display, setDisplay] = useState("mobile");

  useEffect(() => {
    // Changes the 'display' state based on the width of the window when resizing
    const changeView = () => {
      return window.innerWidth > 767
        ? setDisplay("desktop")
        : setDisplay("mobile");
    };
    changeView();

    window.addEventListener("resize", () => {
      changeView();
    });
  }, [display]);

  return (
    <>
      <Nav view={display} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
