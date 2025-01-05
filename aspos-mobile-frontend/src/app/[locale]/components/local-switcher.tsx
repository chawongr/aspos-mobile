// 'use client'

// import React from 'react';
// import { useTransition } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useLocale } from "next-intl";
// import Image from 'next/image';

// export default function LocalSwitcher() {
//     const [isPending, startTransition] = useTransition();
//     const router = useRouter();
//     const localActive = useLocale();
//     const path = usePathname().substring(3);

//     const onLocaleChange = (nextLocale: string) => {
//         startTransition(() => {
//             router.replace(`/${nextLocale}${path}`);
//         });
//     };

//     return (
//         <div className='flex'>
//             <div
//                 className={`flex cursor-pointer ${localActive === 'th' ? '' : 'opacity-20 hover:scale-110 duration-300'}`}
//                 onClick={() => onLocaleChange('th')}
//             >
//                 <Image src="/th.png" width={23} height={15} alt='th' />
//                 <div className='ml-2'>TH</div>
//             </div>
//             <div className='w-[1px] h-4 bg-slate-400 mx-3 my-auto'></div>

//             <div
//                 className={`flex cursor-pointer ${localActive === 'en' ? '' : 'opacity-20 hover:scale-110 duration-300'}`}
//                 onClick={() => onLocaleChange('en')}
//             >
//                 <Image src="/us.png" width={23} height={15} alt='us' />
//                 <div className='ml-2'>EN</div>
//             </div>
//         </div>
//     );
// }

'use client';

import React from 'react';
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from 'next/image';
import { ThFlag, EnFlag } from '@/app/[locale]/components/all-image';


export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
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

