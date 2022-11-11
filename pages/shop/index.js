import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  return (
    <div>
      <div className={`my-4`}>
        <h3 className={`text-lg`}>Latest Arrivals</h3>
        <div className={`flex flex-row justify-evenly flex-wrap`}>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/ws2.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
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
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/mobile-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/desktop-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/ws2.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
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
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/mobile-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/desktop-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
        </div>
        <Link
          href={`/shop/[category]`}
          as={`/shop/arrival`}
        >{`View More >`}</Link>
      </div>
      <div className={`my-4`}>
        <h3 className={`text-lg`}>Kitchenware</h3>
        <div className={`flex flex-row justify-evenly flex-wrap`}>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/ws2.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
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
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/mobile-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/desktop-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/ws2.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
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
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/mobile-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
          <div
            className={`w-[10rem] h-[13rem] xl:w-[15%] bg-slate-500 p-2 rounded-xl m-2`}
          >
            <div className={`w-full h-2/3`}>
              <Image
                src="/desktop-hero.jpg"
                alt="product"
                title="Product Name"
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
            <p className={``}>Product Name</p>
            <span className={`font-mono`}>#9,999</span>
          </div>
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
