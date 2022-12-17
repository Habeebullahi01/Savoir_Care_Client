import "../styles/globals.css";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/footer";
import { useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

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
      <Auth0Provider
        domain="dev-qdwlfq2p.us.auth0.com"
        clientId="pV7sHiJXTfgzFT17HKkRiHhm8UsVcBYR"
        redirectUri={"http://localhost:3000"}
      >
        <Nav view={display} />
        <Component {...pageProps} />
        <Footer />
      </Auth0Provider>
    </>
  );
}

export default MyApp;
