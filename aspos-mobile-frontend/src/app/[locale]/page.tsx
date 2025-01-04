
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PiCallBell } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { ThFlag } from '@/app/[locale]/components/all-image'
import Image from 'next/image';



export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <div className='flex justify-between'>
        <div>
           <div className='text-3xl md:text-5xl font-semibold'>Hi guys 👋</div> 
          <div className='text-base md:text-2xl'>Hope you enjoy eating!</div> 
          {/* <div className=''>Hi guys 👋</div> */}
          {/* <div className=''>Hope you enjoy eating! ข้าว</div> */}
        </div>
        <div className='flex'>
          <div>
            <PiCallBell />
          </div>
          <div><LuClipboardList />
          </div>
          <div>
            <Image src={ThFlag} alt="" width={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
