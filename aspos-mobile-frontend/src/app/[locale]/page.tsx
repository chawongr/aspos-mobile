'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bell, Bill, Food1 } from '@/app/[locale]/components/all-image';
import Image from 'next/image';
import { FiSearch } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import CategoryTabs from './components/category-tab';
import CategoriesData from './datas/menu.json';
import MenuCard from './components/menu-card';
import Link from 'next/link';
import LocalSwitcher from './components/local-switcher';
import { usePathname } from "next/navigation";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface Category {
  id: number;
  name: string;
  menu: MenuItem[];
}

export default function Home() {
  const MenuPage = useTranslations('MenuPage');
  const Categories: Category[] = CategoriesData.category;

  const path = usePathname().substring(1);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (categoryId: number) => {
    const stickyHeight = 150;
    const section = document.getElementById(`category-${categoryId}`);
    if (section) {
      const offset = section.offsetTop - stickyHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex">
              <div className="text-xl md:text-3xl font-semibold">{MenuPage('title')}</div>
              <div className="text-xl md:text-3xl font-semibold ml-1 truncate max-w-28 md:max-w-44">Chawong</div>
              <div className="text-xl md:text-3xl font-semibold ml-1">👋</div>
            </div>
            <div className="text-sm md:text-lg text-gray-600 mt-1">{MenuPage('subtitle')}</div>
          </div>
          <div className="flex items-end mt-4 gap-x-5 md:gap-x-7">
            <div className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] bg-red-500ป">
              <Image
                src={Bell}
                alt="Bell Icon"
                width={64}
                height={64}
              />
            </div>
            <Link href={`${path}/order-list-all`}>
              <div className="w-[22px] h-[22px] mb-1 md:mb-1 md:w-[32px] md:h-[32px]">
                <Image
                  src={Bill}
                  alt="Bill Icon"
                  width={64}
                  height={64}
                />
              </div>
            </Link>
            <LocalSwitcher/>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center pt-3">
          <div className="flex bg-gray-100 rounded-full px-4 py-2 w-full h-10">
            <div className="text-green text-lg my-auto">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-ful"
            />
          </div>
          <button className="ml-3 px-4 py-2 bg-gray-100 rounded-full h-10 flex items-center">
            <span className="text-green font-medium">Table</span>
            <span className="ml-2 text-green font-medium">5</span>
            <IoChevronForward className="ml-2 text-green" />
          </button>
        </div>

        <div className="bg-white flex w-full items-center pt-2 pb-2">
          {/* Hamburger Menu */}
          <div
            className="sticky left-0 top-0 z-50 bg-white pr-2 text-2xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <TfiMenuAlt />
          </div>

          {/* Sliding Tabs */}
          <div className="flex-grow overflow-x-auto">
            <CategoryTabs
              categories={Categories.map((category) => ({
                id: category.id,
                name: category.name,
              }))}
              onTabClick={handleTabClick}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-full h-1/2 rounded-xl shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Categories</h2>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setIsModalOpen(false)}
                />                  
              </div>
            </div>
            <div className="px-3 py-2 max-h-[70vh] overflow-y-auto">
              {Categories.map((category) => (
                <button
                  key={category.id}
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg"
                  onClick={() => handleTabClick(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="">
        {Categories.map((category) => (
          <div key={category.id} id={`category-${category.id}`} className="mb-4">
            <h2 className="text-xl font-semibold mb-1">{category.name}</h2>
            <div>
              {category.menu.map((menuItem, index) => (
                <div
                  key={menuItem.id}
                  className={`${index !== category.menu.length - 1 ? 'border-b-[0.5px] border-borderGray' : ''}`}
                >
                  <MenuCard
                    imageUrl={Food1}
                    title={menuItem.name}
                    description={menuItem.description}
                    price={menuItem.price}
                    quantity={menuItem.quantity}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

