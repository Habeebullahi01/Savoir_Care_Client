import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        className={`${styles.hero} bg-mobile-hero md:bg-desktop-hero bg-scroll bg-cover flex flex-col-reverse justify-evenly  md:flex-row md:justify-evenly  items-center h-full`}
      >
        <div id="heroText" className={`text-pink-700 md:w-1/2 `}>
          <h1 className="text-3xl md:text-5xl font-bold">Haleemah's E-store</h1>
          <p className="text-lg font-medium my-6">
            Bringing you an affordable better life.
          </p>
          <div
            id="buttonGroup"
            className="w-3/4 md:w-3/5 lg:w-2/5 flex flex-row justify-evenly"
          >
            <Link href="/shop">
              <button className="p-1 bg-gray-700 text-white rounded-xl mx-2">
                Order Now
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="p-1 rounded-xl border-2 border-solid border-gray-700 backdrop-blur mx-2">
                Learn More
              </button>
            </Link>
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
      <div id="ourProducts" className="m-auto my-4 text-center">
        <h1 className={`text-2xl`}>Our Products</h1>

        <div className="flex flex-col items-center justify-evenly my-2">
          <div
            className={`my-2 md:my-8 flex flex-col md:flex-row md:even:flex-row-reverse md:text-left md:even:text-right w-5/6 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 md:w-5/12 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="md:w-4/12 mx-auto mt-1  ">
              Kitchen Utensils sourced from quality manufacturers. Makes your
              Kitchen time easier and hassle-free, for longer.
            </p>
          </div>
          <div
            className={`my-2 md:my-8 flex flex-col md:flex-row md:even:flex-row-reverse md:text-left md:even:text-right w-5/6 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 md:w-5/12 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="md:w-4/12 mx-auto mt-1  ">
              Kitchen Utensils sourced from quality manufacturers. Makes your
              Kitchen time easier and hassle-free, for longer.
            </p>
          </div>
          <div
            className={`my-2 md:my-8 flex flex-col md:flex-row md:even:flex-row-reverse md:text-left md:even:text-right w-5/6 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 md:w-5/12 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="md:w-4/12 mx-auto mt-1  ">
              Kitchen Utensils sourced from quality manufacturers. Makes your
              Kitchen time easier and hassle-free, for longer.
            </p>
          </div>
        </div>
      </div>
      <div id="pitch" className="m-auto my-4 text-center">
        <h1 className={`text-2xl`}>Why Us?</h1>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly my-2">
          <div
            className={`my-2 md:my-8 mx-2 w-5/6 md:w-1/4 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="mx-auto mt-1  ">Fast and easy delivery nationwide.</p>
          </div>
          <div
            className={`my-2 md:my-8 mx-2 w-5/6 md:w-1/4 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="mx-auto mt-1  ">Fast and easy delivery nationwide.</p>
          </div>
          <div
            className={`my-2 md:my-8 mx-2 w-5/6 md:w-1/4 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="mx-auto mt-1  ">Fast and easy delivery nationwide.</p>
          </div>
          <div
            className={`my-2 md:my-8 mx-2 w-5/6 md:w-1/4 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="mx-auto mt-1  ">Fast and easy delivery nationwide.</p>
          </div>
          <div
            className={`my-2 md:my-8 mx-2 w-5/6 md:w-1/4 items-center justify-evenly`}
          >
            <div id="i-holder" className="w-3/4 mx-auto">
              <img
                src={"/img.jpg"}
                className={`w-full object-contain rounded-lg`}
              />
            </div>
            <p className="mx-auto mt-1  ">Fast and easy delivery nationwide.</p>
          </div>
        </div>
      </div>
    </>
  );
}
