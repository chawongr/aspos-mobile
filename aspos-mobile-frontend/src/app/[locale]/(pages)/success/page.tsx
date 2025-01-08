import React from 'react'
import { Success } from '@/app/[locale]/components/all-image';

import Image from 'next/image';

const Page = () => {
    return (
        <div className="fixed flex-col inset-0 z-50 flex items-center justify-center mb-[20%]">
            <div>
                <Image
                    src={Success}
                    alt="success gif"
                    width={400}
                    className=""
                />
            </div>
            <div className="text-center mt-4 text-xl font-semibold text-green">Payment succeeded</div>
            <div className="text-center">Thank you for visiting our restaurant</div>
        </div>
    )
}

export default Page;
