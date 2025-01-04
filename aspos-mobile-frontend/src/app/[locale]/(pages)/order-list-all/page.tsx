import React from 'react';
import OrderCard from '../../components/order-card';
import { ThFlag } from '@/app/[locale]/components/all-image'

export default function OrderList() {
  const orders = [
    {
      imageUrl: ThFlag,
      title: 'ข้าวผัดกะเพราทะเลไข่ข้น',
      description:
        'ข้าวกะเพราหมูหั่นชิ้น(คลุก)ใช้พริกแห้งและซอกะเพราสูตรพันปีลับเฉพาะร้าน',
      price: 129,
      quantity: 1,
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
        />
      ))}
    </div>
  );
}
