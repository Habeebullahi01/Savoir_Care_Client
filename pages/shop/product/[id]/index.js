import { useRouter } from "next/router";
import { AddToCart } from "../../../../components/button";
import Image from "next/image";

const Product = () => {
  const route = useRouter();
  const { id } = route.query;

  return (
    <>
      <h1>This is a product with id {id}</h1>
      <div
        className={`flex flex-col md:flex-row items-center justify-evenly my-4`}
      >
        <div
          className={`w-[80%] md:w-[40%] h-[30em] py-4 rounded-xl border border-pink-500`}
        >
          <Image src="/ws2.jpg" className={`w-full h-full object-contain`} />
        </div>
        {/* The image should be a slideshow */}
        <div className={`w-[90%] md:w-[40%]`}>
          <p className={`text-2xl font-semibold my-4`}>Product Name</p>
          <p className={`my-2`}>
            {`This is the description of the product. It may be long, as I expect
            it to give detailed information about he product like the size and
            variant. Apparently, this is where the product is 'sold' to the
            visitor. It should be in markdown format to allow more flexibilty on
            the administrators' side.`}
          </p>
          <p className={`font-mono m-4`}>
            #9,999{" "}
            <span className={`text-sm font-semibold bg-green-300 rounded px-2`}>
              Available
            </span>
          </p>
          <AddToCart />
        </div>
      </div>
    </>
  );
};

export default Product;
