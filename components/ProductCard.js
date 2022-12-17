import Link from "next/link";
import Image from "next/image";
import { AddToCart } from "./button";
import { useAuth0 } from "@auth0/auth0-react";
const ProductCard = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Link href={`/shop/product/[id]`} as={`/shop/product/903`}>
      <div
        className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2 cursor-pointer hover:relative hover:bottom-2`}
      >
        <div className={`w-full h-2/3 relative`}>
          <Image
            layout="fill"
            src="/img.jpg"
            alt="product"
            title="Product Name"
            className="w-full h-full rounded-2xl object-contain"
          />
        </div>
        <p className={`font-semibold`}>Product Name</p>
        <span className={`font-mono font-thin`}>#9,999</span>
        <AddToCart className={`pop`} />
      </div>
    </Link>
  ) : (
    // <Link href={`/shop/product/[id]`} as={`/shop/product/${_id}`}>
    //   <div
    //     className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
    //   >
    //     <div className={`w-full h-2/3 relative`}>
    //       <Image
    //         layout="fill"
    //         src={imageURL}
    //         alt={productName}
    //         title={productName}
    //         className="w-full h-full rounded-2xl object-contain"
    //       />
    //     </div>
    //     <p className={`font-semibold`}>{productName}</p>
    //     <span className={`font-mono font-thin`}>{price}</span>
    //   </div>
    // </Link>
    <div>You need to be logged in to view this page.</div>
  );
};

export default ProductCard;
