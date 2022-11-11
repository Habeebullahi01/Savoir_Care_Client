import Link from "next/link";
import Image from "next/image";
const ProductCard = () => {
  return (
    <Link href={`/shop/product/[id]`} as={`/shop/product/903`}>
      <div
        className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
      >
        <div className={`w-full h-2/3`}>
          <Image
            src="/img.jpg"
            alt="product"
            title="Product Name"
            className="w-full h-full rounded-2xl object-contain"
          />
        </div>
        <p className={``}>Product Name</p>
        <span className={`font-mono`}>#9,999</span>
      </div>
    </Link>
  );
};

export default ProductCard;
