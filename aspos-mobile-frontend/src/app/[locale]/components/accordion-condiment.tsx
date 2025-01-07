// import { useState } from "react";
// import CategoriesData from '@/app/[locale]/datas/menu.json';
// import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

// interface MenuItem {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     quantity?: number;
//     condiments?: string[];
// }

// interface Category {
//     id: number;
//     name: string;
//     menu: MenuItem[];
// }

// export default function Accordion() {
//     const [isOpen, setIsOpen] = useState(true);
//     const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
//     const Categories: Category[] = CategoriesData.category;

//     const toggleAccordion = () => setIsOpen(!isOpen);

//     const handleDecrease = (condimentKey: string) => {
//         setQuantities((prev) => ({
//             ...prev,
//             [condimentKey]: Math.max((prev[condimentKey] || 1) - 1, 1),
//         }));
//     };

//     const handleIncrease = (condimentKey: string) => {
//         setQuantities((prev) => ({
//             ...prev,
//             [condimentKey]: (prev[condimentKey] || 1) + 1,
//         }));
//     };

//     return (
//         <div className="rounded-lg py-4">
//             {/* Accordion Header */}
//             <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={toggleAccordion}
//             >
//                 <div className="text-lg font-semibold">Options</div>
//                 <div className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▲</div>
//             </div>

//             {/* Accordion Content */}
//             {isOpen && (
//                 <div className="mt-2">
//                     {Categories.map((category) => (
//                         <div key={category.id}>
//                             {category.menu.map((menuItem) => (
//                                 <div key={menuItem.id}>
//                                     {menuItem.condiments && (
//                                         <div className="flex flex-col gap-y-5">
//                                             {menuItem.condiments.map((condiment, index) => {
//                                                 const condimentKey = `${menuItem.id}-${index}`;
//                                                 return (
//                                                     <div className="flex w-full" key={condimentKey}>
//                                                         <input
//                                                             type="checkbox"
//                                                             id={`item-${menuItem.id}`}
//                                                             className="mr-2 accent-green"
//                                                             style={{ width: '20px', height: '20px' }}
//                                                         />

//                                                         <div className="flex justify-between w-full">
//                                                             <div>{condiment}</div>
//                                                             <div className="flex justify-end items-center gap-1.5 md:gap-3">
//                                                                 <CiCircleMinus
//                                                                     className="w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green"
//                                                                     onClick={() => handleDecrease(condimentKey)}
//                                                                 />
//                                                                 <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full text-base md:text-xl font-semibold text-darkGray">
//                                                                     {quantities[condimentKey] || 1}
//                                                                 </div>
//                                                                 <CiCirclePlus
//                                                                     className="w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green"
//                                                                     onClick={() => handleIncrease(condimentKey)}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

import { useState } from "react";
import { usePathname } from "next/navigation";
import CategoriesData from "@/app/[locale]/datas/menu.json";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity?: number;
    condiments?: string[];
}

interface Category {
    id: number;
    name: string;
    menu: MenuItem[];
}

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(true);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const pathname = usePathname(); // Get the current path

    // Extract the last part of the path as the `id`
    const menuItemId = parseInt(pathname.split("/").pop() || "0", 10);

    // Find the menu item based on the extracted `id`
    const category = CategoriesData.category.find((cat) =>
        cat.menu.some((item) => item.id === menuItemId)
    );
    const menuItem = category?.menu.find((item) => item.id === menuItemId);

    const toggleAccordion = () => setIsOpen(!isOpen);

    const handleDecrease = (condimentKey: string) => {
        setQuantities((prev) => ({
            ...prev,
            [condimentKey]: Math.max((prev[condimentKey] || 1) - 1, 1),
        }));
    };

    const handleIncrease = (condimentKey: string) => {
        setQuantities((prev) => ({
            ...prev,
            [condimentKey]: (prev[condimentKey] || 1) + 1,
        }));
    };

    if (!menuItem || !menuItem.condiments) {
        return <div></div>;
    }

    return (
        <div className="py-4 border-y-[0.5px] border-borderGray">
            {/* Accordion Header */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className="text-lg font-semibold">Options</div>
                <div className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▲</div>
            </div>

            {/* Accordion Content */}
            {isOpen && (
                <div className="mt-3">
                    <div className="flex flex-col gap-y-5">
                        {menuItem.condiments.map((condiment, index) => {
                            const condimentKey = `${menuItem.id}-${index}`;
                            return (
                                <div className="flex w-full" key={condimentKey}>
                                    <input
                                        type="checkbox"
                                        id={`item-${menuItem.id}`}
                                        className="mr-2 accent-green"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    <div className="flex justify-between w-full">
                                        <div>{condiment}</div>
                                        <div className="flex justify-end items-center gap-1.5 md:gap-3">
                                            <CiCircleMinus
                                                className="w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green"
                                                onClick={() => handleDecrease(condimentKey)}
                                            />
                                            <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full text-base md:text-xl font-semibold text-darkGray">
                                                {quantities[condimentKey] || 1}
                                            </div>
                                            <CiCirclePlus
                                                className="w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green"
                                                onClick={() => handleIncrease(condimentKey)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
