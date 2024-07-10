import { notFound } from "next/navigation"

const ReviewDetails  = ({params: {reviewId, productId}} : {
  params: {
    reviewId: string,
    productId: string
  }
}) => {
    if(+reviewId>1000){
        notFound();
    }
  return (
    <h1>Review {reviewId} of Product {productId}  </h1>
  )
}

export default ReviewDetails 