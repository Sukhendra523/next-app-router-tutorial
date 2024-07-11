'use client'

import Link from "next/link"
import './styles.scss'
import { usePathname } from "next/navigation"
import { title } from "process"

const Header = () => {

  const menuLinks = {
    mainMenu : [
        {
            name:"home",
            link:'/',
            title:'Home'
        },
        {
            name:"about",
            link:'/about',
            title:'About'
        },
        {
            name:"products",
            link:'/products',
            title:'Products'
        }
    ],
    authMenu: [
        {
            name:'login',
            link:'/login',
            title: "Login"
        },
        {
            name:'register',
            link:'/register',
            title:"Register"
        },
        {
            name:'forgot-password',
            link:'/forgot-password',
            title:"Forgot Password"
        }
    ]
  }  

  const pathname = usePathname();
  return (
    <header className="text-center bg-blue-300 p-4 flex justify-between">
        <div >Logo</div>
        <div>
            <ul className=" flex gap-2 list-none">
            {menuLinks['mainMenu'].map(({name,link,title})=>{
                const isActive = link=='/'? pathname === link : pathname.startsWith(link);
                return <Link  className={`${isActive?'bg-gray-50 font-bold':''} hover:bg-gray-50 p-1`} key={name}  href={link}>{title}</Link>}
                )}
            </ul>
        </div>
        <div>
            <ul className="flex gap-2 list-none">
                {menuLinks['authMenu'].map(({name,link,title})=>{
                const isActive = pathname.startsWith(link);
                return <Link  className={`${isActive?'bg-gray-50 font-bold':''} hover:bg-gray-50 p-1`} key={name}  href={link}>{title}</Link>}
                )}
            </ul>
        </div>
    </header>
  )
}

export default Header