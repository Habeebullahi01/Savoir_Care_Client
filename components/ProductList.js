import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={`flex flex-row justify-evenly flex-wrap`}>
      <ProductCard />
    </div>
  );
};

export default ProductList;
