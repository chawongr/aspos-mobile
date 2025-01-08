// 'use client';
// import React, { createContext, useContext, useState } from 'react';

// interface BasketItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   description?: string;
// }

// interface BasketContextProps {
//   basket: BasketItem[];
//   addToBasket: (item: BasketItem) => void;
// }

// const BasketContext = createContext<BasketContextProps | undefined>(undefined);

// export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [basket, setBasket] = useState<BasketItem[]>([]);

//   const addToBasket = (item: BasketItem) => {
//     setBasket((prevBasket) => {
//       const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
//       if (existingItem) {
//         return prevBasket.map((basketItem) =>
//           basketItem.id === item.id
//             ? { ...basketItem, quantity: basketItem.quantity + item.quantity }
//             : basketItem
//         );
//       }
//       return [...prevBasket, item];
//     });
//   };
  

//   return (
//     <BasketContext.Provider value={{ basket, addToBasket }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// export const useBasket = () => {
//   const context = useContext(BasketContext);
//   if (!context) {
//     throw new Error('useBasket must be used within a BasketProvider');
//   }
//   return context;
// };


'use client';
import React, { createContext, useContext, useState } from 'react';

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

interface BasketContextProps {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  clearBasket: () => void; // Add clearBasket function
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const BasketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (item: BasketItem) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + item.quantity }
            : basketItem
        );
      }
      return [...prevBasket, item];
    });
  };

  const clearBasket = () => {
    setBasket([]); // Clear all items in the basket
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
