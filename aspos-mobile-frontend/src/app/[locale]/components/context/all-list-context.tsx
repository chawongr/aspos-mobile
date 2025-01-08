'use client';

import React, { createContext, useContext, useState } from 'react';

interface AllListItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
}

interface AllListContextProps {
  allList: AllListItem[];
  addToAllList: (items: AllListItem[]) => void;
}

const AllListContext = createContext<AllListContextProps | undefined>(undefined);

export const AllListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allList, setAllList] = useState<AllListItem[]>([]);

  const addToAllList = (items: AllListItem[]) => {
    setAllList((prev) => [...prev, ...items]);
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
