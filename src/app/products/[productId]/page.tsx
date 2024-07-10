const ProductDetails  = ({params: {productId}} : {
  params: { productId: string }
}) => {
  return (
    <h1>Product Details of product {productId}  </h1>
  )
}

export default ProductDetails 