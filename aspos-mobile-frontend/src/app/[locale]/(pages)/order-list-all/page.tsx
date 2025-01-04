import React from 'react';
import OrderCard from '../../components/order-card';
import MenuCard from '../../components/menu-card';
import { food2 } from '@/app/[locale]/components/all-image'

export default function OrderList() {
  const orders = [
    {
      imageUrl: food2,
      title: 'ข้าวผัดกะเพราทะเลไข่ข้น',
      description:
        'ข้าวกะเพราหมูหั่นชิ้น(คลุก)ใช้พริกแห้งและซอกะเพราสูตรพันปีลับเฉพาะร้าน',
      price: 129,
      quantity: 1,
      status:"กำลังทำ"
    },
  ];

  return (
    <div >
      {orders.map((order, index) => (
        <OrderCard
          key={index}
          imageUrl={order.imageUrl}
          title={order.title}
          description={order.description}
          price={order.price}
          quantity={order.quantity}
          status={order.status}
        />
      ))}
      {orders.map((order, index) => (
        <MenuCard
          key={index}
          imageUrl={order.imageUrl}
          title={order.title}
          description={order.description}
          price={order.price}
          quantity={order.quantity}
        />
      ))}
    </div>
  );
}
