'use client';

import React from 'react';
import OrderCard from '../../components/order-card';
import { IoClose } from "react-icons/io5";
import { PiRocketLaunchLight } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useBasket } from '@/app/[locale]/components/context/basket-context';
import { Food2 } from '@/app/[locale]/components/all-image'
import { useAllList } from '@/app/[locale]/components/context/all-list-context';


export default function OrderList() {
  const path = usePathname().substring(1);
  const lang = path.split('/')[0];

  const { addToAllList } = useAllList();


  const t = useTranslations('OrderPage');
  const { basket, clearBasket } = useBasket();

  const totalAmount = basket.reduce(
    (acc, item) => {
      acc.amount += item.quantity;
      acc.price += item.quantity * item.price;
      return acc;
    },
    { amount: 0, price: 0 }
  );

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  const handleSendToAllList = () => {
    const allListData = basket.map((item) => ({
      ...item,
      description: item.description || "", 
      status: 'Pending', 
    }));
    addToAllList(allListData);
    clearBasket();
  };

  const orderTime = "19:01:00";

  return (
    <div className="flex flex-col relative">
      <header className="sticky top-0 w-full-p-5 md:w-full-p-10 pb-3 md:pb-7 flex justify-between items-center gap-2 md:gap-4 bg-white">
        <Link href={`/${lang}`}>
          <IoClose className="w-7 h-7 md:w-9 md:h-9" />
        </Link>
        <div className="flex flex-col items-center">
          <h1 className="text-xl md:text-3xl font-semibold">{t('title')}</h1>
          <p className="text-sm md:text-lg text-gray-500">
            {t('description')} {formatTime(orderTime)}
          </p>
        </div>
        <div className="w-7 h-7 md:w-9 md:h-9" />
      </header>

      <div className="flex-1 overflow-y-auto">
        {basket.map((order, index) => (
          <div key={order.id} className={`${index !== basket.length - 1 ? 'border-b-[0.5px] border-borderGray ' : ''}`}>
            <OrderCard
              key={order.id}
              imageUrl={Food2} 
              title={order.name}
              description={order.description}
              price={order.price}
              quantity={order.quantity}
              status="Pending" 
            />
          </div>
        ))}
      </div>

      <footer className="sticky bottom-0 w-full-p-5 md:w-full-p-10 py-6 md:py-10 flex flex-col gap-2 md:gap-4 bg-white">
        <div className="flex justify-between text-lg md:text-2xl font-medium">
          <div>{totalAmount.amount} {t('order')}</div>
          <div>฿{totalAmount.price}</div>
        </div>
        <Link href={`/${lang}`}>
          <button
            onClick={handleSendToAllList}
            className="py-4 md:py-5 text-base md:text-xl font-medium text-white bg-green rounded-full w-full flex items-center justify-center"
          >
            <PiRocketLaunchLight className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            {t('button')}
          </button>
        </Link>
      </footer>
    </div>
  );
}
