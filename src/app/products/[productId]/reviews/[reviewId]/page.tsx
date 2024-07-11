'use client'
import { notFound } from "next/navigation"

const randomeNumber = (min:number,max:number):number =>{
  max= max + 1;
  return Math.trunc(Math.random()*(max-min)) + min;
}

const ReviewDetails  = ({params: {reviewId, productId}} : {
  params: {
    reviewId: string,
    productId: string
  }
}) => {
    if(+reviewId>1000){
        notFound();
    }

    if(randomeNumber(1,2)==1){
      throw new Error(`Error has occoured for reviewId : ${reviewId}`)
    }
  return (
    <h1>Review {reviewId} of Product {productId}  </h1>
  )
}

export default ReviewDetails 