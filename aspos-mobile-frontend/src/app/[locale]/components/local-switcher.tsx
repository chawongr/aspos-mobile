'use client';

import React from 'react';
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from 'next/image';
import { ThFlag, EnFlag } from '@/app/[locale]/components/all-image';


export default function LocaleSwitcher() {
    const [, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const path = usePathname().substring(3);

    const toggleLocale = () => {
        const nextLocale = localActive === 'th' ? 'en' : 'th';
        startTransition(() => {
            router.replace(`/${nextLocale}${path}`);
        });
    };

    return (
        <div
            className="flex cursor-pointer items-center"
            onClick={toggleLocale}
        >
            {localActive === 'th' ? (
                <>
                    <div className="w-6 h-6 md:w-8 md:h-8 md:mb-[2px] rounded-full overflow-hidden">
                        <Image
                            src={ThFlag}
                            alt="Thai Flag"
                            className="object-cover w-full h-full"
                            width={64}
                            height={64}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="w-6 h-6 md:w-8 md:h-8 md:mb-[2px] rounded-full overflow-hidden">
                        <Image
                            src={EnFlag}
                            alt="Thai Flag"
                            className="object-cover w-full h-full"
                            width={64}
                            height={64}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

