import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { productId: string };
};

export const generateMetadata = ({
  params: { productId },
}: Props): Metadata => ({ title: `Product ${productId}` });

const ProductDetails = ({ params: { productId } }: Props) => {
  return <><h1>Product Details of product {productId} </h1>
      <Link className=" hover:bg-black p-2 hover:text-white" href={`/products/${productId}/reviews`}>View Reviews</Link>
  </>;
};

export default ProductDetails;
