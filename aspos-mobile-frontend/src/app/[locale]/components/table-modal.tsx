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
          <div className="flex text-lg md:text-2xl font-bold">
            <div>{TableModal('branch')}</div>
            <div className="ml-2">xxx</div>
          </div>
          <div className="bg-lightBg rounded-lg mt-3 md:mt-5 p-4 md:p-5">
            <div className="flex justify-between">
              <div className="font-bold text-base md:text-xl">Buffet</div>
              <div className="font-semibold text-lg">19.00 - 20.45</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <FaUser />
                <div className="ml-2 font-normal md:text-lg">3 ท่าน</div>
              </div>
              <div className='md:text-lg'>เวลาทาน : 105 นาที</div>
            </div>
          </div>
          <div className="text-lg md:text-2xl font-bold py-7 md:py-9">
            <div className='mb-5 md:mb-7'>{TableModal('shareqr')}</div>
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
