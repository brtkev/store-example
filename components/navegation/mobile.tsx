import Profile from "components/profile"
import Image from "next/image"
import Link from "next/link"


export default function Mobile(){
  return(
    <div className="  bg-primary w-full flex lg:hidden items-center justify-between p-4" >
      <Link href="/">
        <Image className='cursor-pointer' width={135} height={40} src={require('public/logo.png')} />
      </Link>
      <div className="flex">
        <div className="mr-4 h-7 w-7" >
          <Image width={24} height={24} src={require('public/icons/search.png')} />
        </div>
        <Profile />
      </div>
    </div>
  )
}