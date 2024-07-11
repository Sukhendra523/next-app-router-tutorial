import GoBackButton from "@/app/components/GoBackButton"

export const metadata = {
    title:"Product Details"
}
const ProductLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <>
      <h2>ProductLayout</h2>
      {children}
      </>
      
      
    )
  }
  
  export default ProductLayout