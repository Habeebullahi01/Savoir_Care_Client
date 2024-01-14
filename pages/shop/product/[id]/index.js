import { useRouter } from "next/router";
import { AddToCart } from "../../../../components/button";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
// import { AuthContext } from "../../../../components/authContext";
import { useContext, useEffect, useState } from "react";
import Login from "../../../../components/Login";
import { parseCookies } from "../../../../helpers";

const ProductDisplay = ({ data }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-evenly my-4`}
    >
      <div
        className={`w-[80%] md:w-[40%] h-[30em] py-4 rounded-xl border border-pink-500 relative`}
      >
        <Image
          src={data.imageURL ? data.imageURL : "/ws2.jpg"}
          className={`w-full h-full object-contain`}
          layout="fill"
          alt={data.name ? data.name : "Product"}
        />
      </div>
      {/* The image should be a slideshow */}
      <div className={`w-[90%] md:w-[40%]`}>
        <p className={`text-2xl font-semibold my-4`}>
          {data.name ? data.name : "Product Name"}
        </p>
        <p className={`my-2`}>
          {data.description
            ? data.description
            : `This is the description of the product. It may be long, as I expect
            it to give detailed information about he product like the size and
            variant. Apparently, this is where the product is 'sold' to the
            visitor. It should be in markdown format to allow more flexibilty on
            the administrators' side.`}
        </p>
        <div id="tags">
          {data.tags ? (
            data.tags.length > 0 ? (
              data.tags.map((tag) => {
                return (
                  <span
                    className={`bg-amber-500 font-semibold m-4 px-2 rounded text-lg`}
                    key={tag}
                  >
                    {tag}
                  </span>
                );
              })
            ) : (
              <>
                <span
                  className={`bg-amber-500 font-semibold m-4 px-2 rounded text-lg`}
                >
                  Tag
                </span>
                <span
                  className={`bg-amber-500 font-semibold m-4 px-2 rounded text-lg`}
                >
                  Tag
                </span>
                <span
                  className={`bg-amber-500 font-semibold m-4 px-2 rounded text-lg`}
                >
                  Tag
                </span>
              </>
            )
          ) : (
            <p>No tags here</p>
          )}
        </div>
        <p className={`font-mono m-4`}>
          {data.price ? "#" + data.price : "#9,999"}

          {data.quantity > 0 ? (
            <span
              className={`m-4 text-sm font-semibold bg-green-300 rounded px-2`}
            >
              Available
            </span>
          ) : (
            <span
              className={`m-4 text-sm font-semibold bg-red-500 rounded px-2`}
            >
              Out of Stock
            </span>
          )}
        </p>
        <AddToCart />
      </div>
    </div>
  );
};

// const Product = ({ data, isAuthorized }) => {
const Product = ({ props }) => {
  const route = useRouter();
  const id = route.query.id;
  const [data, setData] = useState({});
  const [isAuthorized, setAuthorized] = useState("pending");
  // isAuthorized: "true", "pending", "false"
  // const { auth } = useContext(AuthContext);
  let path;
  if (route.isReady) {
    path = route.asPath;
  }

  useEffect(() => {
    // console.log(path);
    // console.log(auth);
    const call = async () => {
      await axios
        .get(`https://temporal-state-363009.rj.r.appspot.com/products/${id}`, {
          // .get(`https://e-store-server.cyclic.app/products/${id}`, {
          // .get(`http://localhost:4000/products/${id}`, {
          headers: {
            Authorization: props.auth,
            // Authorization: auth,
            // Origin: "http://localhost:3000",
          },
        })
        .then(async (res) => {
          // console.log("Im then");
          if (res.status >= 200 && res.status < 299) {
            // data = await res.json();
            // data = res.data;
            // isAuthorized = true;
            setData(res.data);
            setAuthorized("true");
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          // console.log("Im catch");
          if (e.response) {
            const stat = e.response.status;
            // console.log(typeof stat);
            // data = { status: stat };
            // isAuthorized = false;
            setData({ status: stat });
            setAuthorized("false");
          }
        });
    };
    call();
  }, [isAuthorized, route.query, id]);

  // console.log(id.toString());
  // return (
  //   <>
  //     {/* <h1>This is a product with id {id}</h1> */}
  //     {isAuthorized == "true" ? (
  //       <ProductDisplay data={data} />
  //     ) : isAuthorized == "pending" ? (
  //       <p>Loading</p>
  //     ) : isAuthorized == "false" ? (
  //       <p>We need to login</p>
  //     ) : (
  //       <p>Runnig</p>
  //     )}
  //   </>
  // );
  if (isAuthorized == "true") {
    return (
      <>
        <Head>
          <title>{data.name}</title>
          <meta name="description" content="Savoir Care. Simple and easy." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProductDisplay data={data} />
      </>
    );
  }
  if (isAuthorized == "pending") {
    return <p>Loading...</p>;
  }
  if (isAuthorized == "false") {
    return (
      <>
        <p>You need to login to view this resource</p>
        <Login redPath={path} />
      </>
    );
  }
};

Product.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { location: "/" });
      res.end();
    }
  }
  return { props: data && data };
};

export default Product;

// export async function getServerSideProps(context) {
//   // console.log(id.query.id);
//   const id = context.query.id;
//   let data;
//   let isAuthorized;
//   // const res = await fetch(`https://creepy-plum-elk.cyclic.app/products/${id}`);
//   // const res = await fetch(`http://localhost:4000/products/${id}`, {

//   // });
//   // if (res.status > 200 && res.status < 299) {
//   //   data = await res.json();
//   //   isAuthorized = true;
//   // }
//   // if (res.status >= 400) {
//   //   data = { status: res.status };
//   //   isAuthorized = false;
//   //   // console.log("We're not authorized");
//   // }

//   // await axios
//   //   .get(`http://localhost:4000/products/${id}`, {
//   //     headers: {
//   //       Authorization: getAuth(),
//   //     },
//   //   })
//   //   .then(async (res) => {
//   //     if (res.status > 200 && res.status < 299) {
//   //       // data = await res.json();
//   //       data = res.data;
//   //       isAuthorized = true;
//   //     }
//   //   })
//   //   .catch((e) => {
//   //     if (e.response) {
//   //       const stat = e.response.status;
//   //       // console.log(typeof stat);
//   //       data = { status: stat };
//   //       isAuthorized = false;
//   //     }
//   //   });
//   // console.log(data.tags.length);
//   // data.tags.forEach((tag) => {
//   //   console.log(tag);
//   // });
//   console.log(data);
//   return {
//     props: {
//       data: data,
//       isAuthorized,
//     },
//   };
// }
