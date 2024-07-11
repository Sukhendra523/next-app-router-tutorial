import Link from "next/link";

const ReviewList = ({
  params: { productId },
}: {
  params: {
    productId: string;
  };
}) => {
  const reviews = [
    {
      id: 1,
      title: "Reviews",
    },
    {
      id: 2,
      title: "Reviews",
    },
    {
      id: 3,
      title: "Reviews",
    },
  ];
  return (
    <div>
      <h1>Welcome to ReviewList page</h1>
      <ul>
        {reviews.map(({ id, title }) => (
          <li key={id}>
            <Link className=" hover:bg-black hover:text-white p-2" href={`/products/${productId}/reviews/${id}`}>
              {title} {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
