import Image from 'next/image';
import Ads from './ads';
import BottomNavegation from './bottom';
import Mobile from './mobile';
import TopNavegation from './top';


export default function Navegation(){
  return(
    <div className='w-full' >
      <Ads />
      <TopNavegation />
      <BottomNavegation />
      <Mobile />
    </div>
  )
}