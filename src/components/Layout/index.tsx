import { Navbar } from "flowbite-react"
import WrapeAnimate from "../WrapperAnimate"
const NavbarComp = () => {
    const firstName = ["M","u","h","a","m","a","d"]
    const lastName = ["I","m","r","o","n"]
    return (
        <Navbar
  fluid={true}
  rounded={true}
  className="bg-zinc-100"
>
  <Navbar.Brand href="https://flowbite.com/">
    <div className="flex space-x-2">
        <div className="flex">
    {
        firstName?.map((val, index) => (
            <WrapeAnimate duration={`${1}.${index}`} visible={{ opacity: 1, scale: 1 , x:0 }} hidden={{ opacity: 0, scale: 0 , x:200 }}>
    <span key={index} className="self-center whitespace-nowrap text-xl text-stone-600 font-semibold dark:text-white font-monserat ">
     {val}
    </span>
    </WrapeAnimate>
        ))
    }
    </div>
    <div className="flex">
    {
        lastName?.map((val, index) => (
            <WrapeAnimate duration={`${2}.${index}`} visible={{ opacity: 1, scale: 1 , x:0 }} hidden={{ opacity: 0, scale: 0 , x:180 }}>
    <span key={index} className="self-center whitespace-nowrap text-xl text-stone-600 font-semibold dark:text-white font-monserat ">
     {val}
    </span>
    </WrapeAnimate>
        ))
    }
    </div>
    </div>
    
    
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar>
    )
}

const Footer = () => {
    return (
        <div className="flex flex-col items-center pb-10 px-2">
            <div className="border-t border-stone-400 pb-10 w-full"></div>
            <p className="text-xs text-stone-500 font-monserat font-medium">Website of Muhamad imron © All rights reserved</p>
            <p className="text-xs mt-4 text-stone-500 font-monserat font-medium">moechammad.imron@gmail.com</p>
        </div>
    )
}


interface Layout {
    children : React.ReactNode
}
export default function Layout({children}:Layout){
    return (
        <div>
            <NavbarComp/>
            <main className="container mx-auto px-4 ">{children}</main>
            <Footer/>
        </div>
    )
}