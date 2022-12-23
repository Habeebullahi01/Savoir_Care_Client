import Link from "next/link";
import Image from "next/image";
import { AddToCart } from "./button";
import { getServerSideProps } from "../pages/shop";
// import { useAuth0 } from "@auth0/auth0-react";
const ProductCard = (p) => {
  // const { isAuthenticated } = useAuth0();

  return (
    <Link href={`/shop/product/[id]`} as={`/shop/product/${p._id}`} key={p._id}>
      <div
        className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2 cursor-pointer hover:relative hover:bottom-2`}
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
        <p className={`font-semibold`}>{p.name ? p.name : "Product Name"}</p>
        <span className={`font-mono font-thin`}>
          {p.price ? `#${p.price}` : "#9,999"}
        </span>
        <AddToCart className={`pop`} />
      </div>
    </Link>
  );
};

export default ProductCard;
