import Link from "next/link";
import GoBackButton from "../components/GoBackButton";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Product",
    },
    {
      id: 2,
      title: "Product",
    },
    {
      id: 3,
      title: "Product",
    },
  ];
  return (
    <div>
      <h1>Welcome to ProductList page</h1>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            {id == 3 ? (
              <Link href={`/products/${id}`} replace>
                {title} {id}
              </Link>
            ) : (
              <Link href={`/products/${id}`}>
                {title} {id}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
