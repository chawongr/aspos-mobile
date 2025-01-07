import React from 'react';
import { FaUser } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { IoChevronForward } from 'react-icons/io5';
import { Cutlery,Ketchup,SoftDrink,Waiter} from '@/app/[locale]/components/all-image';
import Image from 'next/image';
import { ImSpoonKnife } from "react-icons/im";

interface WaiterModalProps {
  onClose: () => void; // Callback function to close the modal
}

const WaiterModal: React.FC<WaiterModalProps> = ({ onClose }) => {
  const t = useTranslations('WaiterModal');

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
          <div className="flex flex-col gap-0.5 md:gap-1">
            <div className="text-lg md:text-2xl font-bold">{t('title')}</div>
            <div className="text-base md:text-xl font-normal">{t('description')}</div>
          </div>
          <div className="p-6 md:p-12">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="aspect-square rounded-xl md:rounded-2xl flex flex-col justify-center items-center text-base md:text-xl font-normal shadow-md border border-lightBg gap-2 md:gap-3">
                <Image
                  src={Cutlery}
                  alt="cutlery icon"
                  className="max-w-16 md:max-w-24"
                />
                {t('buttonLT')}
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl flex flex-col justify-center items-center text-base md:text-xl font-normal shadow-md border border-lightBg gap-2 md:gap-3">
                <Image
                  src={Ketchup}
                  alt="ketchup icon"
                  className="max-w-16 md:max-w-24"
                />
                {t('buttonRT')}
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl flex flex-col justify-center items-center text-base md:text-xl font-normal shadow-md border border-lightBg gap-2 md:gap-3">
                <Image
                  src={SoftDrink}
                  alt="softDrink icon"
                  className="max-w-16 md:max-w-24"
                />
                {t('buttonLB')}
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl flex flex-col justify-center items-center text-base md:text-xl font-normal shadow-md border border-lightBg gap-2 md:gap-3">
                <Image
                  src={Waiter}
                  alt="waiter icon"
                  className="max-w-16 md:max-w-24"
                />
                {t('buttonRB')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WaiterModal;
