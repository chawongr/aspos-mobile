// import React from 'react'
// import { FaUser } from "react-icons/fa";
// import { useTranslations } from 'next-intl';
// import { IoChevronForward } from 'react-icons/io5';
// import { Qr } from '@/app/[locale]/components/all-image';
// import Image from 'next/image';


// const TableModal = () => {
//     const TableModal = useTranslations('TableModal');

//     return (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center">
//             <div
//                 className="bg-white w-full  rounded-t-xl shadow-lg overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <div className="bg-white z-10 p-4">
//                     <div className='flex'>
//                         <div className="text-xl font-bold">{TableModal('branch')}</div>
//                         <div className="text-xl font-bold ml-2">xxx</div>
//                     </div>
//                     <div className='bg-lightBg rounded-lg mt-3 p-4'>
//                         <div className='flex justify-between'>
//                             <div className='font-bold text-base'>Buffet</div>
//                             <div className='font-semibold'>15.00 - 16.45</div>
//                         </div>
//                         <div className='flex justify-between mt-2'>
//                             <div className='flex'>
//                                 <FaUser />
//                                 <div className='ml-2 font-normal'>3 ท่าน</div>
//                             </div>
//                             <div>เวลาทาน : 105 นาที</div>
//                         </div>
//                     </div>
//                     <div className='text-xl font-bold p-7'>
//                         {TableModal('shareqr')}
//                         <div className='flex justify-center mt-3'>
//                             <Image
//                                 src={Qr}
//                                 alt="Bell Icon"
//                                 className='max-w-[200px]'
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TableModal

import React from 'react';
import { FaUser } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { IoChevronForward } from 'react-icons/io5';
import { Qr } from '@/app/[locale]/components/all-image';
import Image from 'next/image';

interface TableModalProps {
  onClose: () => void; // Callback function to close the modal
}

const TableModal: React.FC<TableModalProps> = ({ onClose }) => {
  const TableModal = useTranslations('TableModal');

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center"
      onClick={onClose} 
    >
      <div
        className="bg-white w-full rounded-t-xl shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="bg-white z-10 p-4">
          <div className="flex">
            <div className="text-xl font-bold">{TableModal('branch')}</div>
            <div className="text-xl font-bold ml-2">xxx</div>
          </div>
          <div className="bg-lightBg rounded-lg mt-3 p-4">
            <div className="flex justify-between">
              <div className="font-bold text-base">Buffet</div>
              <div className="font-semibold">15.00 - 16.45</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex">
                <FaUser />
                <div className="ml-2 font-normal">3 ท่าน</div>
              </div>
              <div>เวลาทาน : 105 นาที</div>
            </div>
          </div>
          <div className="text-xl font-bold p-7 md:p-10">
            {TableModal('shareqr')}
            <div className="flex justify-center mt-3">
              <Image
                src={Qr}
                alt="QR Icon"
                className="max-w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
