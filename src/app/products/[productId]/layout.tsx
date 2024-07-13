export const metadata = {
    title:"Product Details"
}

const randomeNumber = (min:number,max:number):number =>{
  max= max + 1;
  return Math.trunc(Math.random()*(max-min)) + min;
}

const ProductLayout = ({children}:{children:React.ReactNode}) => {
  
  if(randomeNumber(1,2)==1){
    throw new Error(`Error has occoured in ProductLayout`)
  }

    return (
      <>
      <h2>ProductLayout</h2>
      {children}
      </>
      
      
    )
  }
  
  export default ProductLayout