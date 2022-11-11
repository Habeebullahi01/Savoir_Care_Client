import ProductList from "../../../components/ProductList";
import { useRouter } from "next/router";
import Head from "next/head";

const Category = () => {
  const route = useRouter();
  const { category } = route.query;

  return (
    <>
      <Head>
        <title>{`Shop - ${category}`}</title>
      </Head>
      <div className={`my-4`}>
        <h1>This is the {category} section of the Shop. </h1>
        <ProductList />
      </div>
      {/* PAGINATION CONTROLS */}
    </>
  );
};
// WRAP IN `my-4` CLASSED DIV
export default Category;

/* 
    -Get list from API
    -Pass list into {ProductList} as prop
    -Return {ProductList}
*/
