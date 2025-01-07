'use client';

import React, { useState, useEffect } from 'react';
import BillCard from '../../components/bill-card';
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useBasket } from '@/app/[locale]/components/context/basket-context';
import { Food2 } from '../../components/all-image';

export default function Bills() {
  const path = usePathname().substring(1);
  const lang = path.split('/')[0];

  const [showModal, setShowModal] = useState(false);
  const { basket } = useBasket();

  const t = useTranslations('BillPage');

  // Calculate total quantities and prices from basket
  const totalAmount = basket.reduce(
    (acc, item) => {
      acc.amount += item.quantity;
      acc.price += item.quantity * item.price;
      return acc;
    },
    { amount: 0, price: 0 }
  );

  const totalPrice = totalAmount.price + 100; 

  const handleConfirm = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Debug basket data
  useEffect(() => {
    console.log('Basket data:', basket);
  }, [basket]);

  return (
    <div className="flex flex-col relative">
      <header className="sticky top-0 w-full-p-5 md:w-full-p-10 pb-4 md:pb-8 flex justify-between items-center gap-2 md:gap-4 bg-white">
        <Link href={`/${lang}/order-list-all`}>
          <IoIosArrowBack className="w-7 h-7 md:w-9 md:h-9" />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-xl md:text-3xl font-semibold">{t('title')}</h1>
        </div>
        <div className="w-7 h-7 md:w-9 md:h-9" />
      </header>

      <div className="flex justify-between items-center text-lg md:text-2xl font-medium py-4 md:py-6 border-b-[0.5px] border-borderGray">
        <div>
          {t('order')} ({totalAmount.amount})
        </div>
        <div className="text-sm md:text-base text-darkGray bg-lightBg rounded-full px-2.5 py-1">
          {t('table')} 5
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {basket.map((bill, index) => (
          <div
            key={bill.id}
            className={`${index !== basket.length - 1 ? 'border-b-[0.5px] border-borderGray ' : ''}`}
          >
            <BillCard
              key={bill.id}
              imageUrl={Food2} // Replace with actual image if available
              title={bill.name}
              description={bill.description || 'No description available'}
              price={bill.price}
              quantity={bill.quantity}
              status="Pending" // Replace with actual status if available
            />
          </div>
        ))}
      </div>

      <div className="pt-4 md:pt-6">
        <div className="flex justify-between md:text-xl font-medium text-gray-400">
          <div>{t('price')}</div>
          <div>฿{totalAmount.price}</div>
        </div>
        <div className="flex justify-between md:text-xl font-medium text-gray-400">
          <div>VAT</div>
          <div>฿100</div>
        </div>
        <div className="flex justify-between text-base md:text-2xl font-medium">
          <div>{t('totalPrice')}</div>
          <div>฿{totalPrice}</div>
        </div>
      </div>

      <footer className="sticky bottom-0 w-full-p-5 md:w-full-p-10 py-6 md:py-10 flex flex-col gap-2 md:gap-4 bg-white">
        <button
          className="py-4 md:py-5 text-base md:text-xl font-medium text-white bg-green rounded-full w-full flex items-center justify-center"
          onClick={handleOpenModal}
        >
          <FaRegUser className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          {t('button')}
        </button>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-darkGray">
            <h2 className="text-lg md:text-2xl font-bold mb-4">{t('titleModal')}</h2>
            <p className="text-sm md:text-lg mb-6">{t('descriptionModal')}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 flex justify-center bg-green text-white rounded-2xl md:text-lg w-20 md:w-24"
                onClick={handleConfirm}
              >
                {t('buttonModal')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
