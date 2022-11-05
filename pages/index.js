import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haleema</title>
        <meta name="description" content="An e-store for Haleema" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.hero} bg-mobile-hero md:bg-desktop-hero bg-scroll bg-cover -z-10 flex flex-col-reverse justify-evenly  md:flex-row md:justify-evenly  items-center h-full`}
      >
        <div id="heroText" className={`text-pink-700 md:w-1/2 `}>
          <h1 className="text-3xl md:text-5xl font-bold">Haleemah's E-store</h1>
          <p className="text-lg font-medium my-6">
            Bringing you an affordable better life.
          </p>
          <div
            id="buttonGroup"
            className="md:w-2/5 w-3/4 flex flex-row justify-evenly"
          >
            <button className="p-1 bg-gray-700 text-white rounded-xl mx-2">
              Order Now
            </button>
            <button className="p-1 rounded-xl border-2 border-solid border-gray-700 backdrop-blur mx-2">
              Learn More
            </button>
          </div>
        </div>
        <div className={`${styles.heroSlideshow} w-2/3 md:w-1/3`}>
          <div className={`w-full h-full`}>
            <img
              src={"/ws2.jpg"}
              className={`w-auto object-contain rounded-2xl`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
