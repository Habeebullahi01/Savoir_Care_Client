import { useRouter } from "next/router";
import { AddToCart } from "../../../../components/button";
import Image from "next/image";

const Product = ({ data }) => {
  const route = useRouter();
  const { id } = route.query;
  // console.log(id.toString());
  return (
    <>
      {/* <h1>This is a product with id {id}</h1> */}
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
            {data.tags.length > 0 ? (
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
    </>
  );
};

export default Product;

export async function getServerSideProps(id) {
  // console.log(id.query.id);
  id = id.query.id;
  const res = await fetch(`https://creepy-plum-elk.cyclic.app/products/${id}`);
  // const res = await fetch(`http://localhost:4000/products/${id}`);
  const data = await res.json();
  console.log(data.tags.length);
  // data.tags.forEach((tag) => {
  //   console.log(tag);
  // });

  return {
    props: { data: data },
  };
}
