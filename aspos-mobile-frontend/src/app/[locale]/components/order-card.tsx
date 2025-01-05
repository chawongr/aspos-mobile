import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FiMinusCircle,FiPlusCircle  } from "react-icons/fi";
import { useTranslations } from 'next-intl';

interface OrderCardProps {
    imageUrl: string | StaticImageData; // Accept both string and StaticImageData
    title: string;
    description: string;
    price: number;
    quantity: number;
    status: string
}

export default function OrderCard({ imageUrl, title, description, price, quantity: initialQuantity, status }: OrderCardProps) {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [showModal, setShowModal] = useState(false);

    const t = useTranslations('DeleteModal');
 
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else if (quantity === 1) {
            setShowModal(true);
        }
    };;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDeleteConfirm = () => {
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="w-full py-4 flex items-center gap-3 md:gap-6">
            {/* Image */}
            <div className="w-[85px] h-[85px] md:w-[105px] md:h-[105px] flex-shrink-0">
                <Image
                src={imageUrl}
                alt={title}
                width={105}
                height={105}
                className="rounded-lg object-cover w-full h-full"
                />
            </div>

            <div className='flex flex-col h-[91px] md:h-[120px] w-full'>
                {/* Content-Middle */}
                <div className="flex-grow flex justify-between items-start gap-4 md:gap-8">
                    <div>
                        <h3 className="text-base md:text-xl font-medium line-clamp-1 text-darkGray">{title}</h3>
                        <p className="text-sm md:text-lg text-lightGray line-clamp-2">{description}</p>
                    </div>
                    <div className="text-base  md:text-xl font-semibold text-darkGray">฿{price}</div>
                </div>

                {/* Content-Right */}
                <div className='flex justify-end items-end gap-1.5 md:gap-3'>
                    <FiMinusCircle 
                        className='w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green'
                        onClick={handleDecrease} 
                    />
                    <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full text-base md:text-xl font-semibold text-darkGray">
                        {quantity}
                    </div>
                    <FiPlusCircle 
                        className='w-[25px] h-[25px] md:w-[34px] md:h-[34px] text-green'
                        onClick={handleIncrease} 
                    />
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-darkGray ">
                        <h2 className="text-lg md:text-2xl font-bold mb-4">{t('title')}</h2>
                        <p className="text-sm md:text-lg mb-6">{t('description')}</p>
                        <div className="flex justify-end gap-3">
                            <button 
                                className="px-4 py-2 flex justify-center bg-gray-300 rounded-md hover:bg-gray-400 md:text-lg" 
                                onClick={handleCloseModal}
                            >
                                {t('cancleBtn')}
                            </button>
                            <button 
                                className="px-4 py-2 flex justify-center bg-red-500 text-white rounded-md hover:bg-red-600 md:text-lg" 
                                onClick={handleDeleteConfirm}
                            >
                                {t('deleteBtn')}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
