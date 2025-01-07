'use client';

import { useParams } from 'next/navigation';
import CategoriesData from '@/app/[locale]/datas/menu.json';
import { Food1 } from '@/app/[locale]/components/all-image';
import Image from 'next/image';
import AccordionCondiment from '../../components/accordion-condiment';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";


interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  condiments?: string[];
}

export default function MenuItemDetail() {
  const params = useParams() as { itemId: string }; // Use proper typing for params
  const itemId = params.itemId;
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const menuItemId = parseInt(itemId, 10);

  const category = CategoriesData.category.find((cat) =>
    cat.menu.some((item: MenuItem) => item.id === menuItemId)
  );
  const menuItem = category?.menu.find((item: MenuItem) => item.id === menuItemId);

  const handleDecrease = (itemKey: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemKey]: Math.max((prev[itemKey] || 1) - 1, 0), // Minimum quantity is 0
    }));
  };

  const handleIncrease = (itemKey: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemKey]: (prev[itemKey] || 0) + 1,
    }));
  };

  if (!menuItem) {
    return <div>Item not found.</div>;
  }

  const currentQuantity = quantities[menuItem.id] || 1;
  const router = useRouter();

  return (
    <div>
      <button
                onClick={() => router.back()} // Navigate back to the previous page
                className="absolute text-green font-semibold p-1 text-xl  rounded-full bg-gray-100 ml-1 mt-1"
            >
                <IoIosArrowBack />

            </button>
      <div>
        <Image
          src={Food1}
          alt="Bill Icon"
          className="object-cover h-48 w-screen rounded-2xl"
        />
      </div>
      <div className="py-5">
        <div className="text-lg font-bold text-green">{menuItem.name}</div>
        <div>{menuItem.description}</div>
      </div>
      <div className="border-y-[0.5px] border-borderGray">
        <AccordionCondiment />
      </div>
      <div className="py-5">
        <div className="text-lg font-semibold">Note</div>
        <textarea
          className="border border-borderGray w-full rounded-xl p-4"
          rows={4}
          placeholder="Write a note..."
          required
        ></textarea>
      </div>
      <footer className="sticky bottom-0 w-full-p-5 md:w-full-p-10 py-6 md:py-10 flex flex-col gap-2 md:gap-4 bg-white">
        <div className="flex justify-between text-lg md:text-2xl font-medium">
          <div className="flex justify-end items-center gap-1.5 md:gap-3">
            <CiCircleMinus
              className={`w-[25px] h-[25px] md:w-[34px] md:h-[34px] ${currentQuantity <= 1 ? 'text-lightBg' : 'text-green'
                } cursor-pointer`}
              onClick={() => handleDecrease(menuItem.id)}
            />

            <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full text-base md:text-xl font-semibold text-darkGray">
              {currentQuantity}
            </div>
            <CiCirclePlus
              className="w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green cursor-pointer"
              onClick={() => handleIncrease(menuItem.id)}
            />
          </div>
          <div className="w-full ml-5">
            <button className="px-5 py-4 md:py-5 text-base md:text-xl font-medium text-white bg-green rounded-full w-full flex items-center justify-between">
              <div className="flex">
                <SlBasket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                <div>Add to basket</div>
              </div>
              <div>฿{menuItem.price * currentQuantity}</div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
