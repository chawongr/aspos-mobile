'use client';

import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface AllListItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    status: string;
    uniqueKey: string;
}

interface AllListContextProps {
    allList: AllListItem[];
    addToAllList: (items: AllListItem[]) => void;
}

const AllListContext = createContext<AllListContextProps | undefined>(undefined);

export const AllListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [allList, setAllList] = useState<AllListItem[]>([]);

    //   const addToAllList = (items: AllListItem[]) => {
    //     setAllList((prev) => [...prev, ...items]);
    //   };
    const addToAllList = (items: AllListItem[]) => {
        const itemsWithUniqueIds = items.map((item) => ({
            ...item,
            uniqueKey: uuidv4(), // Add a unique key to each item
        }));
        setAllList((prev) => [...prev, ...itemsWithUniqueIds]);
    };

    return (
        <AllListContext.Provider value={{ allList, addToAllList }}>
            {children}
        </AllListContext.Provider>
    );
};

export const useAllList = () => {
    const context = useContext(AllListContext);
    if (!context) {
        throw new Error('useAllList must be used within an AllListProvider');
    }
    return context;
};
