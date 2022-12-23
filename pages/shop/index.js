import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const Shop = ({ data }) => {
  const products = data.products;
  return (
    <div>
      {/* <p>There are {data.totalItemCount} products.</p> */}
      {/* <LatestArr /> */}
      <div className={`my-4`}>
        <h3 className={`text-lg`}>Kitchenware</h3>
        <div className={`flex flex-row justify-evenly flex-wrap`}>
          {products.map((p) => {
            return (
              <Link
                href={`/shop/product/[id]`}
                as={`/shop/product/${p._id}`}
                key={p._id}
              >
                <div
                  className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2 hover:cursor-pointer`}
                >
                  <div className={`w-full h-2/3 relative`}>
                    <Image
                      layout="fill"
                      src={p.imageURL ? p.imageURL : "/ws2.jpg"}
                      alt="product"
                      title={p.name ? p.name : "Product Name"}
                      className="w-full h-full rounded-2xl object-contain"
                    />
                  </div>
                  <p className={``}>{p.name ? p.name : "Product Name"}</p>
                  <span className={`font-mono`}>
                    {p.price ? `#${p.price}` : "#9,999"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          href={`/shop/[category]`}
          as={`/shop/kitchenware`}
        >{`View More >`}</Link>
      </div>
    </div>
  );
};

export default Shop;

export async function getServerSideProps() {
  const res = await fetch("https://creepy-plum-elk.cyclic.app/products");
  // const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  // console.log(data.products[0]._id);

  return {
    props: { data: data },
  };
}

// TODO: tag based categorization
// TODO: Product card component
// TODO: Product list component
