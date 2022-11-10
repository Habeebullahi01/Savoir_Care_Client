import { useRouter } from "next/router";

const Product = () => {
  const route = useRouter();
  const { id } = route.query;

  return (
    <>
      <h1>This is a product with id {id}</h1>
      <p>Work in progress.</p>
    </>
  );
};

export default Product;
