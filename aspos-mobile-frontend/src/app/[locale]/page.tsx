// 'use client'
// import { useTranslations } from 'next-intl';
// import { ThFlag, Bell, Bill } from '@/app/[locale]/components/all-image'
// import Image from 'next/image';
// import { FiSearch } from "react-icons/fi";
// import { IoChevronForward } from "react-icons/io5";
// import { TfiMenuAlt } from "react-icons/tfi";
// import CategoryTabs from './components/category-tab';
// import CategoriesData from './datas/menu.json'

// interface MenuItem {
//   id: number;
//   name: string;
//   description: string;
// }

// interface Category {
//   id: number;
//   name: string;
//   menu: MenuItem[];
// }

// export default function Home() {
//   const t = useTranslations('HomePage');

//   const Categories: Category[] = CategoriesData.category;


//   const handleTabClick = (categoryId: number) => {
//     const section = document.getElementById(`category-${categoryId}`);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className=''>
//       {/* Banner */}
//       <div className='flex justify-between bg-white'>
//         <div>
//           <div className='text-3xl md:text-5xl font-semibold'>Hi guys 👋</div>
//           <div className='text-base md:text-2xl'>Hope you enjoy eating!</div>
//         </div>
//         <div className='flex items-end gap-x-4 md:gap-x-7'>
//           <div className=' w-[32px] h-[32px] md:w-[52px] md:h-[52px] bg-red-500ป'>
//             <Image
//               src={Bell}
//               alt="Bell Icon"
//               width={64}
//               height={64}
//             />
//           </div>
//           <div className='w-[28px] h-[28px] mb-1 md:mb-2 md:w-[42px] md:h-[42px] bg-cyan-500ป'>
//             <Image
//               src={Bill}
//               alt="Bill Icon"
//               width={64}
//               height={64}
//             />
//           </div>
//           <div className="w-8 h-8 md:w-11 md:h-11 md:mb-1 rounded-full overflow-hidden ">
//             <Image
//               src={ThFlag}
//               alt="Thai Flag"
//               className="object-cover w-full h-full"
//               width={64}
//               height={64}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Search */}
//       <div className='flex mt-4 gap-x-3 fixed bg-white'>
//         <div className="flex bg-lightBg rounded-full px-4 py-2 w-full h-10">
//           <div className='text-green text-2xl'>
//             <FiSearch />
//           </div>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 "
//           />
//         </div>
//         <div>
//           <button className='px-4 py-2 bg-lightBg rounded-full h-10 w-28'>
//             <div className='flex font-medium text-green'>
//               <div className='my-auto'>Table</div>
//               <div className='my-auto  ml-2'>15</div>
//               <div className='my-auto ml-1 flex'>
//                 <IoChevronForward />
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Category */}
//       <div className="mt-[65px] fixed bg-white">
//         <div className="text-2xl flex items-center">
//           <TfiMenuAlt className="mr-2" />
//           <CategoryTabs
//             categories={Categories.map((category) => ({
//               id: category.id,
//               name: category.name,
//             }))}
//             onTabClick={handleTabClick}
//           />
//         </div>
//       </div>

//       {/* Menu */}
//       <div className="mt-[140px]">
//         {Categories.map((category) => (
//           <div key={category.id} id={`category-${category.id}`} className="mb-8">
//             <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {category.menu.map((menuItem) => (
//                 <div
//                   key={menuItem.id}
//                   className="p-4 border rounded-lg shadow-sm bg-white"
//                 >
//                   <h3 className="text-lg font-medium">{menuItem.name}</h3>
//                   <p className="text-sm text-gray-600">{menuItem.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client'

import { useTranslations } from 'next-intl';
import { ThFlag, Bell, Bill } from '@/app/[locale]/components/all-image';
import Image from 'next/image';
import { FiSearch } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import CategoryTabs from './components/category-tab';
import CategoriesData from './datas/menu.json';

interface MenuItem {
  id: number;
  name: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  menu: MenuItem[];
}

export default function Home() {
  const t = useTranslations('HomePage');

  const Categories: Category[] = CategoriesData.category;

  const handleTabClick = (categoryId: number) => {
    const section = document.getElementById(`category-${categoryId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white">
        {/* Banner */}
        <div className="flex justify-between items-center ">
          <div>
            <div className="text-xl md:text-3xl font-semibold">Hi Chaw 👋</div>
            <div className="text-sm md:text-lg text-gray-600">Hope you enjoy eating!</div>
          </div>
          <div className="flex items-center gap-x-3">

            <div className=' w-[32px] h-[32px] md:w-[52px] md:h-[52px] bg-red-500ป'>
              <Image
                src={Bell}
                alt="Bell Icon"
                width={64}
                height={64}
              />
            </div>
            <div className='w-[28px] h-[28px] mb-1 md:mb-2 md:w-[42px] md:h-[42px] bg-cyan-500ป'>
              <Image
                src={Bill}
                alt="Bill Icon"
                width={64}
                height={64}
              />
            </div>
            <div className="w-8 h-8 md:w-11 md:h-11 md:mb-1 rounded-full overflow-hidden ">
              <Image
                src={ThFlag}
                alt="Thai Flag"
                className="object-cover w-full h-full"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center py-3">
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

        {/* Category */}
        <div className="  bg-white flex overflow-x-auto w-full">
          <div className="text-2xl flex items-center">
            <TfiMenuAlt className="" />
            <div className='ml-2'>
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

      </div>

      {/* Content */}
      <div className="mt-4 ">
        {Categories.map((category) => (
          <div key={category.id} id={`category-${category.id}`} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              {category.menu.map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="p-4 border rounded-lg shadow-sm bg-white"
                >
                  <h3 className="text-lg font-medium">{menuItem.name}</h3>
                  <p className="text-sm text-gray-600">{menuItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { useTranslations } from 'next-intl';
// import { ThFlag, Bell, Bill } from '@/app/[locale]/components/all-image';
// import Image from 'next/image';
// import { FiSearch } from 'react-icons/fi';
// import { IoChevronForward } from 'react-icons/io5';
// import { TfiMenuAlt } from 'react-icons/tfi';
// import CategoryTabs from './components/category-tab';
// import CategoriesData from './datas/menu.json';

// interface MenuItem {
//   id: number;
//   name: string;
//   description: string;
// }

// interface Category {
//   id: number;
//   name: string;
//   menu: MenuItem[];
// }

// export default function Home() {
//   const t = useTranslations('HomePage');

//   const Categories: Category[] = CategoriesData.category;

//   const [activeCategory, setActiveCategory] = useState<number>(Categories[0]?.id || 0);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const sections = Categories.map((category) => document.getElementById(`category-${category.id}`));

//     if (observerRef.current) observerRef.current.disconnect();

//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         let lastVisibleCategory = activeCategory;

//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const categoryId = parseInt(entry.target.getAttribute('data-id') || '0', 10);
//             lastVisibleCategory = categoryId;
//           }
//         });

//         setActiveCategory(lastVisibleCategory);
//       },
//       {
//         rootMargin: '-50px 0px -80% 0px', // Adjust this to control when the observer triggers
//         threshold: 0.1,
//       }
//     );

//     sections.forEach((section) => {
//       if (section) observerRef.current?.observe(section);
//     });

//     const handleScroll = () => {
//       // Check if the user is at the bottom of the page
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
//         setActiveCategory(Categories[Categories.length - 1]?.id || 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       observerRef.current?.disconnect();
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [Categories]);

//   const handleTabClick = (categoryId: number) => {
//     const section = document.getElementById(`category-${categoryId}`);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Fixed Header */}
//       <div className="sticky top-0 z-50 bg-white">
//         {/* Banner */}
//         <div className="flex justify-between items-center px-4 py-2 border-b">
//           <div>
//             <div className="text-xl md:text-3xl font-semibold">Hi Chaw 👋</div>
//             <div className="text-sm md:text-lg text-gray-600">Hope you enjoy eating!</div>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 flex items-center justify-center rounded-full">
//               <Image src={Bell} alt="Bell Icon" width={24} height={24} />
//             </div>
//             <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 flex items-center justify-center rounded-full">
//               <Image src={Bill} alt="Bill Icon" width={24} height={24} />
//             </div>
//             <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
//               <Image src={ThFlag} alt="Thai Flag" className="object-cover w-full h-full" width={40} height={40} />
//             </div>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="flex items-center px-4 py-3 border-b">
//           <div className="flex bg-gray-100 rounded-full px-4 py-2 w-full h-10">
//             <div className="text-green text-lg my-auto">
//               <FiSearch />
//             </div>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
//             />
//           </div>
//           <button className="ml-3 px-4 py-2 bg-gray-100 rounded-full h-10 flex items-center">
//             <span className="text-green font-medium">Table</span>
//             <span className="ml-2 text-green font-medium">5</span>
//             <IoChevronForward className="ml-2 text-green" />
//           </button>
//         </div>

//         {/* Category Tabs */}
//         <div className="px-4 py-3 bg-white">
//           <CategoryTabs
//             categories={Categories.map((category) => ({
//               id: category.id,
//               name: category.name,
//             }))}
//             onTabClick={handleTabClick}
//             activeCategory={activeCategory} // Pass active category to highlight
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="px-4 mt-6">
//         {Categories.map((category) => (
//           <div
//             key={category.id}
//             id={`category-${category.id}`}
//             data-id={category.id}
//             className="mb-8"
//           >
//             <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {category.menu.map((menuItem) => (
//                 <div
//                   key={menuItem.id}
//                   className="p-4 border rounded-lg shadow-sm bg-white"
//                 >
//                   <h3 className="text-lg font-medium">{menuItem.name}</h3>
//                   <p className="text-sm text-gray-600">{menuItem.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

