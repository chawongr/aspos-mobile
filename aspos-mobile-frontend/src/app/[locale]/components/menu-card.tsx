import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface MenuCardProps {
    imageUrl: string | StaticImageData; 
    title: string;
    description: string;
    price: number;
    quantity?: number;
}

export default function MenuCard({ imageUrl, title, description, price, quantity }: MenuCardProps) {

    return (
        <div className="w-full py-4 flex gap-3">
            {/* Image */}
            <div className="w-[105px] h-[105px] md:w-[125px] md:h-[125px] flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    className="rounded-lg object-cover w-full h-full"
                    width={125} 
                    height={125} 
                />
            </div>

            <div className="flex w-full">
                {/* Content */}
                <div className="flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="text-base md:text-xl font-medium line-clamp-1 text-darkGray">{title}</h3>
                        <p className="text-sm md:text-lg text-lightGray line-clamp-2">{description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-lg md:text-2xl font-semibold text-darkGray">฿{price}</div>
                        {quantity !== undefined && quantity > 0 && (
                            <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-green text-sm md:text-lg font-semibold text-white">
                                {quantity}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
