'use client'

import { useRouter } from "next/navigation"

const GoBackButton = () => {
    const router = useRouter();
    const onClick = ()=>{
        router.back();
    }
  return (
    <button onClick={onClick} className="p-4 bg-black text-white shadow-md">Go Back</button>
  )
}

export default GoBackButton